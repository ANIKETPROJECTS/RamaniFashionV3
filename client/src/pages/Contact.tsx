import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().min(10, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return await apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="relative h-[300px] bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-pink-300"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-300"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-pink-200"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            We'd love to hear from you! Whether you have a question about our products, need assistance, or just want to share your feedback.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-pink-200 dark:border-pink-800 hover:shadow-xl transition-shadow" data-testid="card-contact-address">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-900 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-pink-600 dark:text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Address</h3>
              <p className="text-gray-600 dark:text-gray-300" data-testid="text-address">
                Shop No. 15, Ground Floor, Kalpataru Complex,<br />
                Near City Mall, Nashik, Maharashtra 422001
              </p>
            </CardContent>
          </Card>

          <Card className="border-pink-200 dark:border-pink-800 hover:shadow-xl transition-shadow" data-testid="card-contact-phone">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-900 rounded-full mb-4">
                <Phone className="w-8 h-8 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Phone</h3>
              <a 
                href="tel:+915555555555" 
                className="text-purple-600 dark:text-purple-400 hover:underline block mb-2"
                data-testid="link-phone"
              >
                +91 5555555555
              </a>
              <div className="flex justify-center gap-4 mt-4">
                <a 
                  href="https://instagram.com/ramanifashion" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pink-600 dark:text-pink-400 hover:scale-110 transition-transform"
                  data-testid="link-instagram"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://wa.me/915555555555" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-600 dark:text-green-400 hover:scale-110 transition-transform"
                  data-testid="link-whatsapp"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-200 dark:border-pink-800 hover:shadow-xl transition-shadow" data-testid="card-contact-email">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-200 dark:from-pink-800 dark:to-purple-900 rounded-full mb-4">
                <Mail className="w-8 h-8 text-pink-600 dark:text-pink-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Email</h3>
              <a 
                href="mailto:info@ramanifashion.in" 
                className="text-pink-600 dark:text-pink-400 hover:underline"
                data-testid="link-email"
              >
                info@ramanifashion.in
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="border-pink-200 dark:border-pink-800 mb-8" data-testid="card-store-hours">
          <CardContent className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-800 dark:to-pink-900 rounded-full mb-4">
              <Clock className="w-8 h-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Store Hours</h3>
            <div className="text-gray-600 dark:text-gray-300">
              <p data-testid="text-hours-weekday">Monday - Saturday: 10:00 AM - 9:00 PM</p>
              <p data-testid="text-hours-sunday">Sunday: 11:00 AM - 8:00 PM</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="border-pink-200 dark:border-pink-800" data-testid="card-contact-form">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            {...field} 
                            className="border-pink-200 dark:border-pink-800 focus:border-pink-500"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Mobile Number *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your mobile number" 
                            {...field}
                            className="border-pink-200 dark:border-pink-800 focus:border-pink-500"
                            data-testid="input-mobile"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            {...field}
                            className="border-pink-200 dark:border-pink-800 focus:border-pink-500"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Subject *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What is this regarding?" 
                            {...field}
                            className="border-pink-200 dark:border-pink-800 focus:border-pink-500"
                            data-testid="input-subject"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Category of Interest *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="border-pink-200 dark:border-pink-800 focus:border-pink-500"
                              data-testid="select-category"
                            >
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sarees" data-testid="option-sarees">Sarees</SelectItem>
                            <SelectItem value="lehengas" data-testid="option-lehengas">Lehengas</SelectItem>
                            <SelectItem value="kurtis" data-testid="option-kurtis">Kurtis</SelectItem>
                            <SelectItem value="dress-materials" data-testid="option-dress-materials">Dress Materials</SelectItem>
                            <SelectItem value="custom-order" data-testid="option-custom-order">Custom Order</SelectItem>
                            <SelectItem value="bulk-order" data-testid="option-bulk-order">Bulk Order</SelectItem>
                            <SelectItem value="general-inquiry" data-testid="option-general-inquiry">General Inquiry</SelectItem>
                            <SelectItem value="complaint" data-testid="option-complaint">Complaint</SelectItem>
                            <SelectItem value="feedback" data-testid="option-feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your inquiry..."
                            className="min-h-[120px] border-pink-200 dark:border-pink-800 focus:border-pink-500"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-6 text-lg"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="border-pink-200 dark:border-pink-800 h-full" data-testid="card-map">
            <CardContent className="p-0">
              <div className="relative w-full h-[600px] lg:h-full min-h-[500px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.6774857769634!2d73.7875!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzUxLjAiTiA3M8KwNDcnMTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ramani Fashion Location"
                  data-testid="iframe-map"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
