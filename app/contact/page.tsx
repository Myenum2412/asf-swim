"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Navigation,
  Star,
  CheckCircle,
  Droplets,
  Users,
  Award,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import TeamSection from "@/components/TeamMember";
import ContactOptionsSection from "@/components/ContactOptionsSection";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    program: "",
    preferredTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        program: "",
        preferredTime: "",
      });
    }, 2000);
  };

  const contactMethods = [
    {
      title: "Visit Our Center",
      description: "Come see our world-class facilities in person",
      icon: MapPin,
      details: [
        "Arthanari Bakkiam Complex, 39/7",
        "Vasagasalai Street, Near Ponganapathi Temple",
        "Ponnammapet, Salem, Tamil Nadu 636001",
      ],
      action: "Get Directions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Call Us Directly",
      description: "Speak with our friendly staff immediately",
      icon: Phone,
      details: [
        "09943799969",
        "Available 7 days a week",
        "Quick response guaranteed",
      ],
      action: "Call Now",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Send an Email",
      description: "Detailed inquiries and information requests",
      icon: Mail,
      details: [
        "info@oasisaquatic.com",
        "Response within 24 hours",
        "Detailed information provided",
      ],
      action: "Send Email",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Schedule a Tour",
      description: "Book a personalized facility tour",
      icon: Calendar,
      details: [
        "Free facility tours available",
        "Meet our expert staff",
        "See all amenities and programs",
      ],
      action: "Book Tour",
      color: "from-orange-500 to-red-500",
    },
  ];

  const operatingHours = [
    {
      day: "Monday - Friday",
      hours: "5:30 AM - 9:30 PM",
      note: "Peak hours: 6-8 AM, 6-8 PM",
    },
    {
      day: "Saturday",
      hours: "6:00 AM - 9:00 PM",
      note: "Family swimming hours available",
    },
    {
      day: "Sunday",
      hours: "6:30 AM - 8:30 PM",
      note: "Relaxed schedule for families",
    },
  ];

  const quickLinks = [
    {
      title: "Program Information",
      description: "Learn about our swimming programs",
      link: "/programs",
    },
    {
      title: "Facility Tour",
      description: "Schedule a visit to see our facilities",
      link: "/facilities",
    },
    {
      title: "Safety Guidelines",
      description: "Important safety information",
      link: "/safety",
    },
    {
      title: "Photo Gallery",
      description: "See our facilities and activities",
      link: "/gallery",
    },
    {
      title: "Swimming Blog",
      description: "Tips and advice from our experts",
      link: "/blog",
    },
  ];

  const faqs = [
    {
      question: "What are your pool temperatures?",
      answer:
        "Our main pool is maintained at 28°C year-round, while our children's pool is kept at 29°C for comfort.",
    },
    {
      question: "Do you offer trial lessons?",
      answer:
        "Yes! We offer free trial lessons for all new students. Contact us to schedule your trial session.",
    },
    {
      question: "What should I bring for my first visit?",
      answer:
        "Bring swimwear, a towel, and any personal items you need. We provide all training equipment.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes, we have ample free parking available for all visitors and students.",
    },
    {
      question: "Do you have changing facilities?",
      answer:
        "We have modern, clean changing rooms with lockers, showers, and all necessary amenities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Enhanced Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 text-lg px-4 py-2">
              📞 Get in Touch
            </Badge>
            <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Contact
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to start your swimming journey? Have questions about our
              programs? We're here to help! Contact Salem's premier aquatic
              center today.
            </p>
          </div>

          {/* Quick Contact Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "< 2 hrs",
                label: "Response Time",
                icon: MessageCircle,
              },
              { number: "7 Days", label: "Available Weekly", icon: Clock },
              { number: "100%", label: "Satisfaction Rate", icon: Star },
              { number: "Free", label: "Consultation", icon: CheckCircle },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 interactive-card"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <ContactOptionsSection />

      {/* Contact Form & Info */}
      <ContactSection />

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
              ❓ FAQ
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our facilities, programs,
              and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your question answered?
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 btn-hover-effect">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask Us Anything
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🏊‍♂️ Ready to Start?
            </Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your Swimming Journey Starts Here
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Don't wait to begin your aquatic adventure. Contact us today to
              schedule a tour, ask questions, or enroll in our programs. Salem's
              premier swimming facility is ready to welcome you!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
                <p className="text-sm opacity-90">
                  Professional instruction from certified coaches
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Safety First</h3>
                <p className="text-sm opacity-90">
                  Comprehensive safety protocols and trained staff
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-sm opacity-90">
                  Thousands of successful swimmers trained
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Visit
              </Button>
              <Button
                asChild
                className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <a href="tel:+919943799969">
                  <Phone className="h-5 w-5" />
                  Call +91 99437 99969
                </a>
              </Button>
            </div>

            <p className="text-sm opacity-75 mt-8">
              Free consultation • No obligation • Expert advice • Immediate
              response
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
