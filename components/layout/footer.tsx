import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function xLogo(){
  return (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
    </svg>)
}

function fbLogo(){
  return (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
    </svg>)
}

function instaLogo(){
  return  (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>)
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100 text-gray-800 relative overflow-hidden border-t border-orange-200/50">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-200/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,146,60,0.08)_50%,transparent_75%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="mb-6">
              <div className="w-72 h-auto mb-6">
                <Image 
                  src="/footer-logo.jpg" 
                  width={400} 
                  height={150} 
                  alt="SS Creation Logo"
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Crafting exceptional graphic designs that transform your vision into stunning visual experiences. Professional quality, modern aesthetics, instant downloads.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-2 mt-auto">
              {[
                { logo: fbLogo, href: "#", label: "Facebook" },
                { logo: instaLogo, href: "#", label: "Instagram" },
                { logo: xLogo, href: "#", label: "Twitter" }
              ].map((social) => (
                <Button
                  key={social.label}
                  size="icon"
                  variant="ghost"
                  className={`w-9 h-9 bg-white/60 backdrop-blur-sm border border-orange-200/60  text-gray-600 hover:text-gray-800 rounded-lg transition-all duration-300 hover:scale-105 hover:border-orange-300/60`}
                  asChild
                >
                  <Link href={social.href} aria-label={social.label}>
                    {social.logo()}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 flex items-center">
              <Sparkles className="h-4 w-4 text-orange-500 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Products' },
                { href: '/bundles', label: 'Bundles' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-800 transition-all duration-200 text-sm group flex items-center hover:pl-1"
                  >
                    <span className="w-2 h-0.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 flex items-center">
              <Crown className="h-4 w-4 text-amber-500 mr-2" />
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/products?section=Festival Designs', label: 'Festival Designs' },
                { href: '/bundles', label: 'Design Bundles' },
                { href: '/products?section=Business Templates', label: 'Business Cards' },
                { href: '/products?section=Social Media', label: 'Social Media' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-gray-800 transition-all duration-200 text-sm group flex items-center hover:pl-1"
                  >
                    <span className="w-2 h-0.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 flex items-center">
              <MapPin className="h-4 w-4 text-rose-500 mr-2" />
              Contact Us
            </h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+91-8180939260", href: "tel:+91-8180939260", color: "text-emerald-600" },
                { icon: Mail, text: "shubharambhevents000@gmail.com", href: "mailto:shubharambhevents000@gmail.com", color: "text-blue-600" },
                { icon: MapPin, text: "Gandhi Chowk, Sangli, Uran Islampur, Maharashtra 415409", href: "#", color: "text-rose-600" }
              ].map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  className="flex items-center text-gray-600 hover:text-gray-800 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200/60 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gradient-to-br group-hover:from-orange-200 group-hover:to-amber-200 group-hover:border-orange-300/60 transition-all duration-300">
                    <contact.icon className={`h-3.5 w-3.5 ${contact.color}`} />
                  </div>
                  <span className="text-sm font-medium">{contact.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-orange-200/60 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
              <p className="text-gray-500">
                © {new Date().getFullYear()} SS Creation. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="flex items-center text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="h-3.5 w-3.5 mx-1.5 text-rose-500 fill-current animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}