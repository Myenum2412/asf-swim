"use client"

import Image from "next/image"
import { Award, Clock, Mail, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string
  role: string
  experience: string
  specialization: string
  image?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "MOHAMMED THABREZ KHAN B.E , N.I.S(SWIMMING)",
    role: "HEAD COACH",
    experience: "15+ years",
    specialization: "ASCA Level 3 - American Swimming Coaches Association",
    image: "/team/thabrez.jpg", // Make sure this image exists in public/team/
  },
  {
    name: "MADAN KUMAR . B",
    role: "JUNIOR COACH",
    experience: "3+ years",
    specialization: "Certified Swimming Instructor",
    image: "/team/madan.jpg", // Make sure this image exists in public/team/
  },
]

const TeamSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
            👥 Our Team
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
              {" "}Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced and certified team is here to help you achieve your swimming goals safely and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name}'s profile`}
                    width={120}
                    height={120}
                    className="w-30 h-30 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>

                <div className="space-y-3 mb-6 text-sm text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{member.experience}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-center">
                    <Star className="h-4 w-4 text-gray-500" />
                    <span>{member.specialization}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transition-all duration-300 transform group-hover:scale-105"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact {member.name.split(" ")[0]}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
