"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, Star, Award, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from '@/components/ui/button';
import { SectionHierarchy } from '@/types/section';
import Image from 'next/image';

interface ModernHeaderProps {
  navigationSections: SectionHierarchy[];
  headerData: {
    phone: string;
    whatsappNumber: string;
  };
}

export function ModernHeader({ navigationSections, headerData }: ModernHeaderProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buildSectionUrl = (section: SectionHierarchy): string => {
    return `/products?section=${encodeURIComponent(section.name)}`;
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white backdrop-blur-xl shadow-lg border-b border-purple-100/30'
        : 'bg-white backdrop-blur-md'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-white/20 rounded-full">
                  <Star className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium">Premium Design Templates</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <div className="p-1 bg-white/20 rounded-full">
                  <Award className="h-3.5 w-3.5" />
                </div>
                <span>Trusted by 50,000+ Customers</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={`tel:${headerData.phone.replace(/\s/g, '')}`}
                className="flex items-center space-x-2 hover:text-yellow-200 transition-colors group/phone"
              >
                <div className="p-1.5 bg-white/20 rounded-full group-hover/phone:bg-white/30 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium">{headerData.phone}</span>
              </a>
              <a
                href={`https://wa.me/${headerData.whatsappNumber.replace(/\s/g, '')}`}
                className="hidden sm:flex items-center space-x-2 hover:text-green-200 transition-colors group/whatsapp"
                target="_blank"
              >
                <div className="p-1.5 bg-white/20 rounded-full group-hover/whatsapp:bg-white/30 transition-colors">
                  <MessageCircle className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">


            <Image src={"/logo.jpg"} className="w-12" alt="Shubharambh events logo" width={100} height={100} />




            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                Shubharambh events
              </span>
              <div className="text-xs text-gray-500 font-medium mt-0.5">Premium Event Managment</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/about"
              className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/products"
              className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold group py-2"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <div className="relative group">
              <Link
                href="/products"
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold py-2 group/nav-item"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4 text-gray-400 group-hover/nav-item:text-purple-600 transition-all duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover/nav-item:w-full transition-all duration-300"></span>
              </Link>

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-96 bg-white/70 shadow-2xl border border-purple-100/30 rounded-2xl py-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out scale-95 group-hover:scale-100">
                <div className="px-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                        Design Templates
                      </h4>
                      <div className="space-y-2.5">
                        <Link href="/products?section=Festival Designs" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5 pl-4 rounded-lg hover:bg-purple-50">
                          Festival Designs
                        </Link>
                        <Link href="/products?section=Business Templates" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5 pl-4 rounded-lg hover:bg-purple-50">
                          Business Cards
                        </Link>
                        <Link href="/products?section=Social Media" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5 pl-4 rounded-lg hover:bg-purple-50">
                          Social Media
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
                        Collections
                      </h4>
                      <div className="space-y-2.5">
                        <Link href="/bundles" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5 pl-4 rounded-lg hover:bg-purple-50">
                          Premium Bundles
                        </Link>
                        <Link href="/products?sort=featured" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5 pl-4 rounded-lg hover:bg-purple-50">
                          Featured Designs
                        </Link>
                        <Link href="/products?sort=newest" className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1.5 pl-4 rounded-lg hover:bg-purple-50">
                          Latest Releases
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold group py-2"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-10 h-10 rounded-full hover:bg-purple-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden py-6 border-t border-purple-100/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2 px-2">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-semibold py-3 px-4 rounded-xl hover:bg-purple-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-semibold py-3 px-4 rounded-xl hover:bg-purple-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-semibold py-3 px-4 rounded-xl hover:bg-purple-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/bundles"
                  className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-semibold py-3 px-4 rounded-xl hover:bg-purple-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-semibold py-3 px-4 rounded-xl hover:bg-purple-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>

                <div className="pt-4 border-t border-gray-200/50 mt-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-400/30 transition-all duration-300 py-3"
                  >
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
