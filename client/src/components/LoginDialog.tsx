import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneDigits, setPhoneDigits] = useState<string[]>(Array(10).fill(""));
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(4).fill(""));
  const phoneInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const DUMMY_OTP = "1234";

  useEffect(() => {
    if (open && step === "phone") {
      setTimeout(() => phoneInputRefs.current[0]?.focus(), 100);
    }
  }, [open, step]);

  const handlePhoneDigitChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newDigits = [...phoneDigits];
    newDigits[index] = value;
    setPhoneDigits(newDigits);

    if (value && index < 9) {
      phoneInputRefs.current[index + 1]?.focus();
    }
  };

  const handlePhoneKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !phoneDigits[index] && index > 0) {
      phoneInputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpDigitChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);

    if (value && index < 3) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleSendOtp = () => {
    const phone = phoneDigits.join("");
    if (phone.length !== 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a 10-digit mobile number",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "OTP Sent",
      description: `Verification code sent to +91 ${phone}`,
    });
    setStep("otp");
    setTimeout(() => otpInputRefs.current[0]?.focus(), 100);
  };

  const loginMutation = useMutation({
    mutationFn: async (phone: string) => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, isOtpLogin: true }),
        credentials: "include"
      });

      if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "Login failed");
      }

      return res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Welcome!",
        description: data.message || "Login successful"
      });
      onOpenChange(false);
      resetForm();
      setLocation("/");
    },
    onError: (error: Error) => {
      if (error.message.includes("not found")) {
        registerMutation.mutate(phoneDigits.join(""));
      } else {
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  });

  const registerMutation = useMutation({
    mutationFn: async (phone: string) => {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          name: `User ${phone.slice(-4)}`,
          email: `${phone}@ramani.com`
        }),
        credentials: "include"
      });

      if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "Registration failed");
      }

      return res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Welcome to Ramani Fashion!",
        description: "Your account has been created successfully"
      });
      onOpenChange(false);
      resetForm();
      setLocation("/");
    },
    onError: (error: Error) => {
      toast({
        title: "Registration Failed",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const handleVerifyOtp = () => {
    const otp = otpDigits.join("");
    
    if (otp !== DUMMY_OTP) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the correct OTP",
        variant: "destructive"
      });
      return;
    }

    const phone = phoneDigits.join("");
    loginMutation.mutate(phone);
  };

  const resetForm = () => {
    setStep("phone");
    setPhoneDigits(Array(10).fill(""));
    setOtpDigits(Array(4).fill(""));
  };

  const handleEdit = () => {
    setStep("phone");
    setOtpDigits(Array(4).fill(""));
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      onOpenChange(newOpen);
      if (!newOpen) resetForm();
    }}>
      <DialogContent className="sm:max-w-md">
        {step === "phone" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Enter Mobile Number</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-2 border-input rounded-lg px-3 py-2.5">
                  <span className="text-lg">🇮🇳</span>
                  <span className="font-semibold text-sm">+91</span>
                  <div className="flex-1 flex gap-1">
                    {phoneDigits.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (phoneInputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handlePhoneDigitChange(index, e.target.value)}
                        onKeyDown={(e) => handlePhoneKeyDown(index, e)}
                        className="w-7 h-8 text-center text-base font-semibold border-b-2 border-input bg-transparent focus:outline-none focus:border-primary"
                      />
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleSendOtp}
                  disabled={phoneDigits.join("").length !== 10}
                  className="w-full rounded-full h-11 text-base font-semibold"
                >
                  Continue
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By continuing, you agree to our Terms & Conditions
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">OTP Verification</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-center text-sm text-muted-foreground">
                We have sent verification code to
              </p>
              <div className="text-center">
                <span className="font-semibold">+91 {phoneDigits.join("")}</span>
                <button
                  onClick={handleEdit}
                  className="ml-2 text-primary h-auto p-0 text-sm underline hover:no-underline bg-transparent border-0 cursor-pointer"
                >
                  Edit
                </button>
              </div>

              <div className="flex justify-center gap-3 py-4">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpInputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpDigitChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-14 h-16 text-center text-2xl font-bold border-2 border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                  />
                ))}
              </div>

              <Button
                onClick={handleVerifyOtp}
                disabled={otpDigits.join("").length !== 4 || loginMutation.isPending || registerMutation.isPending}
                className="w-full rounded-full h-11 text-base font-semibold"
              >
                Verify
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Test OTP: {DUMMY_OTP}
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
