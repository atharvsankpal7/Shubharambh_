"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Heart, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

export function ModernFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">SH</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Shubharambh Events</h3>
                  <p className="text-purple-200">& Management</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Creating unforgettable experiences through exceptional event planning and management. 
                Your dream event is our passion and expertise.
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                  <Award className="h-3 w-3 mr-1" />
                  15+ Years Experience
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                  <Star className="h-3 w-3 mr-1" />
                  1000+ Events
                </Badge>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About Us' },
                  { href: '/products', label: 'Services' },
                  { href: '/bundles', label: 'Gallery' },
                  { href: '/contact', label: 'Contact' }
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-all duration-200 group flex items-center hover:translate-x-1"
                    >
                      <span className="w-2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full mr-3"></div>
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Wedding Planning',
                  'Birthday Celebrations',
                  'Corporate Events',
                  'Decoration Services',
                  'Photography & Video',
                  'Catering Services'
                ].map((service) => (
                  <li key={service}>
                    <Link 
                      href="/contact" 
                      className="text-gray-300 hover:text-white transition-all duration-200 group flex items-center hover:translate-x-1"
                    >
                      <span className="w-2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Contact Info Bar */}
        <motion.div
          className="border-t border-white/10 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Call Us</p>
                <p className="text-white font-semibold">+91 8180939260</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Email Us</p>
                <p className="text-white font-semibold">shubharambhevents000@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Location</p>
                <p className="text-white font-semibold">Gandhi Chowk, Uran Islampur</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
              <p className="text-gray-300">
                © {new Date().getFullYear()} Shubharambh Events & Management. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="/terms-privacy" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Privacy
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-pink-400 fill-current animate-pulse" />
              <span>in Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}