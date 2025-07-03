"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  Calendar,
  Users,
  Trophy,
  Camera,
  Video,
  Download,
  Share2,
  Heart,
  Eye,
  Droplets,
  Phone,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [sortBy, setSortBy] = useState("newest")

  const categories = [
    "All",
    "Swimming Lessons",
    "Competitive Training",
    "Water Safety",
    "Facilities",
    "Events & Competitions",
    "Student Achievements",
    "Behind the Scenes",
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Children's Swimming Lesson - Beginner Class",
      description: "Young swimmers learning basic water safety and floating techniques in our heated kids pool",
      image: "/placeholder.svg?height=400&width=600",
      category: "Swimming Lessons",
      date: "2024-12-15",
      photographer: "Oasis Staff",
      likes: 45,
      views: 234,
      tags: ["kids", "beginner", "safety", "learning"],
      type: "photo",
      featured: true,
    },
    {
      id: 2,
      title: "State Championship Training Session",
      description: "Elite swimmers preparing for Tamil Nadu State Championships with intensive training",
      image: "/placeholder.svg?height=400&width=600",
      category: "Competitive Training",
      date: "2024-12-14",
      photographer: "Coach Ramesh",
      likes: 67,
      views: 456,
      tags: ["competitive", "training", "championship", "elite"],
      type: "photo",
      featured: true,
    },
    {
      id: 3,
      title: "Lifeguard Training Certification Ceremony",
      description: "New lifeguards receiving their certification after completing intensive training program",
      image: "/placeholder.svg?height=400&width=600",
      category: "Water Safety",
      date: "2024-12-13",
      photographer: "Dr. Lakshmi",
      likes: 89,
      views: 567,
      tags: ["lifeguard", "certification", "safety", "training"],
      type: "photo",
      featured: false,
    },
    {
      id: 4,
      title: "Main Competition Pool - Aerial View",
      description: "Our 25-meter competition pool with 6 lanes and modern timing systems",
      image: "/placeholder.svg?height=400&width=600",
      category: "Facilities",
      date: "2024-12-12",
      photographer: "Facility Team",
      likes: 123,
      views: 789,
      tags: ["pool", "facility", "competition", "modern"],
      type: "photo",
      featured: true,
    },
    {
      id: 5,
      title: "Salem District Swimming Championship 2024",
      description: "Highlights from the district championship hosted at Oasis Aquatic Center",
      image: "/placeholder.svg?height=400&width=600",
      category: "Events & Competitions",
      date: "2024-12-10",
      photographer: "Event Team",
      likes: 156,
      views: 1234,
      tags: ["championship", "competition", "salem", "district"],
      type: "video",
      duration: "3:45",
      featured: true,
    },
    {
      id: 6,
      title: "Student Achievement - First Solo Swim",
      description: "Proud moment as 6-year-old Arjun completes his first independent swim across the pool",
      image: "/placeholder.svg?height=400&width=600",
      category: "Student Achievements",
      date: "2024-12-09",
      photographer: "Instructor Priya",
      likes: 234,
      views: 890,
      tags: ["achievement", "milestone", "student", "success"],
      type: "photo",
      featured: false,
    },
    {
      id: 7,
      title: "Adult Swimming Class - Evening Session",
      description: "Adult learners enjoying their evening swimming lesson with personalized instruction",
      image: "/placeholder.svg?height=400&width=600",
      category: "Swimming Lessons",
      date: "2024-12-08",
      photographer: "Coach Suresh",
      likes: 78,
      views: 345,
      tags: ["adult", "evening", "lesson", "learning"],
      type: "photo",
      featured: false,
    },
    {
      id: 8,
      title: "Water Safety Demonstration",
      description: "Interactive water safety demonstration for local school children",
      image: "/placeholder.svg?height=400&width=600",
      category: "Water Safety",
      date: "2024-12-07",
      photographer: "Safety Team",
      likes: 92,
      views: 456,
      tags: ["safety", "demonstration", "education", "children"],
      type: "video",
      duration: "2:30",
      featured: false,
    },
    {
      id: 9,
      title: "Modern Changing Facilities",
      description: "Clean, spacious changing rooms with lockers and modern amenities",
      image: "/placeholder.svg?height=400&width=600",
      category: "Facilities",
      date: "2024-12-06",
      photographer: "Facility Team",
      likes: 45,
      views: 234,
      tags: ["facilities", "changing", "modern", "amenities"],
      type: "photo",
      featured: false,
    },
    {
      id: 10,
      title: "Behind the Scenes - Pool Maintenance",
      description: "Our dedicated team ensuring perfect water quality and pool conditions",
      image: "/placeholder.svg?height=400&width=600",
      category: "Behind the Scenes",
      date: "2024-12-05",
      photographer: "Maintenance Team",
      likes: 67,
      views: 123,
      tags: ["maintenance", "quality", "team", "dedication"],
      type: "photo",
      featured: false,
    },
    {
      id: 11,
      title: "Competitive Swimmer Training Technique",
      description: "Slow-motion analysis of perfect freestyle technique by our competitive swimmers",
      image: "/placeholder.svg?height=400&width=600",
      category: "Competitive Training",
      date: "2024-12-04",
      photographer: "Coach Ramesh",
      likes: 189,
      views: 678,
      tags: ["technique", "freestyle", "analysis", "training"],
      type: "video",
      duration: "1:45",
      featured: true,
    },
    {
      id: 12,
      title: "Family Swimming Day Event",
      description: "Families enjoying our special family swimming day with games and activities",
      image: "/placeholder.svg?height=400&width=600",
      category: "Events & Competitions",
      date: "2024-12-03",
      photographer: "Event Team",
      likes: 145,
      views: 567,
      tags: ["family", "event", "fun", "community"],
      type: "photo",
      featured: false,
    },
  ]

  const filteredItems = galleryItems
    .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "popular":
          return b.likes - a.likes
        case "views":
          return b.views - a.views
        default:
          return 0
      }
    })

  const featuredItems = galleryItems.filter((item) => item.featured)

  const openLightbox = (item) => {
    setSelectedImage(item)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowRight") nextImage()
        if (e.key === "ArrowLeft") prevImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

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
              <Link href="/gallery" className="text-blue-600 font-semibold">
                Gallery
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
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
                Share Gallery
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
              📸 Visual Journey in Salem
            </Badge>
            <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Swimming
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600"> Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive photo and video gallery showcasing swimming lessons, competitive training,
              facilities, and memorable moments at Salem's premier aquatic center.
            </p>
          </div>

          {/* Gallery Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Photos & Videos", icon: Camera },
              { number: "50+", label: "Swimming Events", icon: Trophy },
              { number: "1000+", label: "Happy Moments", icon: Heart },
              { number: "25K+", label: "Total Views", icon: Eye },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 interactive-card"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">⭐ Featured</Badge>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and inspiring moments from the Oasis Aquatic Center community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.slice(0, 6).map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white cursor-pointer interactive-card"
                onClick={() => openLightbox(item)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Media Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${item.type === "video" ? "bg-red-500" : "bg-blue-500"} text-white border-0`}>
                      {item.type === "video" ? (
                        <>
                          <Video className="h-3 w-3 mr-1" />
                          {item.duration}
                        </>
                      ) : (
                        <>
                          <Camera className="h-3 w-3 mr-1" />
                          Photo
                        </>
                      )}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-white border-0">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  </div>

                  {/* Play Button for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-blue-600 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Quick Stats */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{item.views}</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-white/20 text-white hover:bg-white/30 border-0">
                        View
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">{item.category}</Badge>
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">By {item.photographer}</div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-500 hover:text-red-500 p-1">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-500 p-1">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Filters & Search */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Gallery Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection with advanced filtering and search capabilities
            </p>
          </div>

          {/* Search and Filter Controls */}
          <Card className="mb-12 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-5 gap-6">
                {/* Search */}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Gallery</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search photos, videos, events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 py-3 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Liked</option>
                    <option value="views">Most Viewed</option>
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex items-end">
                  <div className="flex bg-gray-100 rounded-lg p-1 w-full">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="flex-1"
                    >
                      <Grid className="h-4 w-4 mr-1" />
                      Grid
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="flex-1"
                    >
                      <List className="h-4 w-4 mr-1" />
                      List
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">{filteredItems.length} items found</Badge>
                {selectedCategory !== "All" && (
                  <Badge className="bg-green-100 text-green-800 border-green-200">Category: {selectedCategory}</Badge>
                )}
                {searchTerm && (
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Search: "{searchTerm}"</Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Gallery Grid/List View */}
          <div
            className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}
          >
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className={`group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white cursor-pointer interactive-card ${
                  viewMode === "list" ? "flex" : ""
                }`}
                onClick={() => openLightbox(item)}
              >
                <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={viewMode === "list" ? 200 : 400}
                    height={viewMode === "list" ? 150 : 300}
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === "list" ? "w-48 h-36" : "w-full h-48"
                    }`}
                  />

                  {/* Media Type Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge
                      className={`${item.type === "video" ? "bg-red-500" : "bg-blue-500"} text-white border-0 text-xs`}
                    >
                      {item.type === "video" ? (
                        <>
                          <Video className="h-3 w-3 mr-1" />
                          {item.duration}
                        </>
                      ) : (
                        <Camera className="h-3 w-3 mr-1" />
                      )}
                    </Badge>
                  </div>

                  {/* Play Button for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-blue-600 ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">{item.category}</Badge>
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3
                    className={`font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors ${
                      viewMode === "list" ? "text-lg" : "text-base"
                    } line-clamp-2`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-gray-600 leading-relaxed mb-3 ${
                      viewMode === "list" ? "text-sm" : "text-xs"
                    } line-clamp-2`}
                  >
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button size="sm" variant="ghost" className="text-gray-500 hover:text-red-500 p-1">
                        <Heart className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-500 p-1">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  {viewMode === "list" && (
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge key={tagIndex} className="bg-gray-100 text-gray-600 border-gray-200 text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 text-white hover:bg-white/30 border-0 rounded-full w-12 h-12 p-0"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 text-white hover:bg-white/30 border-0 rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 text-white hover:bg-white/30 border-0 rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image/Video */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="relative">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                {selectedImage.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-10 w-10 text-blue-600 ml-1" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">{selectedImage.category}</Badge>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{selectedImage.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{selectedImage.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">{selectedImage.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{selectedImage.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Photographer: {selectedImage.photographer}</div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                      <Heart className="h-4 w-4 mr-1" />
                      Like
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-gray-100 text-gray-600 border-gray-200 text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">📸 Share Your Story</Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">Be Part of Our Swimming Community</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Join our swimming programs and become part of the success stories featured in our gallery. Create your own
              memorable moments at Salem's premier aquatic center.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Users className="mr-2 h-5 w-5" />
                Join Our Programs
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent">
                <Phone className="mr-2 h-5 w-5" />
                Call 09943799969
              </Button>
            </div>

            <p className="text-sm opacity-75 mt-8">
              Share your photos with #OasisAquatic • Tag us on social media • Be featured in our gallery
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
