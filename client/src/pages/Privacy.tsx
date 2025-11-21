import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-pink-100">Last updated: November 21, 2025</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Card className="bg-white p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-2">
              Welcome to Ramani Fashion India ("we," "us," "our," or "Company"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains our online information practices and the choices you can make about how your information is collected and used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                <p className="text-gray-700">When you create an account, make a purchase, or contact us, we collect:
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>Name, email address, and phone number</li>
                    <li>Shipping and billing address</li>
                    <li>Payment information (processed securely)</li>
                    <li>Account preferences and wishlist data</li>
                  </ul>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Device & Usage Information</h3>
                <p className="text-gray-700">We automatically collect:
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Device type and operating system</li>
                    <li>Referring website and links clicked</li>
                  </ul>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookies & Tracking</h3>
                <p className="text-gray-700">We use cookies and similar technologies to:
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    <li>Keep you logged into your account</li>
                    <li>Remember your preferences and cart items</li>
                    <li>Analyze website traffic and performance</li>
                    <li>Display personalized content and advertisements</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 space-y-2">
              <div>• Process and deliver your orders</div>
              <div>• Send order confirmations and shipping updates</div>
              <div>• Respond to customer service inquiries</div>
              <div>• Send promotional emails and newsletters (with your consent)</div>
              <div>• Prevent fraud and enhance security</div>
              <div>• Analyze website usage to improve our services</div>
              <div>• Personalize your shopping experience</div>
              <div>• Comply with legal obligations</div>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Sharing</h2>
            <p className="text-gray-700 mb-2">We may share your information with:
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li><strong>Payment Processors:</strong> To process your transactions securely</li>
                <li><strong>Shipping Partners:</strong> To deliver your orders</li>
                <li><strong>Analytics Services:</strong> Google Analytics to understand user behavior</li>
                <li><strong>Marketing Partners:</strong> Only with your explicit consent</li>
                <li><strong>Legal Authorities:</strong> When required by law</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700">
              We implement industry-standard security measures including SSL encryption, secure payment gateways, and restricted access controls to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights & Choices</h2>
            <p className="text-gray-700">You have the right to:
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Access and review your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Opt out of marketing communications</li>
                <li>Request deletion of your account (subject to legal requirements)</li>
                <li>Control cookie preferences through your browser settings</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies & Tracking Technologies</h2>
            <p className="text-gray-700 mb-2">Our website uses the following types of cookies:
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for site functionality</li>
                <li><strong>Performance Cookies:</strong> Measure website usage</li>
                <li><strong>Functional Cookies:</strong> Remember user preferences</li>
                <li><strong>Targeting Cookies:</strong> Deliver personalized content</li>
              </ul>
            </p>
            <p className="text-gray-700 mt-2">You can control cookies through your browser settings or opt-out tools.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700">
              Our website is not directed to children under 13 years of age. We do not knowingly collect information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700">
              If you are located outside of India, please be aware that your information may be transferred to, stored in, and processed in India and other countries where our servers are located. By using our website, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700">
              We reserve the right to update this Privacy Policy at any time. We will notify you of significant changes via email or by posting a prominent notice on our website. Your continued use of the website constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              <div className="mt-2 text-gray-700">
                <p><strong>Email:</strong> support@ramanifashion.com</p>
                <p><strong>Address:</strong> Ramani Fashion India</p>
                <p><strong>WhatsApp:</strong> Available via our website</p>
              </div>
            </p>
          </section>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
