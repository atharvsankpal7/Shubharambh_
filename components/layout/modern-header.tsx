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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buildSectionUrl = (section: SectionHierarchy): string => {
    return `/products?section=${encodeURIComponent(section.name)}`;
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-purple-100/50'
          : 'bg-white/90 backdrop-blur-lg border-b border-purple-50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-white text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span className="font-medium">{"+91 81809 39260"}</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">Premium Event Management</span>
            </div>
          </div>
          
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 rounded-full px-3 py-1 h-auto text-xs"
          >
            <Link href={`https://wa.me/${"+91 81809 39260".replace(/\s+/g, '')}`} target="_blank">
              <MessageCircle className="h-3 w-3 mr-1" />
              WhatsApp Us
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center space-x-3 transition-transform hover:scale-105 duration-300"
          >
            <div className="relative">
              <Image 
                src="/logo.jpg" 
                className="w-12 h-12 rounded-xl shadow-lg" 
                alt="Shubharambh events logo" 
                width={48} 
                height={48}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent leading-tight">
                Shubharambh
              </span>
              <span className="text-lg font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight -mt-1">
                Events
              </span>
              <div className="text-xs text-gray-500 font-medium mt-0.5 tracking-wide">
                Creating Unforgettable Moments
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/products", label: "Gallery" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-6 py-2 text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300 transform -translate-x-1/2"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </Link>
            ))}
            
            <Button
              asChild
              className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-400/40 transition-all duration-300 transform hover:scale-105 px-6 py-2"
            >
              <Link href="/contact">
                Get Quote
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-12 h-12 rounded-xl hover:bg-purple-100 transition-all duration-300 relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <motion.div
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute w-6 h-0.5 bg-gray-700 group-hover:bg-purple-600"
              />
              <motion.div
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-2 w-6 h-0.5 bg-gray-700 group-hover:bg-purple-600"
              />
              <motion.div
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 w-6 h-0.5 bg-gray-700 group-hover:bg-purple-600"
              />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-purple-100/50 shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="container mx-auto px-4 py-6 space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/products", label: "Gallery" },
                  { href: "/contact", label: "Contact Us" }
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 group border border-transparent hover:border-purple-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-gray-200/50 mt-4"
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-400/40 transition-all duration-300 py-4 text-base transform hover:scale-105"
                  >
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Free Quote
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}