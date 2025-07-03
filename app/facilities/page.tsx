"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Clock,
  Thermometer,
  Users,
  Droplets,
  Search,
  Filter,
  Star,
  Phone,
  Navigation,
  Wifi,
  Car,
  Coffee,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

// Sample images - replace these with your actual image paths
import mainPoolImage from "@/public/swim.jpg"
import trainingPoolImage from "@/public/trainingPoolImage.jpeg"
import kidsPoolImage from "@/public/kidsPoolImage.jpeg"
import coach1Image from "@/public/Coach/coach1.jpeg"
import coach2Image from "@/public/Coach/coach2.jpeg"

export default function FacilitiesPage() {
  const [selectedFacility, setSelectedFacility] = useState(0)
  const [searchLocation, setSearchLocation] = useState("")
  const [selectedPoolType, setSelectedPoolType] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    facility: "",
    date: "",
    message: ""
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or Google Forms
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        facility: "",
        date: "",
        message: ""
      })
      setFormSubmitted(false)
    }, 5000)
  }

  const facilities = [
    {
      id: "main-center",
      name: "Oasis Main Aquatic Center",
      address: "Arthanari Bakkiam Complex, 39/7, Vasagasalai St, Ponnammapet, Salem",
      phone: "09943799969",
      image: mainPoolImage,
      rating: 4.9,
      reviews: 245,
      distance: "0.2 km from Ponganapathi Temple",
      features: [
        "25-meter competition pool with 6 lanes",
        "Electronic timing system for competitions",
        "Diving area with safety equipment",
        "Heated pool facility (28°C year-round)",
        "Spectator seating for 100 people",
        "Modern changing rooms with lockers",
        "Swimming equipment rental",
        "Poolside refreshment area",
      ],
      amenities: [
        { name: "Free WiFi", icon: Wifi },
        { name: "Parking Available", icon: Car },
        { name: "Refreshments", icon: Coffee },
        { name: "Equipment Rental", icon: Star },
      ],
      schedule: {
        "Monday-Friday": "5:30 AM - 9:30 PM",
        Saturday: "6:00 AM - 9:00 PM",
        Sunday: "6:30 AM - 8:30 PM",
      },
      temperature: "28°C",
      capacity: "120 swimmers",
      specialties: ["Competitive Training", "Learn to Swim", "Water Safety"],
      coordinates: { lat: 11.6643, lng: 78.146 },
    },
    {
      id: "training-center",
      name: "Elite Training Pool",
      address: "Near Ponganapathi Temple, Vasagasalai Street, Salem",
      phone: "09943799969",
      image: trainingPoolImage,
      rating: 4.8,
      reviews: 189,
      distance: "0.1 km from Main Center",
      features: [
        "20-meter training pool with moveable lane ropes",
        "6 training lanes with anti-wave technology",
        "Starting blocks with backstroke ledges",
        "Pace clocks and timing systems",
        "Video analysis setup with underwater cameras",
        "Strength training area adjacent to pool",
        "Coach observation deck",
        "Equipment storage facility",
      ],
      amenities: [
        { name: "Free WiFi", icon: Wifi },
        { name: "Parking Available", icon: Car },
        { name: "Video Analysis", icon: Star },
        { name: "Strength Training", icon: Star },
      ],
      schedule: {
        "Monday-Friday": "5:30 AM - 9:00 PM",
        Saturday: "6:00 AM - 8:00 PM",
        Sunday: "7:00 AM - 7:00 PM",
      },
      temperature: "27°C",
      capacity: "40 swimmers",
      specialties: ["Elite Training", "Technique Analysis", "Competitive Coaching"],
      coordinates: { lat: 11.6645, lng: 78.1462 },
    },
    {
      id: "kids-pool",
      name: "Children's Learning Pool",
      address: "Arthanari Bakkiam Complex, Salem, Tamil Nadu",
      phone: "09943799969",
      image: kidsPoolImage,
      rating: 5.0,
      reviews: 156,
      distance: "Same complex as Main Center",
      features: [
        "Shallow learning pool (0.8m - 1.2m depth)",
        "4 lanes designed for children and beginners",
        "Non-slip pool deck with safety railings",
        "Colorful underwater features for engagement",
        "Gentle water circulation system",
        "Dedicated children's changing area",
        "Parent viewing area with seating",
        "Safety equipment and first aid station",
      ],
      amenities: [
        { name: "Free WiFi", icon: Wifi },
        { name: "Parking Available", icon: Car },
        { name: "Parent Viewing", icon: Star },
        { name: "Safety Equipment", icon: Shield },
      ],
      schedule: {
        "Monday-Friday": "6:00 AM - 8:00 PM",
        "Saturday-Sunday": "7:00 AM - 7:00 PM",
      },
      temperature: "29°C",
      capacity: "30 children",
      specialties: ["Kids Programs", "Beginner Lessons", "Water Safety"],
      coordinates: { lat: 11.6643, lng: 78.146 },
    },
  ]

  const coachingStaff = [
    {
      name: "Mohammed Thabrez Khan",
      qualification: "B.E, N.I.S (Swimming), ASCA Level 3 Certified",
      position: "Head Coach",
      specialties: ["Competitive Training", "Technique Analysis", "Advanced Stroke Development", "Race Strategy"],
      image: coach1Image,
      experience: "12+ years coaching national-level swimmers",
      schedule: "Mon-Sat: 5:30AM - 7:30PM",
      achievements: [
        "Trained 15+ state champions",
        "ASCA Level 3 Certification",
        "Specialist in biomechanical analysis"
      ]
    },
    {
      name: "Madan Kumar B",
      qualification: "Certified Swimming Instructor (NSWIS)",
      position: "Junior Coach",
      specialties: ["Beginner Lessons", "Children's Programs", "Water Safety", "Fundamentals"],
      image: coach2Image,
      experience: "8+ years teaching beginners",
      schedule: "Mon-Sat: 6:00AM - 8:00PM",
      achievements: [
        "500+ students taught",
        "Special needs swimming certified",
        "Water safety instructor"
      ]
    },
  ]

  const poolTypes = ["All Pool Types", "Competition Pool", "Training Pool", "Kids Pool", "Therapy Pool"]

  const handleSearch = () => {
    console.log("Searching for:", searchLocation, selectedPoolType)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 text-lg px-4 py-2">
              🏊‍♀️ World-Class Facilities in Salem
            </Badge>
            <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Discover Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Swimming Facilities
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art aquatic facilities in Salem, Tamil Nadu, designed for swimmers of all levels. From
              competition pools to children's learning areas, find the perfect environment for your swimming journey.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Pool Finder */}
     

      {/* Interactive Facilities Map & List */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Facilities in Salem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three specialized pools designed to meet every swimmer's needs in Salem, Tamil Nadu
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {facilities.map((facility, index) => (
              <Card
                key={facility.id}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 cursor-pointer interactive-card ${
                  selectedFacility === index ? "ring-4 ring-blue-500 bg-white" : "bg-white"
                }`}
                onClick={() => setSelectedFacility(index)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800 border-0">
                      <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                      {facility.rating} ({facility.reviews})
                    </Badge>
                  </div>

                  {/* Distance Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white border-0">📍 {facility.distance}</Badge>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-white/90 text-gray-800 hover:bg-white">
                        View Details
                      </Button>
                      <Button size="sm" className="flex-1 bg-blue-500 text-white hover:bg-blue-600">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{facility.name}</h3>
                      <div className="flex items-start space-x-2 text-gray-600">
                        <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                        <span className="text-sm">{facility.address}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-700">{facility.temperature}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-700">{facility.capacity}</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {facility.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {facility.amenities.map((amenity, amenityIndex) => (
                        <div key={amenityIndex} className="flex items-center space-x-2">
                          <amenity.icon className="h-3 w-3 text-blue-500" />
                          <span className="text-xs text-gray-700">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">Top Features</h4>
                    <div className="space-y-1">
                      {facility.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {facility.features.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium">
                          +{facility.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">Today's Hours</h4>
                    <div className="space-y-1">
                      {Object.entries(facility.schedule).map(([day, hours], scheduleIndex) => (
                        <div key={scheduleIndex} className="flex justify-between text-xs">
                          <span className="text-gray-700">{day}</span>
                          <span className="text-gray-600">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transition-all duration-300 transform group-hover:scale-105 text-sm btn-hover-effect">
                      Book Pool Time
                    </Button>
                    <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">📅 BOOK YOUR SESSION</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Reserve Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Pool Time
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to book your swimming session or schedule a tour
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6">
              <h3 className="text-2xl font-bold">Facility Booking Form</h3>
              <p className="opacity-90">We'll respond to your request within 24 hours</p>
            </div>

            <CardContent className="p-6">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your booking request has been submitted successfully.</p>
                  <Button 
                    onClick={() => setFormSubmitted(false)}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label htmlFor="facility" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Facility *
                      </label>
                      <select
                        id="facility"
                        name="facility"
                        value={formData.facility}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Choose a facility</option>
                        {facilities.map((facility) => (
                          <option key={facility.id} value={facility.id}>
                            {facility.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <Input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select a time slot</option>
                        <option value="morning">Morning (6:00 AM - 11:00 AM)</option>
                        <option value="afternoon">Afternoon (11:00 AM - 4:00 PM)</option>
                        <option value="evening">Evening (4:00 PM - 9:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Any special requests or requirements..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the terms and conditions and privacy policy
                    </label>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-3 rounded-full transition-all duration-300 transform hover:scale-105 btn-hover-effect"
                    >
                      Submit Booking Request
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    Or submit your request directly through our{' '}
                    <Link 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSekc0B_dQTj-kvzZBNvJKFX--3tHRRari_1JzBeUW6Tr-7zZg/viewform?usp=pp_url" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Google Form
                    </Link>
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Today's Schedule Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">⏰ Live Schedule</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Today's Pool
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Schedule
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our daily schedule with class timings and availability
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Daily Class Schedule</h3>
                  <p className="opacity-90">Updated schedule • Book your preferred slot</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{new Date().toLocaleDateString()}</div>
                  <div className="text-sm opacity-90">Current time: {new Date().toLocaleTimeString()}</div>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-8">
                {/* Learn to Swim Classes */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-500" />
                    Learn to Swim Classes (Beginner Level)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-800 mb-2">Morning Sessions</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-blue-500" />
                            6:00 AM - 7:00 AM
                          </span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">Open</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-blue-500" />
                            7:00 AM - 8:00 AM
                          </span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">Open</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-800 mb-2">Evening Sessions</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-blue-500" />
                            4:30 PM - 5:30 PM
                          </span>
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Limited</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-blue-500" />
                            5:30 PM - 6:30 PM
                          </span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">Open</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Swim Coaching */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-blue-500" />
                    Professional Swim Coaching (Competition Training)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-800 mb-2">Morning Session</div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          5:30 AM - 7:00 AM
                        </span>
                        <Badge className="bg-green-100 text-green-800 border-green-200">Open</Badge>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-800 mb-2">Evening Session</div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          5:00 PM - 7:30 PM
                        </span>
                        <Badge className="bg-red-100 text-red-800 border-red-200">Full</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ladies Batch */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-500" />
                    Ladies Batch
                  </h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        5:30 PM - 6:30 PM
                      </span>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Limited</Badge>
                    </div>
                  </div>
                </div>

                {/* Public Time */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Droplets className="h-5 w-5 mr-2 text-blue-500" />
                    Public Swimming Time
                  </h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        6:00 AM - 6:00 PM
                      </span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">Open</Badge>
                    </div>
                  </div>
                </div>

                {/* 1-on-1 Classes */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-blue-500" />
                    1-on-1 Private Classes
                  </h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center mb-2 md:mb-0">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        <span>Available on demand</span>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                        Book Private Session
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Badge className="bg-green-100 text-green-800 border-green-200">🟢 Open - Available spots</Badge>
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">🟡 Limited - Few spots left</Badge>
                <Badge className="bg-red-100 text-red-800 border-red-200">🔴 Full - Join waitlist</Badge>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 btn-hover-effect">
              View Weekly Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Coaching Staff Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">🏆 CERTIFIED PROFESSIONALS</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Coaching Staff
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ASCA-certified coaches bring world-class training methodologies to Salem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coachingStaff.map((coach, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3 h-64 md:h-auto">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardContent className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{coach.name}</h3>
                          <p className="text-blue-600 font-medium">{coach.position}</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-blue-300 text-blue-600 hover:bg-blue-50 hidden md:flex"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Qualifications
                        </h4>
                        <p className="text-gray-700">{coach.qualification}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Experience
                        </h4>
                        <p className="text-gray-700">{coach.experience}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Specializations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {coach.specialties.map((specialty, specialtyIndex) => (
                            <Badge 
                              key={specialtyIndex} 
                              className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200 transition-colors"
                              variant="outline"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Schedule
                        </h4>
                        <div className="flex items-center text-gray-700">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          {coach.schedule}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          Key Achievements
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {coach.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white md:hidden"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Coach
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Facility Features & Amenities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">World-Class Amenities in Salem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a complete aquatic experience at our Salem facility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Modern Changing Rooms",
                description: "Spacious, clean facilities with private lockers and hot showers",
                icon: Users,
                features: ["Private lockers", "Hot showers", "Hair dryers", "Towel service"],
              },
              {
                title: "Pool Deck Areas",
                description: "Non-slip surfaces with comfortable seating and relaxation areas",
                icon: Droplets,
                features: ["Non-slip surfaces", "Lounge chairs", "Shade structures", "Pool furniture"],
              },
              {
                title: "Equipment & Gear",
                description: "Professional swimming equipment available for rent and purchase",
                icon: Star,
                features: ["Kickboards", "Pull buoys", "Fins & paddles", "Training gear"],
              },
              {
                title: "Convenience Services",
                description: "Additional services to enhance your swimming experience",
                icon: Coffee,
                features: ["Parking available", "WiFi access", "Refreshments", "Equipment rental"],
              },
            ].map((amenity, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 interactive-card"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-glow">
                    <amenity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{amenity.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{amenity.description}</p>
                  <div className="space-y-2">
                    {amenity.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">🏊‍♂️ Visit Today</Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">Experience Salem's Premier Swimming Facility</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Visit our state-of-the-art facility in Salem and see why Oasis Aquatic Center is the premier destination
              for swimming in Tamil Nadu. Schedule a tour or book your pool time today.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Prime Location</h3>
                <p className="text-sm opacity-90">Near Ponganapathi Temple, Ponnammapet, Salem</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Extended Hours</h3>
                <p className="text-sm opacity-90">Open early morning to late evening</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Facilities</h3>
                <p className="text-sm opacity-90">Everything you need for the perfect swim</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule a Tour
                <Navigation className="ml-2 h-5 w-5" />
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent">
                <Phone className="mr-2 h-5 w-5" />
                Call 09943799969
              </Button>
            </div>

            <p className="text-sm opacity-75 mt-8">
              Free facility tour • No obligation • See all amenities • Meet our team
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}