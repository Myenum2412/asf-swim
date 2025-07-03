"use client"

import React from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    title: "Call Us",
    description: "We’re available on call for any inquiries.",
    details: ["+91 99437 99969"],
    action: "Call Now",
    icon: Phone,
    color: "from-green-400 to-green-600",
    link: "tel:+919943799969",
  },
  {
    title: "Email Us",
    description: "Send us an email and we’ll get back shortly.",
    details: ["info@oasisaquatic.com"],
    action: "Send Email",
    icon: Mail,
    color: "from-blue-400 to-blue-600",
    link: "mailto:info@oasisaquatic.com",
  },
  {
    title: "Visit Us",
    description: "Drop by our center during working hours.",
    details: [
      "Arthanari Bakkiam Complex",
      "39/7 Vasagasalai St",
      "Near Ponganapathi Temple, Ponnammapet",
      "Salem, Tamil Nadu 636001",
    ],
    action: "Get Directions",
    icon: MapPin,
    color: "from-purple-400 to-purple-600",
    link: "https://www.google.com/maps/place/Arthanari+Bakkiam+Complex,+39%2F7+Vasagasalai+St,+Near+Ponganapathi+Temple,+Ponnammapet,+Salem,+Tamil+Nadu+636001",
  },
]

export default function ContactOptionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Multiple Ways to Reach Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the contact method that works best for you. We're committed to responding quickly and helpfully.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="group text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <method.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{method.description}</p>

                <div className="space-y-2 mb-6">
                  {method.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-sm text-gray-700 font-medium">
                      {detail}
                    </div>
                  ))}
                </div>

                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={method.action}
                >
                  <Button
                    className={`w-full bg-gradient-to-r ${method.color} hover:shadow-lg text-white transition-all duration-300 transform group-hover:scale-105`}
                  >
                    {method.action}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
