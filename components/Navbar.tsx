"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/facilities", label: "Facilities" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-300">
              <img
                src="/swim-logo.png" // Replace with your logo file path
                alt="Oasis Aquatic Center Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-800">
                Oasis Aquatic Center
              </span>
              <div className="text-xs text-blue-600 font-medium">
                Excellence in Swimming • Salem
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors relative group font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info + CTA + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1 text-gray-600">
                <Phone className="h-4 w-4" />
                <a href="tel:+919943799969" className="hover:underline">
                  09943799969
                </a>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Salem, TN</span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mt-4 lg:hidden flex flex-col items-end space-y-4 text-right">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-2 text-sm mt-4 border-t pt-4 w-full items-end text-right">
              <a href="tel:+919943799969" className="flex justify-end items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>09943799969</span>
              </a>
              <div className="flex justify-end items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Salem, TN</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
