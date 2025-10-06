import { Phone, Mail, MapPin, MessageCircle, Instagram, Youtube } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const contactSettings = {
    phone: "+91 81809 39260",
    whatsappNumber: "+91 81809 39260",
    email: "shubharambhevents000@gmail.com",
    address: "Gandhi Chowk, Sangli, Uran Islampur, Maharashtra 415409",
    mapEmbedUrl: "https://maps.app.goo.gl/vR8AEG3FSG2XJ4QK9"
  }

  const socialMedia = [
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/shubharambha_event_management/", color: "#E1306C" },
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@ShubharambhEventManagement", color: "#FF0000" }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-rose-50/10">
      <main className="flex-1">
        <section className="py-24 bg-gradient-to-br from-rose-50 to-blue-50/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 text-rose-800/90">Reach Out</h1>
              <p className="text-xl text-rose-700/80 mb-8">
                We&apos;re here to help and collaborate. Connect with us through your preferred channel.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 -mt-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <Card className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">Call Us</h3>
                  <p className="text-rose-700/80 mb-4">Available during business hours</p>
                  <a href="tel:+918180939260" className="text-lg font-medium text-rose-600 hover:text-rose-800 transition-colors">
                    +91 81809 39260
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">WhatsApp</h3>
                  <p className="text-green-700/80 mb-4">Quick chat support</p>
                  <a 
                    href="https://wa.me/918180939260?text=Hello!%20I'm%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-green-600 hover:text-green-800 transition-colors"
                  >
                    Chat Now
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2 ">Email Us</h3>
                  <p className="text-blue-700/80 mb-4">We&apos;ll respond within 24 hours</p>
                  <a href="mailto:shubharambhevents000@gmail.com" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors break-all">
                    shubharambhevents000@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">Visit Us</h3>
                  <p className="text-amber-700/80 mb-4">Schedule an appointment</p>
                  <address className="text-lg font-medium not-italic text-amber-600">
                    Gandhi Chowk, Sangli, Uran Islampur, Maharashtra 415409
                  </address>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-50/30 to-rose-50/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-rose-800/80 mb-3">Connect With Us</h2>
                <p className="text-rose-700/80 max-w-2xl mx-auto">
                  Stay updated with our latest events and celebrations.
                </p>
              </div>

              <Card className="border-0 bg-white/70 shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-4 pl-6">
                    {socialMedia.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group"
                      >
                        <div className="w-8 mr-3" style={{ color: social.color }}>
                          <social.icon className="h-5 w-5" />
                        </div>
                        <span 
                          className="group-hover:opacity-80 transition-opacity"
                          style={{ color: social.color }}
                        >
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg border border-rose-100">
              <iframe 
                src="https://maps.google.com/maps?q=Gandhi%20Chowk%2C%20Sangli%2C%20Uran%20Islampur%2C%20Maharashtra%20415409&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
