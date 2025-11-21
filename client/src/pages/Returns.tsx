import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { RotateCcw, RefreshCw, CheckCircle } from "lucide-react";

export default function Returns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Returns & Exchange</h1>
          <p className="text-pink-100">Hassle-Free Returns Within 30 Days</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white p-6 text-center">
            <RotateCcw className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">30 Days Return</h3>
            <p className="text-gray-700">Full refund window from delivery</p>
          </Card>
          <Card className="bg-white p-6 text-center">
            <RefreshCw className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Exchange</h3>
            <p className="text-gray-700">Swap for different size or design</p>
          </Card>
          <Card className="bg-white p-6 text-center">
            <CheckCircle className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-700">We verify all returns for defects</p>
          </Card>
        </div>

        <Card className="bg-white p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Policy Overview</h2>
            <p className="text-gray-700 mb-2">
              At Ramani Fashion, we want you to be completely satisfied with your purchase. If you're not happy with your saree or ethnic wear, we offer a hassle-free return policy within 30 days of delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Eligibility</h2>
            <p className="text-gray-700 mb-3">Your item is eligible for return if:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Returned within 30 days of delivery date</li>
              <li>Item is unused and in original condition</li>
              <li>All tags and labels are intact</li>
              <li>Packaging is not damaged</li>
              <li>No signs of wear or washing</li>
              <li>Item includes all original accessories/extras</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Returnable Items</h2>
            <p className="text-gray-700 mb-2">The following items cannot be returned:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Custom or made-to-order items (unless defective)</li>
              <li>Items purchased during final sale/clearance</li>
              <li>Customized or personalized products</li>
              <li>Items showing signs of use or alterations</li>
              <li>Worn, washed, or damaged sarees</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Initiate a Return</h2>
            <p className="text-gray-700 mb-3">Follow these simple steps:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Contact our customer service team via email or WhatsApp</li>
              <li>Provide your order number and reason for return</li>
              <li>Receive return authorization and shipping label</li>
              <li>Pack the item securely with original packaging</li>
              <li>Ship using provided label or arrange pickup</li>
              <li>We inspect and process your refund (3-5 business days)</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Shipping</h2>
            <p className="text-gray-700 mb-3">Return shipping costs:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Defective Items:</strong> Free return shipping</li>
              <li><strong>Size/Color Issues:</strong> Free return shipping</li>
              <li><strong>Change of Mind:</strong> Customer pays return shipping (₹60-₹150)</li>
              <li>We provide return labels for authorized returns</li>
              <li>Alternatively, arrange your own courier</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exchange Options</h2>
            <p className="text-gray-700 mb-3">Exchange your item for:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Different size of the same product</li>
              <li>Different color of the same design</li>
              <li>Completely different product of similar value</li>
              <li>Store credit for future purchases</li>
              <li>No additional charges for exchanges of equal value</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
            <p className="text-gray-700 mb-3">Once your return is received and approved:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We inspect the item within 3-5 business days</li>
              <li>Refund is processed to original payment method</li>
              <li>Credit card refunds: 7-10 business days</li>
              <li>UPI/Wallet refunds: 1-3 business days</li>
              <li>You'll receive confirmation via email</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Defective Item Claims</h2>
            <p className="text-gray-700 mb-3">If you receive a defective or damaged item:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Report within 24 hours of delivery with photos</li>
              <li>Free return shipping provided</li>
              <li>Full refund or replacement at no cost</li>
              <li>Rush replacement available (2-3 days)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
            <p className="text-gray-700">
              All returned items are inspected by our quality team to ensure they meet return conditions. Items that show signs of wear, washing, or alterations will be declined and reshipped at the customer's expense.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact & Support</h2>
            <p className="text-gray-700">
              Need help with a return? Contact us:
              <div className="mt-2 text-gray-700">
                <p><strong>Email:</strong> support@ramanifashion.com</p>
                <p><strong>WhatsApp:</strong> Available via our website</p>
                <p><strong>Hours:</strong> Monday-Saturday, 10 AM - 6 PM IST</p>
              </div>
            </p>
          </section>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
