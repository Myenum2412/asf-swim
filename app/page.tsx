"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Trophy,
  Users,
  Shield,
  Clock,
  Star,
  Play,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Quote,
  Award,
  CheckCircle,
  Droplets,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({
    students: 0,
    years: 0,
    success: 0,
    instructors: 0,
  })

  useEffect(() => {
    setIsVisible(true)

    // Animate stats counter
    const animateStats = () => {
      const targets = { students: 3500, years: 12, success: 99, instructors: 35 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setStats({
          students: Math.floor(targets.students * progress),
          years: Math.floor(targets.years * progress),
          success: Math.floor(targets.success * progress),
          instructors: Math.floor(targets.instructors * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setStats(targets)
        }
      }, stepTime)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "stats-section") {
          animateStats()
        }
      })
    })

    const statsElement = document.getElementById("stats-section")
    if (statsElement) observer.observe(statsElement)

    // Auto-advance hero slider
    const heroInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    // Auto-advance testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => {
      clearInterval(heroInterval)
      clearInterval(testimonialInterval)
      observer.disconnect()
    }
  }, [])

  const heroSlides = [
    {
      title: "Dive Into Excellence",
      subtitle: "Professional swimming instruction in the heart of Salem, Tamil Nadu",
      image: "/placeholder.svg?height=800&width=1200",
      cta: "Start Your Journey",
      features: ["Expert Instructors", "Modern Facilities", "All Age Groups"],
    }
  ]

  const programs = [
    {
      title: "Learn to Swim",
      description: "Professional swimming lessons for all ages with certified instructors in Salem",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: ["Ages 3 to Adult", "Certified Instructors", "Small Class Sizes", "Flexible Timing"],
      price: "From ₹2,500/month",
      rating: 4.9,
      students: 1500,
      duration: "8-12 weeks",
      image: "/Learn to Swim.jpeg?height=300&width=400",
    },
    {
      title: "Competitive Swimming",
      description: "Advanced training for competitive swimmers with professional coaching",
      icon: Trophy,
      color: "from-orange-500 to-red-500",
      features: ["Professional Coaching", "Competition Prep", "Performance Analysis", "Video Review"],
      price: "From ₹4,000/month",
      rating: 4.8,
      students: 200,
      duration: "Year-round",
      image: "/Competitive Swimming.jpeg?height=300&width=400",
    },
    {
      title: "Water Safety & Lifeguard",
      description: "Essential water safety and lifeguard training courses with certification",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      features: ["CPR Certification", "Rescue Techniques", "Safety Protocols", "Job Placement"],
      price: "From ₹8,000/course",
      rating: 5.0,
      students: 300,
      duration: "2-4 weeks",
      image: "/Water Safety & Lifeguard.jpeg?height=300&width=400",
    },
  ]

  const testimonials = [
    {
      name: "Priya Krishnan",
      role: "Parent of 2 swimmers",
      content:
        "Oasis Aquatic Center transformed my children from being afraid of water to confident swimmers. The instructors are incredibly patient and professional. Best swimming center in Salem!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      location: "Salem, Tamil Nadu",
      program: "Learn to Swim",
      date: "2 months ago",
    },
    {
      name: "Rajesh Kumar",
      role: "Competitive Swimmer",
      content:
        "The coaching here is world-class. I've improved my times significantly and qualified for state championships. The facilities are excellent and the training methods are scientifically proven.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      location: "Salem, Tamil Nadu",
      program: "Competitive Swimming",
      date: "6 months ago",
    },
    {
      name: "Meera Patel",
      role: "Adult Learner",
      content:
        "I never thought I'd learn to swim at 32, but the adult program here is amazing. The instructors are patient and the environment is very supportive. Now I swim regularly for fitness!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      location: "Salem, Tamil Nadu",
      program: "Adult Lessons",
      date: "4 months ago",
    },
    {
      name: "Arjun Sharma",
      role: "Lifeguard Trainee",
      content:
        "The lifeguard certification program was comprehensive and well-structured. I feel confident in my abilities to keep swimmers safe, and they helped me find employment immediately after certification.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      location: "Salem, Tamil Nadu",
      program: "Water Safety",
      date: "3 months ago",
    },
  ]

  const achievements = [
    {
      title: "State Champions 2024",
      description: "Our competitive team won multiple medals at Tamil Nadu state championships",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      count: "15+",
    },
    {
      title: "Students Trained",
      description: "Successfully trained over 3,500 students with 99% success rate",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      count: "3,500+",
    },
    {
      title: "Perfect Safety Record",
      description: "Maintained perfect safety record with zero incidents across all programs",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      count: "100%",
    },
    {
      title: "Certified Instructors",
      description: "All instructors are certified professionals with ongoing training",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      count: "35+",
    },
  ]

  const blogPosts = [
    {
      title: "5 Essential Swimming Techniques for Beginners in Tamil Nadu",
      excerpt:
        "Master these fundamental techniques to build confidence in the water. Our expert instructors share proven methods that work for Indian swimmers.",
      image: "/5EssentialSwimmingTechniquesforBeginnersinTamil Nadu.jpeg?height=250&width=400",
      date: "Dec 15, 2024",
      category: "Swimming Tips",
      readTime: "5 min read",
      author: "Coach Ramesh",
      authorImage: "/5EssentialSwimmingTechniquesforBeginnersinTamil Nadu.jpeg?height=40&width=40",
      tags: ["beginner", "technique", "tips"],
    },
    {
      title: "Water Safety Guidelines for Indian Families",
      excerpt:
        "Important safety measures every family should know before entering pools or water bodies. Prevention is key to water safety in India.",
      image: "/Water Safety Guidelines for Indian Families.jpeg?height=40&width=40",
      date: "Dec 12, 2024",
      category: "Safety",
      readTime: "7 min read",
      author: "Dr. Lakshmi",
      authorImage: "/Water Safety Guidelines for Indian Families.jpeg?height=40&width=40",
      tags: ["safety", "family", "guidelines"],
    },
    {
      title: "Swimming in Salem: Health Benefits and Local Opportunities",
      excerpt:
        "Discover how swimming can improve your health and fitness, plus the best swimming opportunities available in Salem, Tamil Nadu.",
      image: "/freepik__the-style-is-candid-image-photography-with-natural__27378.jpeg?height=250&width=400",
      date: "Dec 10, 2024",
      category: "Health & Fitness",
      readTime: "8 min read",
      author: "Coach Priya",
      authorImage: "/freepik__the-style-is-candid-image-photography-with-natural__27378.jpeg?height=40&width=40",
      tags: ["health", "fitness", "salem"],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Enhanced Navigation */}
      <Navbar />

      {/* Enhanced Hero Section with Water Animations */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <Image
                src={slide.image || "/swim.jpg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-cyan-900/80"></div>
              {/* Water ripple effect */}
              <div className="absolute inset-0 water-ripple opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Floating water droplets animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/30 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div
            className={`max-w-4xl text-white transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors text-lg px-4 py-2">
              🏊‍♂️ Premier Swimming Center in Salem Since 2012
            </Badge>

            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">{heroSlides[currentSlide].title}</h1>

            <p className="text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl">{heroSlides[currentSlide].subtitle}</p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 mb-8">
              {heroSlides[currentSlide].features.map((feature, index) => (
                <Badge key={index} className="bg-white/20 text-white border-white/30 px-3 py-1">
                  ✓ {feature}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl btn-hover-effect"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm"
              >
                <Play className="mr-3 h-6 w-6" />
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section id="stats-section" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-cyan-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted by Thousands in Salem</h2>
            <p className="text-lg text-gray-600">Leading aquatic center with proven results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: "students", label: "Happy Swimmers", icon: Users, suffix: "+" },
              { key: "years", label: "Years of Excellence", icon: Clock, suffix: "+" },
              { key: "success", label: "Success Rate", icon: Trophy, suffix: "%" },
              { key: "instructors", label: "Expert Instructors", icon: Star, suffix: "+" },
            ].map((stat, index) => (
              <Card
                key={stat.key}
                className="text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50 group interactive-card"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-glow">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {stats[stat.key as keyof typeof stats]}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Programs Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-400 rounded-full animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">🏊‍♀️ Our Programs</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Choose Your Swimming
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600"> Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From beginner lessons to competitive training, we offer comprehensive programs designed for all ages and
              skill levels in Salem, Tamil Nadu.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border-0 bg-white relative interactive-card"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Program Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-gray-800 border-0 mb-2">
                      <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                      {program.rating} • {program.students}+ students
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8 relative">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{program.duration}</div>
                      <Badge className="bg-green-100 text-green-800 border-green-200 mt-1">Popular</Badge>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>

                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-gray-800">{program.price}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      View Details
                    </Button>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl btn-hover-effect">
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Registration CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/5 rounded-full animate-float delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">🚀 Join Salem's Best</Badge>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Ready to Make a<span className="text-cyan-300"> Splash?</span>
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Join thousands of satisfied swimmers in Salem who have transformed their aquatic skills with our expert
                instruction. Register today and start your swimming journey!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Clock, text: "Flexible Timings" },
                  { icon: Shield, text: "Safety Certified" },
                  { icon: Users, text: "Expert Instructors" },
                  { icon: Trophy, text: "Proven Results" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">📍 Visit Our Center</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Arthanari Bakkiam Complex, 39/7, Vasagasalai St</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Near Ponganapathi Temple, Ponnammapet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Salem, Tamil Nadu 636001</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>09943799969</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Registration</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 form-input"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 form-input"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 form-input"
                      placeholder="+91 99437 99969"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Program Interest *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    >
                      <option value="">Select a program</option>
                      <option value="learn-to-swim">Learn to Swim</option>
                      <option value="competitive">Competitive Swimming</option>
                      <option value="water-safety">Water Safety & Lifeguard</option>
                      <option value="adult-lessons">Adult Lessons</option>
                      <option value="private-lessons">Private Lessons</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300">
                      <option value="">Select age group</option>
                      <option value="3-5years">3 - 5 years</option>
                      <option value="6-12years">6 - 12 years</option>
                      <option value="13-17years">13 - 17 years</option>
                      <option value="18plus">18+ years</option>
                    </select>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl btn-hover-effect">
                    Register Now - Free Trial Available!
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By registering, you agree to our Terms of Service. We'll contact you within 24 hours to schedule
                    your free trial lesson.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">⭐ Testimonials</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              What Salem Swimmers
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600"> Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our community of successful swimmers and their families in Salem, Tamil Nadu
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12">
                <div className="flex items-center justify-between mb-8">
                  <Quote className="h-12 w-12 text-blue-500 opacity-50" />
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-blue-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic font-medium">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-white fill-current" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800 text-xl">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>{testimonials[currentTestimonial].location}</span>
                        <span>•</span>
                        <span>{testimonials[currentTestimonial].date}</span>
                      </div>
                    </div>
                  </div>

                  <Badge className="mt-6 bg-blue-100 text-blue-800 border-blue-200">
                    {testimonials[currentTestimonial].program}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">🏆 Our Achievements</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Celebrating
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has earned us recognition across Tamil Nadu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white interactive-card"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg animate-glow`}
                  >
                    <achievement.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.count}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Blog Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">📚 Swimming Tips & News</Badge>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Latest from Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600"> Blog</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert swimming advice, local tips, and aquatic center news from our team in Salem
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white interactive-card"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-gray-800 hover:bg-white">
                      Read More
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-800 text-sm">{post.author}</div>
                      <div className="text-xs text-gray-500">{post.date}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-gray-100 text-gray-600 border-gray-200 text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 p-0 h-auto font-semibold group">
                    Continue Reading
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg btn-hover-effect">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <Footer />
    </div>
  )
}