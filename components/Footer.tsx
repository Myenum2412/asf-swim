"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircleMore,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-20 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-cyan-800/10 pointer-events-none" />

      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 overflow-hidden rounded-full border">
                <Image
                  src="/swim-logo.png" // ⬅️ Replace with your actual logo path
                  alt="Oasis Aquatic Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Oasis Aquatic Center</h2>
                <p className="text-sm text-blue-400">Excellence in Swimming • Salem</p>
              </div>
            </Link>

            <p className="text-gray-400 max-w-md leading-relaxed">
              Premier swimming instruction and aquatic programs in Salem, Tamil Nadu. Making waves since 2012 with
              certified trainers and advanced facilities.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.href = "tel:+919943799969"}
                className="flex items-center gap-3 text-left text-gray-300 hover:text-white transition group"
              >
                <Phone className="h-5 w-5 text-blue-400 group-hover:scale-110 transition" />
                <span className="underline underline-offset-2">+91 99437 99969</span>
              </button>
              <button
                onClick={() => window.location.href = "mailto:info@oasisaquatic.com"}
                className="flex items-center gap-3 text-left text-gray-300 hover:text-white transition group"
              >
                <Mail className="h-5 w-5 text-blue-400 group-hover:scale-110 transition" />
                <span className="underline underline-offset-2">info@oasisaquatic.com</span>
              </button>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <address className="not-italic">
                  Arthanari Bakkiam Complex, 39/7 Vasagasalai St<br />
                  Near Ponganapathi Temple, Ponnammapet<br />
                  Salem, Tamil Nadu 636001
                </address>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition group"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition group"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition group"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="#" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition group"
              >
                <MessageCircleMore className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Programs</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { label: "Learn to Swim", href: "/programs/learn-to-swim" },
                { label: "Competitive Training", href: "/programs/competitive" },
                { label: "Water Safety", href: "/programs/safety" },
                { label: "Adult Lessons", href: "/programs/adults" },
                { label: "Private Coaching", href: "/programs/private" },
                { label: "Group Classes", href: "/programs/group" },
              ].map(({ label, href }, index) => (
                <li key={index}>
                  <Link href={href} className="group flex items-center space-x-2 hover:text-white transition">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "Pool Schedule", href: "/facilities#schedule" },
                { name: "Safety Guidelines", href: "/safety" },
                { name: "Photo Gallery", href: "/gallery" },
                { name: "Swimming Tips", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
                { name: "About Us", href: "/about" },
              ].map(({ name, href }, index) => (
                <li key={index}>
                  <Link href={href} className="group flex items-center space-x-2 hover:text-white transition">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <div>
              <p>&copy; {new Date().getFullYear()} Oasis Aquatic Center. All rights reserved.</p>
              <p className="text-xs">Making swimming accessible and enjoyable for everyone in Salem.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-white transition">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
