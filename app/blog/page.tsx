"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  TrendingUp,
  Star,
  Phone,
  Droplets,
  ArrowRight,
  Eye,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("newest")

  const categories = [
    "All",
    "Swimming Tips",
    "Water Safety",
    "Health & Fitness",
    "Competitive Swimming",
    "Beginner Guides",
    "Equipment Reviews",
    "Local News",
    "Success Stories",
  ]

  const authors = [
    {
      name: "Coach Ramesh Kumar",
      role: "Head Swimming Coach",
      image: "/placeholder.svg?height=80&width=80",
      bio: "15+ years coaching experience, former state champion",
      expertise: ["Competitive Training", "Technique Analysis"],
      articles: 45,
    },
    {
      name: "Dr. Lakshmi Priya",
      role: "Water Safety Expert",
      image: "/placeholder.svg?height=80&width=80",
      bio: "Medical professional specializing in aquatic safety",
      expertise: ["Water Safety", "Health & Fitness"],
      articles: 32,
    },
    {
      name: "Suresh Patel",
      role: "Swimming Instructor",
      image: "/placeholder.svg?height=80&width=80",
      bio: "Certified instructor with focus on beginner programs",
      expertise: ["Beginner Guides", "Swimming Tips"],
      articles: 28,
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Swimming Techniques Every Beginner Should Master in Salem",
      excerpt:
        "Master these fundamental swimming techniques to build confidence and safety in the water. Our expert coaches share proven methods that work specifically for swimmers in Tamil Nadu's climate and conditions.",
      content: `Swimming is one of the most rewarding skills you can learn, and here in Salem, Tamil Nadu, we have the perfect conditions for year-round swimming. Whether you're just starting your aquatic journey or looking to improve your technique, these five essential swimming skills will set you up for success.

## 1. Water Comfort and Floating

Before diving into strokes, it's crucial to feel comfortable in the water. In Salem's warm climate, our heated pools provide the ideal environment for beginners to develop water confidence.

**Key Points:**
- Practice breathing exercises in shallow water
- Learn to float on your back and front
- Develop trust in the water's buoyancy
- Practice in our beginner-friendly pools

## 2. Basic Breathing Techniques

Proper breathing is the foundation of all swimming strokes. Many beginners in Salem struggle with this initially, but with practice, it becomes second nature.

**Breathing Tips:**
- Exhale underwater through your nose
- Turn your head to the side, not up
- Practice rhythmic breathing patterns
- Use our pool's lane ropes for support while learning

## 3. Freestyle (Front Crawl) Basics

The freestyle stroke is often the first stroke taught to beginners. It's efficient and relatively easy to learn with proper instruction.

**Technique Focus:**
- Keep your body horizontal in the water
- Rotate your body with each stroke
- Maintain a steady kick from your hips
- Practice in our 25-meter training pool

## 4. Backstroke Fundamentals

Backstroke is excellent for beginners as breathing is easier, and it helps develop overall body awareness in the water.

**Key Elements:**
- Keep your head still and eyes looking up
- Maintain a steady flutter kick
- Rotate your shoulders with each arm stroke
- Practice wall push-offs for better starts

## 5. Basic Water Safety Skills

Safety should always be your top priority when swimming. Our certified instructors emphasize these skills from day one.

**Safety Essentials:**
- Learn to tread water effectively
- Practice getting out of the pool safely
- Understand pool rules and depth markers
- Know how to call for help if needed

## Why Choose Oasis Aquatic Center in Salem?

Our facility offers the perfect environment for learning these essential skills:
- Heated pools suitable for year-round swimming
- Certified instructors with local expertise
- Small class sizes for personalized attention
- Progressive curriculum designed for Tamil Nadu swimmers

## Getting Started

Ready to master these essential swimming techniques? Our beginner programs in Salem are designed to help you progress safely and confidently. With our expert instruction and state-of-the-art facilities, you'll be swimming with confidence in no time.

Contact us today to schedule your first lesson and begin your swimming journey at Salem's premier aquatic center.`,
      image: "/Blogs/5 Essential Swimming Techniques Every Beginner Should Master in Salem.jpeg?height=400&width=600",
      category: "Swimming Tips",
      author: "Suresh Patel",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-12-15",
      readTime: "8 min read",
      likes: 156,
      comments: 23,
      views: 1234,
      tags: ["beginner", "technique", "salem", "swimming tips"],
      featured: true,
      trending: true,
    },
    {
      id: 2,
      title: "Water Safety Guidelines for Families in Tamil Nadu",
      excerpt:
        "Comprehensive water safety measures every family should know before entering pools or water bodies. Prevention strategies and emergency procedures specifically relevant to conditions in Tamil Nadu.",
      content: `Water safety is paramount for families enjoying aquatic activities in Tamil Nadu. With our year-round swimming season and numerous water bodies, it's essential that every family understands and practices proper water safety measures.

## Understanding Local Water Conditions

Tamil Nadu's climate and geography present unique considerations for water safety:

### Pool Safety in Salem
- Temperature variations throughout the day
- Monsoon season considerations
- Local emergency response protocols
- Cultural considerations for family swimming

## Essential Safety Rules for Families

### Before Entering the Water
1. **Always supervise children** - Never leave children unattended near water
2. **Check water conditions** - Ensure proper temperature and clarity
3. **Review emergency procedures** - Know where safety equipment is located
4. **Assess swimming abilities** - Be honest about skill levels

### While in the Water
1. **Stay within designated areas** - Respect pool zones and depth markers
2. **Use the buddy system** - Never swim alone
3. **Take regular breaks** - Prevent fatigue and overexertion
4. **Stay hydrated** - Important in Tamil Nadu's warm climate

## Special Considerations for Tamil Nadu Families

### Cultural Sensitivity
- Appropriate swimwear guidelines
- Family swimming times and arrangements
- Respect for local customs and traditions
- Gender-specific considerations

### Climate-Related Safety
- Sun protection measures
- Hydration in hot weather
- Monsoon season precautions
- Heat-related illness prevention

## Emergency Preparedness

### Know the Signs of Drowning
- Silent struggle (drowning is often quiet)
- Inability to call for help
- Head tilted back with mouth open
- Arms pressing down on water surface

### Emergency Response Steps
1. **Alert lifeguards immediately**
2. **Call emergency services (108)**
3. **Do not attempt rescue unless trained**
4. **Provide clear location information**

## Teaching Children Water Safety

### Age-Appropriate Lessons
- **Ages 3-5**: Basic water comfort and safety rules
- **Ages 6-8**: Swimming basics and emergency recognition
- **Ages 9-12**: Advanced safety skills and rescue awareness
- **Teens**: Leadership and helping others safely

### Making Safety Fun
- Water safety games and activities
- Positive reinforcement for following rules
- Family safety challenges
- Regular safety skill practice

## Choosing Safe Swimming Facilities

When selecting a swimming facility in Salem or Tamil Nadu, look for:
- Certified lifeguards on duty
- Clear safety signage and rules
- Well-maintained facilities
- Emergency equipment readily available
- Staff trained in CPR and first aid

## Oasis Aquatic Center's Safety Commitment

At our Salem facility, we prioritize family safety through:
- Comprehensive safety protocols
- Regular staff training updates
- Family-oriented safety programs
- Emergency response partnerships with local services

## Creating a Family Safety Plan

Develop a family water safety plan that includes:
- Emergency contact information
- Meeting points in case of separation
- Individual swimming ability assessments
- Regular safety skill practice sessions

## Conclusion

Water safety is everyone's responsibility. By following these guidelines and choosing reputable facilities like Oasis Aquatic Center in Salem, families can enjoy safe and memorable aquatic experiences throughout Tamil Nadu.

Remember: When in doubt, stay out. It's always better to be cautious when it comes to water safety.`,
      image: "/Blogs/Water Safety Guidelines for Families in Tamil Nadu.jpeg?height=400&width=600",
      category: "Water Safety",
      author: "Dr. Lakshmi Priya",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-12-12",
      readTime: "12 min read",
      likes: 203,
      comments: 34,
      views: 1876,
      tags: ["safety", "family", "tamil nadu", "prevention"],
      featured: true,
      trending: false,
    },
    {
      id: 3,
      title: "Swimming for Fitness: Health Benefits and Training Plans for Salem Residents",
      excerpt:
        "Discover how swimming can transform your fitness routine. Complete guide to swimming workouts, health benefits, and training schedules perfect for Salem's climate and lifestyle.",
      content: `Swimming is often called the perfect exercise, and for good reason. Here in Salem, Tamil Nadu, where the climate allows for year-round swimming, residents have a unique opportunity to embrace this comprehensive fitness activity.

## Why Swimming is Perfect for Salem Residents

### Climate Advantages
Salem's warm climate makes swimming an ideal year-round fitness activity. Unlike many other regions, we don't have to worry about seasonal interruptions to our swimming routine.

### Health Benefits Specific to Our Region
- **Heat relief**: Swimming provides excellent exercise while keeping cool
- **Joint-friendly**: Perfect for those dealing with joint issues common in hot climates
- **Cardiovascular health**: Excellent for heart health in all weather conditions
- **Stress relief**: Particularly beneficial in urban environments like Salem

## Complete Health Benefits of Swimming

### Physical Benefits
1. **Full-body workout** - Engages all major muscle groups
2. **Low-impact exercise** - Easy on joints and bones
3. **Cardiovascular improvement** - Strengthens heart and lungs
4. **Muscle toning** - Builds lean muscle mass
5. **Flexibility enhancement** - Improves range of motion
6. **Weight management** - Burns significant calories

### Mental Health Benefits
1. **Stress reduction** - Meditative qualities of swimming
2. **Improved sleep** - Physical exhaustion leads to better rest
3. **Confidence building** - Skill development boosts self-esteem
4. **Social interaction** - Community aspect of swimming

## Training Plans for Different Fitness Levels

### Beginner Plan (Weeks 1-4)
**Goal**: Build water confidence and basic fitness

*Week 1-2:*
- 20-30 minutes, 3 times per week
- Focus on floating and basic strokes
- 5-minute warm-up, 15-minute practice, 5-minute cool-down

*Week 3-4:*
- 30-40 minutes, 3 times per week
- Introduce continuous swimming
- 10-minute warm-up, 20-minute main set, 10-minute cool-down

### Intermediate Plan (Weeks 5-12)
**Goal**: Improve technique and endurance

*Sample Weekly Schedule:*
- **Monday**: Technique focus (45 minutes)
- **Wednesday**: Endurance building (50 minutes)
- **Friday**: Mixed workout (40 minutes)
- **Saturday**: Long, easy swim (60 minutes)

### Advanced Plan (Weeks 13+)
**Goal**: Peak fitness and performance

*Sample Weekly Schedule:*
- **Monday**: Sprint intervals
- **Tuesday**: Technique and drills
- **Wednesday**: Distance swimming
- **Thursday**: Mixed strokes
- **Friday**: High-intensity intervals
- **Saturday**: Long endurance swim
- **Sunday**: Recovery swim or rest

## Nutrition for Swimming Fitness

### Pre-Swimming Nutrition
- Light meal 2-3 hours before swimming
- Avoid heavy foods that might cause discomfort
- Stay hydrated, especially in Salem's warm climate

### Post-Swimming Recovery
- Protein for muscle recovery
- Carbohydrates to replenish energy
- Continued hydration
- Local Tamil Nadu foods that support recovery

## Swimming Workouts for Specific Goals

### Weight Loss Workout
- High-intensity intervals
- Longer duration sessions
- Varied strokes to engage different muscles
- 4-5 sessions per week

### Muscle Building Workout
- Resistance-based swimming exercises
- Use of pool equipment (kickboards, pull buoys)
- Focus on power and strength
- 3-4 sessions per week

### Cardiovascular Health Workout
- Steady-state swimming
- Gradual intensity increases
- Heart rate monitoring
- 3-4 sessions per week

## Making Swimming Part of Your Salem Lifestyle

### Time Management Tips
- Early morning sessions to beat the heat
- Evening swims for stress relief
- Weekend longer sessions for endurance
- Flexible scheduling around work and family

### Staying Motivated
- Set realistic goals
- Track your progress
- Join swimming groups or classes
- Celebrate milestones

## Overcoming Common Challenges

### Time Constraints
- Efficient workout planning
- High-intensity, shorter sessions
- Combining swimming with other activities

### Skill Development
- Professional instruction
- Video analysis
- Regular technique assessment
- Patience with progress

## Why Choose Oasis Aquatic Center for Your Fitness Journey

Our Salem facility offers:
- Professional fitness-oriented swimming programs
- Experienced coaches who understand local needs
- Flexible scheduling for busy lifestyles
- Modern facilities designed for serious fitness training

## Getting Started with Swimming Fitness

1. **Assessment**: Evaluate your current fitness level
2. **Goal Setting**: Define what you want to achieve
3. **Professional Guidance**: Consider working with a coach
4. **Consistency**: Commit to regular sessions
5. **Progress Tracking**: Monitor your improvements

## Conclusion

Swimming offers Salem residents an unparalleled opportunity for year-round fitness. With proper planning, professional guidance, and consistent effort, swimming can become the cornerstone of a healthy, active lifestyle.

Ready to dive into fitness? Contact Oasis Aquatic Center today to begin your swimming fitness journey with expert guidance tailored to your goals and Salem's unique environment.`,
      image: "/Blogs/freepik__swimming-for-fitness-health-benefits-and-training-__35003.jpeg?height=400&width=600",
      category: "Health & Fitness",
      author: "Coach Ramesh Kumar",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-12-10",
      readTime: "15 min read",
      likes: 189,
      comments: 28,
      views: 2156,
      tags: ["fitness", "health", "training", "salem"],
      featured: true,
      trending: true,
    },
    {
      id: 4,
      title: "Competitive Swimming Training: From Local Meets to State Championships",
      excerpt:
        "A comprehensive guide to competitive swimming training in Tamil Nadu. Learn about training methods, competition preparation, and pathways to success in competitive swimming.",
      content: `Competitive swimming in Tamil Nadu has grown tremendously over the past decade, with Salem emerging as a key training hub. Whether you're a young swimmer with Olympic dreams or an adult looking to compete at the masters level, understanding the competitive swimming landscape is crucial for success.

## The Competitive Swimming Scene in Tamil Nadu

### Current State of Competition
Tamil Nadu has a rich tradition in swimming, with several swimmers representing India at national and international levels. The state swimming association organizes regular competitions at district, state, and national levels.

### Key Competitions
- **District Championships**: Entry-level competitions
- **State Championships**: Qualifying meets for nationals
- **National Championships**: Top-level domestic competition
- **Masters Swimming**: Age-group competitions for adults

## Training Methodology for Competitive Swimming

### Periodization Principles
Competitive swimming training follows a structured approach:

1. **Base Phase** (3-4 months)
   - High volume, low intensity
   - Technique development
   - Aerobic capacity building

2. **Build Phase** (2-3 months)
   - Increased intensity
   - Race-specific training
   - Speed development

3. **Peak Phase** (2-4 weeks)
   - Taper and rest
   - Race preparation
   - Mental preparation

4. **Recovery Phase** (2-4 weeks)
   - Active recovery
   - Technique refinement
   - Planning next cycle

### Training Components

#### Technical Training
- Stroke mechanics refinement
- Start and turn techniques
- Underwater dolphin kick
- Race strategy development

#### Physical Training
- **Aerobic Base**: Long, steady swimming
- **Anaerobic Threshold**: Moderate to hard efforts
- **Neuromuscular Power**: Sprint training
- **Strength Training**: Dryland exercises

#### Mental Training
- Visualization techniques
- Race strategy planning
- Pressure management
- Goal setting

## Age Group Development

### Ages 8-10: Introduction to Competition
- Focus on fun and skill development
- Basic stroke technique
- Introduction to training concepts
- Local club competitions

### Ages 11-14: Skill Development
- Refined technique across all strokes
- Introduction to training sets
- Regular competition participation
- Time standard achievements

### Ages 15-18: Specialization
- Stroke and distance specialization
- Intensive training programs
- State and national level competition
- College recruitment considerations

### Masters (18+): Lifelong Competition
- Age-group specific training
- Masters competitions
- Fitness and social aspects
- Technique maintenance

## Training at Oasis Aquatic Center

### Our Competitive Program Structure

#### Pre-Competitive (Ages 8-10)
- 3 sessions per week
- Focus on all four strokes
- Introduction to training concepts
- Fun-based learning approach

#### Age Group (Ages 11-18)
- 5-6 sessions per week
- Structured training plans
- Regular time trials
- Competition preparation

#### Senior/Elite (Ages 15+)
- 6-8 sessions per week
- Specialized training
- Video analysis
- Sports science support

#### Masters (18+)
- Flexible scheduling
- Age-appropriate training
- Social and competitive aspects
- Health and fitness focus

### Coaching Philosophy
Our coaching approach emphasizes:
- Individual athlete development
- Long-term athlete development
- Technique before speed
- Holistic athlete support

## Competition Preparation

### Physical Preparation
- Taper protocols
- Race-specific training
- Recovery strategies
- Nutrition planning

### Mental Preparation
- Race visualization
- Pressure simulation
- Goal setting
- Confidence building

### Technical Preparation
- Stroke refinement
- Start and turn practice
- Race strategy development
- Equipment optimization

## Pathway to Success

### Local Level Success
1. Join a competitive program
2. Develop basic technique
3. Participate in local meets
4. Achieve time standards

### State Level Competition
1. Consistent training
2. Qualified coaching
3. Regular competition
4. Time standard progression

### National Level Aspiration
1. Elite training environment
2. Sports science support
3. Full-time commitment
4. Professional coaching

## Challenges and Solutions

### Common Challenges
- Limited pool time
- Coaching availability
- Competition opportunities
- Financial considerations

### Our Solutions
- Optimized training schedules
- Qualified coaching staff
- Regular time trials and meets
- Scholarship programs

## Success Stories from Salem

Our swimmers have achieved remarkable success:
- State championship medals
- National qualifying times
- College scholarships
- Masters world records

## The Role of Parents and Support Systems

### Parent Involvement
- Transportation and logistics
- Emotional support
- Financial commitment
- Understanding the process

### Support Team
- Coaches and technical staff
- Sports medicine professionals
- Nutritionists
- Mental performance coaches

## Technology in Competitive Swimming

### Training Technology
- Underwater cameras for technique analysis
- Pace clocks and timing systems
- Heart rate monitoring
- Stroke analysis software

### Competition Technology
- Electronic timing systems
- Video review capabilities
- Performance tracking
- Live streaming and results

## Nutrition for Competitive Swimmers

### Daily Nutrition
- High carbohydrate intake
- Adequate protein for recovery
- Proper hydration
- Micronutrient balance

### Competition Day Nutrition
- Pre-race fueling
- Between-race snacks
- Post-competition recovery
- Hydration strategies

## Injury Prevention and Management

### Common Swimming Injuries
- Shoulder impingement
- Knee injuries (breaststroke)
- Lower back issues
- Overuse injuries

### Prevention Strategies
- Proper warm-up and cool-down
- Strength training
- Technique focus
- Load management

## The Future of Competitive Swimming in Tamil Nadu

### Growing Opportunities
- Increased competition frequency
- Better facilities
- Improved coaching education
- Sports science integration

### Our Commitment
At Oasis Aquatic Center, we're committed to:
- Developing competitive swimmers
- Providing pathways to success
- Supporting athlete dreams
- Building swimming culture in Salem

## Getting Started in Competitive Swimming

### Assessment Process
1. Swimming ability evaluation
2. Goal discussion
3. Program recommendation
4. Trial period

### What to Expect
- Structured training environment
- Progressive skill development
- Regular competitions
- Comprehensive support

## Conclusion

Competitive swimming offers incredible opportunities for personal growth, achievement, and lifelong fitness. With proper training, dedication, and support, swimmers in Salem and Tamil Nadu can achieve their competitive goals at any level.

Whether you're aiming for local success or national recognition, the journey begins with a single stroke. Contact Oasis Aquatic Center today to explore our competitive swimming programs and begin your journey toward swimming excellence.

The pool is waiting – your competitive swimming journey starts now!`,
      image: "/Blogs/fitness.jpeg?height=400&width=600",
      category: "Competitive Swimming",
      author: "Coach Ramesh Kumar",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-12-08",
      readTime: "18 min read",
      likes: 267,
      comments: 45,
      views: 3421,
      tags: ["competitive", "training", "championships", "tamil nadu"],
      featured: false,
      trending: true,
    },
    {
      id: 5,
      title: "Swimming Equipment Guide: What Every Swimmer in Salem Needs",
      excerpt:
        "Complete guide to swimming equipment for all levels. From basic gear to advanced training tools, learn what equipment will enhance your swimming experience in Salem's climate.",
      content: `Choosing the right swimming equipment can significantly enhance your swimming experience and performance. Here in Salem, with our year-round swimming season, having the proper gear becomes even more important for comfort, safety, and progress.

## Essential Equipment for Every Swimmer

### Basic Swimming Gear

#### Swimwear
**For Men:**
- **Swim briefs (speedos)**: Best for serious training and competition
- **Swim shorts**: Good for recreational swimming and beginners
- **Jammers**: Knee-length suits for training and competition

**For Women:**
- **One-piece suits**: Ideal for training and lap swimming
- **Two-piece athletic suits**: Good for fitness swimming
- **Competition suits**: High-tech suits for racing

**Considerations for Salem's Climate:**
- UV protection for outdoor swimming
- Quick-dry materials for comfort
- Chlorine-resistant fabrics for pool swimming

#### Goggles
Essential for protecting eyes and improving visibility underwater.

**Types:**
- **Training goggles**: Comfortable for long sessions
- **Competition goggles**: Streamlined for racing
- **Prescription goggles**: For swimmers who wear glasses

**Features to Consider:**
- Anti-fog coating
- UV protection for outdoor swimming
- Comfortable seal and strap
- Clear or tinted lenses

#### Swim Caps
Protect hair from chlorine and reduce drag in the water.

**Materials:**
- **Silicone**: Durable and comfortable
- **Latex**: Lightweight and affordable
- **Lycra**: Comfortable but less protective

**Benefits:**
- Hair protection from chlorine
- Reduced drag for better performance
- Keeps hair out of face while swimming
- Pool hygiene requirements

### Training Equipment

#### Kickboards
Essential for developing leg strength and technique.

**Uses:**
- Isolate leg muscles for targeted training
- Improve kick technique
- Build leg strength and endurance
- Rehabilitation and recovery

#### Pull Buoys
Focus on upper body strength and technique.

**Benefits:**
- Isolate arm muscles
- Improve stroke technique
- Build upper body strength
- Develop feel for the water

#### Fins
Enhance kick strength and speed.

**Types:**
- **Short fins**: Better for technique and speed
- **Long fins**: More propulsion but less specific to swimming
- **Zoomers**: Short, stiff fins for sprint training

#### Paddles
Increase resistance for strength building.

**Varieties:**
- **Finger paddles**: Improve feel for the water
- **Full hand paddles**: Build strength
- **Stroke-specific paddles**: Target particular techniques

#### Snorkels
Allow focus on stroke technique without breathing concerns.

**Benefits:**
- Maintain head position during stroke work
- Focus on technique without breathing interruption
- Build stroke endurance
- Improve body position

### Advanced Training Equipment

#### Tempo Trainers
Electronic devices that provide audio cues for stroke rate.

**Uses:**
- Develop consistent stroke rate
- Train specific race paces
- Improve stroke efficiency
- Competition preparation

#### Drag Suits
Create additional resistance for strength training.

**Benefits:**
- Increase resistance without equipment
- Build strength and power
- Improve stroke technique under load
- Mental toughness training

#### Parachutes and Drag Devices
Provide variable resistance for power development.

**Applications:**
- Sprint power development
- Strength building
- Technique under resistance
- Advanced training protocols

## Equipment for Different Swimming Goals

### Recreational Swimming
**Essential:**
- Comfortable swimsuit
- Well-fitting goggles
- Basic swim cap

**Optional:**
- Kickboard for variety
- Water shoes for pool deck
- Towel and bag

### Fitness Swimming
**Essential:**
- Training swimsuit
- Anti-fog goggles
- Swim cap
- Kickboard
- Pull buoy

**Recommended:**
- Fins for variety
- Water bottle
- Training log
- Heart rate monitor

### Competitive Training
**Essential:**
- Multiple training suits
- Competition goggles and backup
- Training goggles
- Swim caps (multiple)
- Full set of training equipment

**Advanced:**
- Tempo trainer
- Drag suit
- Specialized paddles
- Snorkel
- Equipment bag

### Learn-to-Swim Programs
**For Children:**
- Comfortable, well-fitting swimsuit
- Soft silicone goggles
- Fun, colorful swim cap
- Kickboard (child-sized)

**For Adults:**
- Modest, comfortable swimwear
- Easy-to-adjust goggles
- Swim cap for hair protection
- Basic training aids

## Choosing Equipment for Salem's Conditions

### Climate Considerations
- **UV Protection**: Important for outdoor swimming
- **Quick-dry materials**: Essential in humid conditions
- **Chlorine resistance**: For frequent pool use
- **Comfort in heat**: Breathable materials when possible

### Local Availability
Many swimming equipment brands are available in Salem through:
- Sporting goods stores
- Online retailers
- Swimming specialty shops
- Our facility's pro shop

### Budget Considerations
**Starter Package (₹2,000-3,000):**
- Basic swimsuit
- Training goggles
- Swim cap
- Kickboard

**Intermediate Package (₹5,000-7,000):**
- Quality training suit
- Competition goggles
- Multiple caps
- Full training equipment set

**Advanced Package (₹10,000+):**
- Multiple suits including competition
- Professional equipment
- Technology aids
- Specialized gear

## Equipment Care and Maintenance

### Proper Care Extends Equipment Life
**After Each Use:**
- Rinse with fresh water
- Air dry completely
- Store in ventilated area
- Avoid direct sunlight for extended periods

**Weekly Maintenance:**
- Deep clean with mild soap
- Check for wear and damage
- Rotate equipment use
- Replace worn items promptly

### Common Mistakes to Avoid
- Leaving wet equipment in bags
- Using harsh chemicals for cleaning
- Exposing equipment to extreme heat
- Ignoring signs of wear

## Equipment for Special Needs

### Prescription Goggles
For swimmers who wear glasses:
- Custom prescription lenses
- Adjustable diopter goggles
- Contact lens considerations

### Adaptive Equipment
For swimmers with disabilities:
- Flotation aids
- Specialized entry/exit equipment
- Modified training tools
- Safety equipment

## Where to Buy Swimming Equipment in Salem

### Local Options
- Sporting goods stores
- Swimming specialty retailers
- Department stores with sports sections
- Our facility's equipment shop

### Online Shopping
- Wider selection available
- Competitive pricing
- Customer reviews
- Convenient delivery

### Trying Before Buying
- Visit our facility to try equipment
- Consult with coaches and staff
- Attend equipment demonstrations
- Take advantage of trial programs

## Equipment Recommendations by Age Group

### Children (Ages 5-12)
- Fun, colorful equipment
- Proper sizing crucial
- Safety-focused choices
- Durable materials

### Teenagers (Ages 13-18)
- Performance-oriented gear
- Style considerations
- Growing into adult sizes
- Competition preparation

### Adults (18+)
- Comfort and functionality
- Professional appearance
- Durability for regular use
- Value for money

### Seniors (55+)
- Comfort and ease of use
- Joint-friendly options
- Safety considerations
- Low-maintenance choices

## Technology Integration

### Waterproof Fitness Trackers
- Monitor heart rate and calories
- Track swimming metrics
- Set and achieve goals
- Sync with smartphone apps

### Swimming Apps
- Technique videos
- Workout planning
- Progress tracking
- Community features

## Seasonal Considerations

### Monsoon Season
- Quick-dry equipment essential
- Extra towels and dry clothes
- Waterproof bags
- Indoor training focus

### Summer Season
- UV protection priority
- Hydration equipment
- Cooling towels
- Sun protection gear

## Building Your Equipment Collection

### Start with Basics
Begin with essential items and gradually add specialized equipment as your swimming develops.

### Quality vs. Quantity
Invest in quality basics rather than many cheap items.

### Seek Expert Advice
Consult with coaches and experienced swimmers for recommendations.

### Try Before Major Purchases
Test equipment when possible, especially expensive items.

## Conclusion

The right swimming equipment can significantly enhance your swimming experience, whether you're a beginner learning basic skills or an advanced swimmer training for competition. In Salem's unique climate and swimming environment, choosing appropriate gear becomes even more important for comfort, performance, and safety.

At Oasis aquatic Center, we're here to help you make informed equipment choices that match your swimming goals, budget, and local conditions. Our experienced staff can provide personalized recommendations and help you build an equipment collection that will serve you well throughout your swimming journey.

Remember, the best equipment is the gear that fits properly, meets your needs, and helps you enjoy your time in the water. Start with the basics, invest in quality, and gradually build your collection as your swimming skills and goals evolve.

Ready to upgrade your swimming gear? Visit us at Oasis Aquatic Center in Salem to explore our equipment options and get expert advice tailored to your swimming needs.`,
      image: "/Blogs/equiments.jpeg?height=400&width=600",
      category: "Equipment Reviews",
      author: "Suresh Patel",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-12-05",
      readTime: "14 min read",
      likes: 134,
      comments: 19,
      views: 987,
      tags: ["equipment", "gear", "reviews", "guide"],
      featured: false,
      trending: false,
    },
    {
      id: 6,
      title: "Salem Swimming Scene: Local Competitions and Community Events",
      excerpt:
        "Stay updated with Salem's vibrant swimming community. Learn about local competitions, community events, and how to get involved in the aquatic sports scene in Tamil Nadu.",
      content: `Salem's swimming community has grown tremendously over the past few years, establishing itself as a significant hub for aquatic sports in Tamil Nadu. From grassroots competitions to state-level championships, our city offers numerous opportunities for swimmers of all levels to compete, learn, and connect with fellow aquatic enthusiasts.

## The Growth of Swimming in Salem

### Historical Context
Swimming in Salem has evolved from a recreational activity to a serious sport with dedicated facilities, trained coaches, and competitive programs. The establishment of modern aquatic centers has provided the infrastructure needed for this growth.

### Current Landscape
Today, Salem boasts:
- Multiple swimming facilities
- Active competitive programs
- Regular local competitions
- Strong community participation
- Growing youth involvement

## Major Swimming Competitions in Salem

### Annual Salem District Swimming Championship
**When**: Typically held in January
**Where**: Various venues including Oasis Aquatic Center
**Categories**: Age group competitions from 8 years to masters
**Events**: All four strokes plus individual medley and relays

**Recent Highlights:**
- Over 300 participants in 2024
- New district records set in multiple events
- Strong representation at state level
- Growing participation from rural areas

### Salem Open Swimming Meet
**When**: Usually in March
**Format**: Open to swimmers from across Tamil Nadu
**Special Features**: 
- Long course (50m) events when available
- Masters categories
- Team competitions
- Awards for technique and sportsmanship

### Inter-School Swimming Championships
**Participants**: Schools across Salem district
**Age Groups**: Under-14, Under-17, Under-19
**Impact**: Identifies young talent for development programs
**Growth**: Participation has doubled in the past three years

### Corporate Swimming League
**Concept**: Teams from local businesses and organizations
**Format**: Relay-focused competition
**Benefits**: Promotes workplace wellness and team building
**Popularity**: Expanding to include more companies each year

## Community Swimming Events

### Family Swimming Days
**Frequency**: Monthly at participating facilities
**Activities**: 
- Family relay races
- Swimming games and activities
- Safety demonstrations
- Equipment trials

**Benefits:**
- Introduces families to competitive swimming
- Builds community connections
- Promotes water safety awareness
- Encourages lifelong participation

### Charity Swimming Events
**Salem Swim for a Cause**
- Annual fundraising swim-a-thon
- Supports local charities and causes
- Brings community together for good causes
- Raises awareness about swimming benefits

**Water Safety Awareness Campaigns**
- Free swimming lessons for underprivileged children
- Water safety workshops for schools
- Community lifeguard training programs
- Public awareness events

### Masters Swimming Program
**Target**: Adult swimmers (18+)
**Focus**: Fitness, technique, and friendly competition
**Activities**:
- Regular training sessions
- Masters competitions
- Social events
- Technique clinics

**Age Groups**:
- 18-24, 25-29, 30-34, 35-39, 40-44, 45-49, 50-54, 55-59, 60+

## Youth Development Programs

### Age Group Swimming
**Structure**: Organized by age and ability
**Training**: Progressive skill development
**Competition**: Regular meets and time trials
**Pathway**: Clear progression to higher levels

### Summer Swimming Camps
**Duration**: 2-4 week intensive programs
**Focus**: Skill development and fun
**Participants**: Children and teenagers
**Outcomes**: Improved technique and water confidence

### Talent Identification Programs
**Purpose**: Identify promising young swimmers
**Process**: Systematic evaluation and development
**Support**: Specialized coaching and training
**Success**: Several swimmers have progressed to state level

## Getting Involved in Salem's Swimming Community

### For Beginners
1. **Start with Learn-to-Swim Programs**
   - Basic water safety and swimming skills
   - Comfortable, supportive environment
   - Qualified instruction
   - Progressive skill development

2. **Join Community Swimming Groups**
   - Meet other swimmers
   - Participate in group activities
   - Learn from experienced swimmers
   - Build confidence and skills

### For Intermediate Swimmers
1. **Participate in Local Competitions**
   - Gain competition experience
   - Set personal goals
   - Meet other competitive swimmers
   - Improve performance under pressure

2. **Join Training Groups**
   - Structured training programs
   - Qualified coaching
   - Regular skill assessment
   - Preparation for higher-level competition

### For Advanced Swimmers
1. **Compete at District and State Levels**
   - Represent Salem in higher competitions
   - Achieve qualifying times
   - Gain recognition and opportunities
   - Inspire younger swimmers

2. **Become a Mentor or Coach**
   - Share knowledge and experience
   - Help develop the next generation
   - Give back to the community
   - Continue personal growth

## Volunteer Opportunities

### Competition Officials
**Training Available**: Officiating courses offered regularly
**Roles**: Timekeepers, stroke judges, starters
**Benefits**: Deep understanding of competitive swimming
**Impact**: Essential for running quality competitions

### Event Organization
**Opportunities**: Help organize local meets and events
**Skills Developed**: Event management, teamwork
**Networking**: Connect with swimming community leaders
**Satisfaction**: Contribute to sport development

### Coaching Assistance
**Requirements**: Swimming knowledge and enthusiasm
**Training**: Coaching certification programs available
**Roles**: Assistant coaching, technique support
**Growth**: Pathway to full coaching certification

## Facilities Supporting Salem's Swimming Community

### Oasis Aquatic Center
**Role**: Premier training and competition venue
**Features**: 
- Competition-standard pools
- Professional coaching staff
- Regular competitions and events
- Community program hosting

### Other Local Facilities
- School and college pools
- Private club facilities
- Government sports complexes
- Hotel and resort pools

## Success Stories from Salem

### Individual Achievements
- **Priya Krishnan**: State championship medalist, now coaching youth
- **Rajesh Kumar**: Masters world record holder in 50+ age group
- **Arjun Sharma**: Youngest Salem swimmer to qualify for nationals

### Team Successes
- Salem district team: Multiple state championship medals
- Corporate teams: Growing participation and success
- School teams: Consistent improvement in inter-school competitions

## Challenges and Opportunities

### Current Challenges
- Limited pool time during peak hours
- Need for more qualified coaches
- Transportation for rural participants
- Equipment and training costs

### Opportunities for Growth
- Expanding facility capacity
- Coach development programs
- Scholarship and support programs
- Corporate sponsorship opportunities

## The Role of Technology

### Live Streaming and Results
- Real-time competition results
- Live streaming of major events
- Social media engagement
- Broader community involvement

### Training Technology
- Video analysis for technique improvement
- Performance tracking systems
- Online coaching resources
- Virtual training programs

## Supporting Local Swimming

### Sponsorship Opportunities
Local businesses can support swimming through:
- Event sponsorship
- Equipment donations
- Scholarship programs
- Facility improvements

### Community Involvement
Individuals can contribute by:
- Volunteering at events
- Participating in programs
- Spreading awareness
- Supporting young swimmers

## Future Vision for Salem Swimming

### Short-term Goals (1-2 years)
- Increase participation by 50%
- Host regional-level competitions
- Develop more qualified coaches
- Expand youth programs

### Long-term Vision (5-10 years)
- Establish Salem as a swimming hub in Tamil Nadu
- Produce national-level swimmers
- Create sustainable community programs
- Build world-class facilities

## How Oasis Aquatic Center Contributes

### Competition Hosting
- Regular local competitions
- State-level meet hosting
- Professional event management
- Quality facilities and equipment

### Community Programs
- Affordable learn-to-swim programs
- Community event hosting
- Volunteer training programs
- Scholarship opportunities

### Coaching Development
- Coach certification programs
- Continuing education opportunities
- Mentorship programs
- Professional development support

## Getting Started Today

### For Individuals
1. **Visit a local facility** to learn about programs
2. **Attend a community event** to meet other swimmers
3. **Sign up for lessons** appropriate to your level
4. **Set personal goals** for improvement and participation

### For Families
1. **Explore family programs** available in Salem
2. **Attend family swimming events** to get involved
3. **Consider swimming lessons** for all family members
4. **Support local competitions** as spectators

### For Organizations
1. **Consider corporate swimming programs** for employees
2. **Explore sponsorship opportunities** for community events
3. **Organize workplace swimming activities** for team building
4. **Support youth development programs** in the community

## Conclusion

Salem's swimming community offers something for everyone, from beginners taking their first strokes to competitive swimmers pursuing excellence. The combination of quality facilities, dedicated coaches, supportive community, and regular competitions creates an environment where swimmers can thrive and achieve their goals.

Whether you're looking to learn to swim, improve your fitness, compete at a high level, or simply connect with like-minded individuals, Salem's swimming community welcomes you. The water is warm, the community is friendly, and the opportunities are endless.

Join us in making Salem a premier destination for swimming in Tamil Nadu. Your swimming journey starts with a single stroke – take that stroke today and become part of our growing aquatic community.

Contact Oasis Aquatic Center to learn more about how you can get involved in Salem's vibrant swimming scene. Together, we're building a stronger, healthier, and more connected community through the power of swimming.`,
      image: "/Blogs/local.jpeg?height=400&width=600",
      category: "Local News",
      author: "Coach Ramesh Kumar",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "2024-12-03",
      readTime: "16 min read",
      likes: 198,
      comments: 31,
      views: 1654,
      tags: ["salem", "community", "competitions", "local news"],
      featured: false,
      trending: false,
    },
  ]

  const filteredPosts = blogPosts
    .filter((post) => selectedCategory === "All" || post.category === selectedCategory)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "popular":
          return b.likes - a.likes
        case "trending":
          return (b.trending ? 1 : 0) - (a.trending ? 1 : 0)
        default:
          return 0
      }
    })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const trendingPosts = blogPosts.filter((post) => post.trending)

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
              📚 Swimming Knowledge Hub
            </Badge>
            <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Swimming
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600"> Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Expert swimming advice, training tips, safety guidelines, and aquatic center news from Salem's premier
              swimming facility. Learn from certified instructors and experienced coaches.
            </p>
          </div>

          {/* Blog Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Expert Articles", icon: BookOpen },
              { number: "15K+", label: "Monthly Readers", icon: Eye },
              { number: "3", label: "Expert Authors", icon: User },
              { number: "500+", label: "Swimming Tips", icon: Star },
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

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">⭐ Featured Articles</Badge>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Editor's Picks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and comprehensive swimming guides, handpicked by our expert team
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white interactive-card"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-white border-0">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  </div>

                  {/* Trending Badge */}
                  {post.trending && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-500 text-white border-0">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    </div>
                  )}

                  {/* Quick Stats */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-white/20 text-white hover:bg-white/30 border-0">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">{post.category}</Badge>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-800 text-sm">{post.author}</div>
                        <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-500 hover:text-red-500 p-1">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-500 p-1">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-gray-100 text-gray-600 border-gray-200 text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore All Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find exactly what you're looking for with our advanced search and filtering options
            </p>
          </div>

          {/* Search and Filter Controls */}
          <Card className="mb-12 border-0 shadow-lg bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Articles</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search articles, tips, guides..."
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
                    <option value="popular">Most Popular</option>
                    <option value="trending">Trending</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  {filteredPosts.length} articles found
                </Badge>
                {selectedCategory !== "All" && (
                  <Badge className="bg-green-100 text-green-800 border-green-200">Category: {selectedCategory}</Badge>
                )}
                {searchTerm && (
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Search: "{searchTerm}"</Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white interactive-card"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500 text-white border-0">{post.category}</Badge>
                  </div>

                  {/* Trending Badge */}
                  {post.trending && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-500 text-white border-0">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-gray-100 text-gray-600 border-gray-200 text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">👨‍🏫 Expert Authors</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                {" "}
                Swimming Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from certified instructors and experienced coaches who share their knowledge through our blog
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-blue-50 interactive-card"
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <Image
                      src={author.image || "/placeholder.svg"}
                      alt={author.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-white fill-current" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{author.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{author.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{author.bio}</p>

                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-800 mb-1">{author.articles}</div>
                    <div className="text-sm text-gray-600">Articles Published</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-700 mb-2">Expertise:</div>
                    {author.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-blue-100 text-blue-800 border-blue-200 text-xs mr-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">📧 Stay Updated</Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">Never Miss a Swimming Tip</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Subscribe to our newsletter and get the latest swimming tips, safety guidelines, and aquatic center news
              delivered directly to your inbox every week.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Weekly Tips</h3>
                <p className="text-sm opacity-90">Expert swimming advice delivered every Tuesday</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Event Updates</h3>
                <p className="text-sm opacity-90">First to know about competitions and events</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Exclusive Content</h3>
                <p className="text-sm opacity-90">Subscriber-only articles and resources</p>
              </div>
            </div>

            <p className="text-sm opacity-75 mt-8">Free newsletter • No spam • Expert content • Unsubscribe anytime</p>
          </div>
        </div>
      </section>
              {/* Enhanced Footer */}
      <Footer />

    </div>
  )
}
