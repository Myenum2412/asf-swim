"use client"

import React from "react"
import { MapPin, Clock, Navigation, CheckCircle, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSekc0B_dQTj-kvzZBNvJKFX--3tHRRari_1JzBeUW6Tr-7zZg/formResponse"

export default function ContactSection(): JSX.Element {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                📝 Send Message
              </Badge>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours with detailed information about our programs and
                facilities.
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-white">
              <CardContent className="p-8">
                <form
                  action={GOOGLE_FORM_ACTION}
                  method="POST"
                  target="_blank"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="entry.2005620554"
                        required
                        placeholder="Enter your full name"
                        className="py-3 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="entry.1045781291"
                        required
                        placeholder="your.email@example.com"
                        className="py-3 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="entry.1166974658"
                        placeholder="+91 99437 99969"
                        className="py-3 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Program Interest
                      </label>
                      <select
                        name="entry.839337160"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                      >
                        <option value="">Select a program</option>
                        <option value="Learn to Swim">Learn to Swim</option>
                        <option value="Competitive Swimming">
                          Competitive Swimming
                        </option>
                        <option value="Water Safety & Lifeguard">
                          Water Safety & Lifeguard
                        </option>
                        <option value="Adult Lessons">Adult Lessons</option>
                        <option value="Aqua Fitness">Aqua Fitness</option>
                        <option value="Private Lessons">Private Lessons</option>
                        <option value="Facility Tour">Facility Tour</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        name="entry.1065046570"
                        required
                        placeholder="What can we help you with?"
                        className="py-3 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Booking Date *
                      </label>
                      <Input
                        type="date"
                        name="entry.1587632404"
                        required
                        className="py-3 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Time
                    </label>
                    <select
                      name="entry.1329481056"
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">Select preferred time</option>
                      <option value="Morning (6 AM - 12 PM)">
                        Morning (6 AM - 12 PM)
                      </option>
                      <option value="Afternoon (12 PM - 6 PM)">
                        Afternoon (12 PM - 6 PM)
                      </option>
                      <option value="Evening (6 PM - 9 PM)">
                        Evening (6 PM - 9 PM)
                      </option>
                      <option value="Anytime">Anytime</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="entry.839033604"
                      required
                      rows={5}
                      className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Tell us more about your swimming goals or questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 text-lg transform hover:scale-105 shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Terms of Service.
                    We'll respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info or Map */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Address
                </h4>
                <p className="text-gray-600">
                  Arthanari Bakkiam Complex, 39/7 Vasagasalai St,<br />
                  Near Ponganapathi Temple, Ponnammapet,<br />
                  Salem, Tamil Nadu 636001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Hours
                </h4>
                <p className="text-gray-600">Mon - Sat: 6:00 AM – 9:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Navigation className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  Get Directions
                </h4>
                <a
                  href="https://www.google.com/maps/place/Aura+Fitness+Studio/@11.6668878,78.170566,994m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3babf15db672f29d:0xcd6aef5dc0538236!8m2!3d11.6668826!4d78.1731463!16s%"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <iframe
              title="AquaLux Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.400308216017!2d78.170566!3d11.6668826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf15db672f29d%3A0xcd6aef5dc0538236!2sAura%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1719941394087!5m2!1sen!2sin"
              className="w-full h-80 rounded-lg shadow-lg border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
