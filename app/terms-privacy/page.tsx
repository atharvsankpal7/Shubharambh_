import { Shield, FileText, RefreshCw, Truck, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContactData } from '@/lib/actions';
import { ContactSection } from '@/components/terms-privacy/contact-section';



export default async function TermsPrivacyPage() {
  const { contactSettings } = await getContactData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Privacy Policy</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your trust is important to us. Read our policies to understand how we protect your data and ensure fair usage.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Privacy Policy */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <Shield className="h-7 w-7 mr-3" />
                🔐 Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>We only collect necessary data such as name and contact number for purchase and support.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Your data is never shared with third parties.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>All payment transactions are handled securely.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>We do not store your payment details.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Google Drive links are protected and shared only with verified customers.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-7 w-7 mr-3" />
                📄 Terms and Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>All templates are for personal and professional use only.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Redistribution, reselling, or public sharing of Google Drive links is strictly prohibited.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>You must not share download links outside your purchase group.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Links provided via Google Drive will remain active unless policy violations occur.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="font-semibold text-red-600">Violation of terms may result in a permanent ban from our platform and groups.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation & Refund Policy */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <RefreshCw className="h-7 w-7 mr-3" />
                💸 Cancellation & Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>As this is a digital product with instant Google Drive delivery, <strong>cancellations and refunds are not allowed</strong> once the file is shared.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>If you face any technical issues (e.g., broken or missing links), contact us within 24 hours.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Well re-send the access link in case of errors, but no refunds will be processed for downloadable items.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <Truck className="h-7 w-7 mr-3" />
                🚚 Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>All templates are shared via Google Drive.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-800 mb-2">After payment, you will receive:</p>
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                      A Drive link on your WhatsApp or email
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                      Access to download the files directly
                    </li>
                  </ul>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Delivery usually takes <strong>5–10 minutes</strong>, max up to 2 hours during high volume.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl">
                <Phone className="h-7 w-7 mr-3" />
                📞 Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ContactSection contactSettings={contactSettings} />
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-gray-500 text-sm py-4">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}