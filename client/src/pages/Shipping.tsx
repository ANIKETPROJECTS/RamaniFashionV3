import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Truck, Clock, MapPin } from "lucide-react";

export default function Shipping() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Shipping Information</h1>
          <p className="text-pink-100">Fast and Reliable Delivery Across India</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white p-6 text-center">
            <Truck className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-700">On orders above ₹500 across India</p>
          </Card>
          <Card className="bg-white p-6 text-center">
            <Clock className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3-7 Days Delivery</h3>
            <p className="text-gray-700">Standard delivery within India</p>
          </Card>
          <Card className="bg-white p-6 text-center">
            <MapPin className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">All India Coverage</h3>
            <p className="text-gray-700">We deliver to all cities and towns</p>
          </Card>
        </div>

        <Card className="bg-white p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Charges</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="border-b-2 border-pink-200">
                    <th className="text-left py-2 px-2">Order Value</th>
                    <th className="text-left py-2 px-2">Shipping Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-pink-100">
                    <td className="py-3 px-2">Below ₹500</td>
                    <td className="py-3 px-2">₹60 - ₹150 (varies by location)</td>
                  </tr>
                  <tr className="border-b border-pink-100">
                    <td className="py-3 px-2">₹500 - ₹2000</td>
                    <td className="py-3 px-2">FREE</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2">Above ₹2000</td>
                    <td className="py-3 px-2">FREE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Timeline</h2>
            <p className="text-gray-700 mb-3">Processing and delivery times:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Order Processing:</strong> 1-2 business days</li>
              <li><strong>Standard Delivery:</strong> 3-7 business days from dispatch</li>
              <li><strong>Express Delivery:</strong> 1-3 business days (selected locations)</li>
              <li>Orders placed on weekends/holidays are processed on the next business day</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Partners</h2>
            <p className="text-gray-700 mb-3">We partner with trusted logistics providers including:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Delhivery</li>
              <li>Shiprocket</li>
              <li>Fedex</li>
              <li>Other reliable courier services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tracking Your Order</h2>
            <p className="text-gray-700 mb-2">You can track your shipment through:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Tracking link sent via email after dispatch</li>
              <li>Your order history page on our website</li>
              <li>SMS notifications with tracking updates</li>
              <li>WhatsApp updates (if opted in)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Address</h2>
            <p className="text-gray-700 mb-3">To ensure smooth delivery:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide complete and accurate address</li>
              <li>Include landmark for easier location</li>
              <li>Provide valid phone number</li>
              <li>Ensure someone is available to receive the package</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Restrictions</h2>
            <p className="text-gray-700 mb-3">We currently ship to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All locations across India</li>
              <li>International shipping available on request (limited items)</li>
              <li>Remote areas may take additional 3-5 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Damaged or Lost Packages</h2>
            <p className="text-gray-700 mb-2">If your package arrives damaged or doesn't arrive:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Report within 24 hours of delivery</li>
              <li>Provide tracking number and photographs</li>
              <li>We will arrange replacement or refund</li>
              <li>Contact our customer support team immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-700">
              Contact our customer service team for any shipping-related queries. We're here to help!
            </p>
          </section>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
