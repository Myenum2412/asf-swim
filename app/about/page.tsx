import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  Award,
  Target,
  Heart,
  Star,
  Trophy,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Droplets,
  Calendar,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About Us - Oasis Aquatic Center | Premier Swimming Facility in Salem",
  description:
    "Learn about Oasis Aquatic Center's mission, values, and commitment to excellence in swimming instruction. Discover our story, team, and dedication to the Salem community.",
  keywords: "about oasis aquatic center, swimming facility salem, aquatic center history, swimming instructors salem",
}

export default function AboutPage() {
  const milestones = [
    {
      year: "2012",
      title: "Foundation",
      description:
        "Oasis Aquatic Center was established with a vision to provide world-class swimming facilities in Salem",
      icon: Target,
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Added competitive training programs and expanded facility with additional pools",
      icon: TrendingUp,
    },
    {
      year: "2018",
      title: "Recognition",
      description: "Became the premier training center for competitive swimmers in Tamil Nadu",
      icon: Trophy,
    },
    {
      year: "2020",
      title: "Innovation",
      description: "Introduced advanced water safety programs and modern training equipment",
      icon: Award,
    },
    {
      year: "2024",
      title: "Excellence",
      description: "Celebrating 12 years of swimming excellence with over 3,500 students trained",
      icon: Star,
    },
  ]

  const values = [
    {
      title: "Safety First",
      description:
        "We prioritize the safety and well-being of every swimmer through comprehensive safety protocols and certified lifeguards.",
      icon: Shield,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Excellence in Instruction",
      description:
        "Our certified instructors provide personalized attention and expert guidance to help every swimmer achieve their goals.",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Community Focus",
      description:
        "We are committed to serving the Salem community and making swimming accessible to people of all ages and backgrounds.",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Continuous Improvement",
      description: "We constantly evolve our programs and facilities to provide the best possible swimming experience.",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const teamMembers = [
    {
      name: "Ramesh Kumar",
      role: "Founder & Head Coach",
      image: "/placeholder.svg?height=300&width=300",
      experience: "15+ years",
      specialization: "Competitive Swimming & Center Management",
      bio: "Former state-level swimmer turned passionate coach, Ramesh founded Oasis Aquatic Center with a vision to create Salem's premier swimming facility.",
      achievements: ["State Swimming Champion 2005", "Certified Swimming Coach", "Water Safety Instructor"],
    },
    {
      name: "Dr. Lakshmi Priya",
      role: "Water Safety Director",
      image: "/placeholder.svg?height=300&width=300",
      experience: "12+ years",
      specialization: "Water Safety & Medical Emergency Response",
      bio: "A medical professional specializing in aquatic safety, Dr. Priya ensures the highest safety standards at our facility.",
      achievements: ["MBBS, Sports Medicine", "Red Cross Certified", "Emergency Response Trainer"],
    },
    {
      name: "Suresh Patel",
      role: "Learn-to-Swim Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      experience: "10+ years",
      specialization: "Beginner Programs & Child Development",
      bio: "Specializing in teaching beginners and children, Suresh has helped thousands of people overcome their fear of water.",
      achievements: ["Certified Swimming Instructor", "Child Psychology Training", "Water Safety Specialist"],
    },
    {
      name: "Priya Sharma",
      role: "Aqua Fitness Instructor",
      image: "/placeholder.svg?height=300&width=300",
      experience: "8+ years",
      specialization: "Aqua Fitness & Rehabilitation",
      bio: "A fitness expert who brings energy and expertise to our aqua fitness programs, helping members achieve their health goals.",
      achievements: ["Certified Fitness Trainer", "Aqua Aerobics Specialist", "Rehabilitation Expert"],
    },
  ]

  const achievements = [
    {
      title: "3,500+ Students Trained",
      description: "Successfully taught swimming to over 3,500 students of all ages",
      icon: Users,
      number: "3,500+",
    },
    {
      title: "99% Success Rate",
      description: "Achieved 99% success rate in our learn-to-swim programs",
      icon: Trophy,
      number: "99%",
    },
    {
      title: "Zero Safety Incidents",
      description: "Maintained perfect safety record with zero incidents in 12 years",
      icon: Shield,
      number: "0",
    },
    {
      title: "35+ Certified Instructors",
      description: "Team of highly qualified and certified swimming instructors",
      icon: Award,
      number: "35+",
    },
  ]

  const facilities = [
    {
      name: "Main Competition Pool",
      description: "25-meter pool with 6 lanes, perfect for competitive training and lap swimming",
      features: ["Electronic timing system", "Starting blocks", "Spectator seating"],
    },
    {
      name: "Children's Learning Pool",
      description: "Shallow pool designed specifically for children and beginner swimmers",
      features: ["Graduated depth", "Safety features", "Colorful design"],
    },
    {
      name: "Training Pool",
      description: "Dedicated pool for technique training and specialized programs",
      features: ["Video analysis setup", "Moveable lane ropes", "Coach observation deck"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">Oasis Aquatic Center</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/programs" className="text-gray-700 hover:text-blue-600 transition-colors">
                Programs
              </Link>
              <Link href="/facilities" className="text-gray-700 hover:text-blue-600 transition-colors">
                Facilities
              </Link>
              <Link href="/safety" className="text-gray-700 hover:text-blue-600 transition-colors">
                Safety
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
                Gallery
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>09943799969</span>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                Visit Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 text-lg px-4 py-2">
              🏊‍♂️ About Oasis Aquatic Center
            </Badge>
            <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Salem's Premier
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Swimming Destination
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over 12 years, Oasis Aquatic Center has been Salem's trusted partner in swimming education, safety,
              and aquatic excellence. Discover our story, mission, and commitment to the community.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 interactive-card"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{achievement.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{achievement.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">📖 Our Story</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Building Salem's Swimming
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                  {" "}
                  Community
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2012 by former state swimming champion Ramesh Kumar, Oasis Aquatic Center began with a
                  simple yet powerful vision: to create Salem's premier swimming facility where people of all ages could
                  learn, train, and excel in aquatic sports.
                </p>
                <p>
                  What started as a modest facility with a single pool has grown into Tamil Nadu's most comprehensive
                  aquatic center, featuring multiple pools, world-class training equipment, and a team of certified
                  professionals dedicated to swimming excellence.
                </p>
                <p>
                  Today, we're proud to have trained over 3,500 swimmers, maintained a perfect safety record, and
                  established ourselves as the go-to destination for swimming education and competitive training in
                  Salem and surrounding areas.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Tour
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 09943799969
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Oasis Aquatic Center Facility"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-gray-800">Established 2012</div>
                        <div className="text-sm text-gray-600">12+ Years of Excellence</div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Salem's #1 Choice</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">🎯 Mission & Values</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Core
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600"> Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to safety, excellence, community, and continuous improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white interactive-card"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-glow`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">📅 Our Journey</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              12 Years of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Swimming Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Salem's premier aquatic center - here's our journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300 interactive-card">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <milestone.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                            <div className="text-lg font-semibold text-gray-800">{milestone.title}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">👥 Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Expert Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of certified professionals is dedicated to helping you achieve your swimming goals
              safely and effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white interactive-card"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <div className="text-lg font-bold">{member.experience}</div>
                      <div className="text-sm opacity-90">Experience</div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Specialization:</div>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">{member.specialization}</Badge>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</div>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">🏊‍♀️ Our Facilities</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              World-Class
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Swimming Facilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art pools and amenities designed to provide the best possible swimming experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50 interactive-card"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Droplets className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{facility.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">{facility.description}</p>

                  <div className="space-y-3">
                    {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <ArrowRight className="mr-2 h-5 w-5" />
              Explore All Facilities
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">📍 Visit Us</Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">Experience Salem's Premier Swimming Facility</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Located in the heart of Salem, we're easily accessible and ready to welcome you to our swimming community.
              Come see what makes us special!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
                      <p className="text-gray-600">Easy to find, easy to reach</p>
                    </div>
                  </div>
                  <div className="text-left space-y-2 text-gray-700">
                    <div>Arthanari Bakkiam Complex, 39/7</div>
                    <div>Vasagasalai Street</div>
                    <div>Near Ponganapathi Temple</div>
                    <div>Ponnammapet, Salem</div>
                    <div>Tamil Nadu 636001</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-800">Operating Hours</h3>
                      <p className="text-gray-600">Open 7 days a week</p>
                    </div>
                  </div>
                  <div className="text-left space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>5:30 AM - 9:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>6:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>6:30 AM - 8:30 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Visit
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent">
                <Phone className="mr-2 h-5 w-5" />
                Call 09943799969
              </Button>
            </div>

            <p className="text-sm opacity-75 mt-8">
              Free facility tour • Meet our team • See all amenities • No obligation
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
