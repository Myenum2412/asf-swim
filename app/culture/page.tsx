import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Play, Heart, Star, Users, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Indian Culture - Bharat Sanskriti | Explore Rich Traditions",
  description:
    "Immerse yourself in the diverse cultural landscape of India. Discover classical arts, vibrant festivals, ancient philosophies, and timeless traditions.",
  keywords: "Indian culture, traditions, festivals, classical arts, dance, music, philosophy, spirituality, heritage",
}

export default function CulturePage() {
  const culturalCategories = [
    {
      title: "Classical Arts",
      description:
        "Explore the divine expressions of Bharatanatyam, Kathak, Carnatic music, and other classical art forms",
      image: "/placeholder.svg?height=300&width=400",
      items: ["Bharatanatyam", "Kathak", "Carnatic Music", "Hindustani Classical"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Festivals & Celebrations",
      description: "Experience the joy and spiritual significance of India's vibrant festivals throughout the year",
      image: "/placeholder.svg?height=300&width=400",
      items: ["Diwali", "Holi", "Dussehra", "Eid", "Christmas"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Philosophy & Spirituality",
      description: "Delve into the profound wisdom of ancient texts and spiritual practices that guide millions",
      image: "/placeholder.svg?height=300&width=400",
      items: ["Vedanta", "Yoga", "Meditation", "Ayurveda"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Arts & Crafts",
      description: "Discover the intricate beauty of traditional handicrafts and artistic expressions",
      image: "/placeholder.svg?height=300&width=400",
      items: ["Madhubani", "Warli", "Pottery", "Textiles"],
      color: "from-green-500 to-emerald-500",
    },
  ]

  const upcomingEvents = [
    {
      title: "Diwali Celebration Workshop",
      date: "November 25, 2024",
      location: "Cultural Center, Delhi",
      description:
        "Learn traditional Diwali customs, rangoli making, and the spiritual significance of the festival of lights.",
    },
    {
      title: "Classical Dance Recital",
      date: "December 5, 2024",
      location: "Online Event",
      description: "Experience the grace and devotion of Bharatanatyam performed by renowned artists.",
    },
    {
      title: "Ayurveda & Wellness Seminar",
      date: "December 12, 2024",
      location: "Mumbai",
      description: "Discover ancient healing practices and their relevance in modern wellness.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
              <span className="text-xl font-bold text-gray-800">Bharat Sanskriti</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="/culture" className="text-orange-600 font-semibold">
                Culture
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Explore Indian{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600">
                Culture
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Journey through the magnificent tapestry of Indian culture - from ancient wisdom to vibrant celebrations,
              from classical arts to spiritual practices
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {culturalCategories.map((category, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold`}
                  >
                    {category.title}
                  </div>
                  <Button className="absolute bottom-4 right-4 bg-white/90 text-gray-800 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Play className="h-4 w-4 mr-2" />
                    Explore
                  </Button>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Cultural Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cultural Diversity Across India</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how different regions of India contribute to our rich cultural mosaic
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Map of India showing cultural regions"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              {[
                {
                  region: "North India",
                  highlights: "Classical Hindustani music, Kathak dance, Mughal architecture",
                  icon: Star,
                },
                {
                  region: "South India",
                  highlights: "Carnatic music, Bharatanatyam, Temple architecture",
                  icon: Heart,
                },
                {
                  region: "East India",
                  highlights: "Literature, Durga Puja, Rabindra Sangeet",
                  icon: Users,
                },
                {
                  region: "West India",
                  highlights: "Folk dances, Business culture, Coastal traditions",
                  icon: Star,
                },
              ].map((region, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-orange-500 bg-gradient-to-r from-white to-orange-50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <region.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{region.region}</h3>
                        <p className="text-gray-600 leading-relaxed">{region.highlights}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Cultural Events */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Cultural Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in celebrating and learning about Indian culture through interactive events and workshops
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-orange-600">
                      <Calendar className="h-5 w-5" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white transition-all duration-300 transform group-hover:scale-105">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Quote */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <blockquote className="text-3xl font-bold mb-6 italic">
              "Vasudhaiva Kutumbakam - The World is One Family"
            </blockquote>
            <p className="text-xl opacity-90 mb-8">
              This ancient Sanskrit phrase from the Maha Upanishad embodies the universal spirit of Indian culture,
              teaching us that all of humanity is interconnected as one global family.
            </p>
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More About Indian Philosophy
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
