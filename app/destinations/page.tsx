import Link from "next/link"
import Image from "next/image"
import { Search, Filter, MapPin, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DestinationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-teal-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span>GoNomadly</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Home
            </Link>
            <Link href="/destinations" className="text-sm font-medium text-teal-500">
              Destinations
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-teal-500 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Destinations</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover amazing places around the world and plan your next unforgettable journey.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex w-full max-w-lg items-center space-x-2">
                  <Input type="search" placeholder="Search destinations..." className="flex-1" />
                  <Button type="submit" size="icon" className="bg-teal-500 hover:bg-teal-600">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold tracking-tighter">All Destinations</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filter by:</span>
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="south-america">South America</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="oceania">Oceania</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Experience Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Experiences</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                    <SelectItem value="mountain">Mountain</SelectItem>
                    <SelectItem value="city">City</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="food">Food & Culinary</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="az">A-Z</SelectItem>
                    <SelectItem value="za">Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {destinations.map((destination, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-60">
                    <Image
                      src={destination.image || "/https://images.pexels.com/photos/315403/pexels-photo-315403.jpeg?auto=compress&cs=tinysrgb&w=600"}
                      fill
                      alt={destination.name}
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <Badge className="bg-white text-black hover:bg-gray-100">{destination.region}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{destination.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-current text-yellow-400" />
                          <span className="ml-1 text-sm">{destination.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>{destination.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{destination.description}</p>
                      <Link href={`/destinations/${destination.slug}`}>
                        <Button className="w-full mt-2 bg-teal-500 hover:bg-teal-600">Explore</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-1">
                <Button variant="outline" size="icon" disabled>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <span className="sr-only">Previous page</span>
                </Button>
                <Button variant="outline" size="sm" className="bg-teal-500 text-white hover:bg-teal-600">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  4
                </Button>
                <Button variant="outline" size="sm">
                  5
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <span className="sr-only">Next page</span>
                </Button>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-teal-50">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-teal-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>GoNomadly</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Empowering travelers to explore the world with confidence and curiosity since 2023.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-base">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/destinations" className="text-muted-foreground hover:text-teal-500">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/experiences" className="text-muted-foreground hover:text-teal-500">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/travel-guides" className="text-muted-foreground hover:text-teal-500">
                    Travel Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-base">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-teal-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-teal-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-base">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-teal-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-teal-500">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} GoNomadly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample destination data
const destinations = [
  {
    name: "Santorini",
    slug: "santorini",
    location: "Greece",
    region: "Europe",
    rating: "4.9",
    image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Iconic white-washed buildings, stunning sunsets, and crystal-clear waters make this Greek island a must-visit destination.",
  },
  {
    name: "Kyoto",
    slug: "kyoto",
    location: "Japan",
    region: "Asia",
    rating: "4.8",
    image: "https://images.pexels.com/photos/315403/pexels-photo-315403.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Experience traditional Japanese culture with ancient temples, beautiful gardens, and authentic tea ceremonies.",
  },
  {
    name: "Machu Picchu",
    slug: "machu-picchu",
    location: "Peru",
    region: "South America",
    rating: "4.9",
    image: "https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Discover the ancient Incan citadel nestled high in the Andes mountains, offering breathtaking views and rich history.",
  },
  {
    name: "Barcelona",
    slug: "barcelona",
    location: "Spain",
    region: "Europe",
    rating: "4.7",
    image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A vibrant city known for its unique architecture, delicious cuisine, and lively atmosphere.",
  },
  {
    name: "Bali",
    slug: "bali",
    location: "Indonesia",
    region: "Asia",
    rating: "4.6",
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "A tropical paradise with beautiful beaches, lush rice terraces, and a rich cultural heritage.",
  },
  {
    name: "New York City",
    slug: "new-york",
    location: "USA",
    region: "North America",
    rating: "4.8",
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "The city that never sleeps offers world-class dining, shopping, and iconic landmarks.",
  },
  {
    name: "Cape Town",
    slug: "cape-town",
    location: "South Africa",
    region: "Africa",
    rating: "4.7",
    image: "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A stunning coastal city with Table Mountain as its backdrop, offering diverse experiences from wildlife to wine.",
  },
  {
    name: "Sydney",
    slug: "sydney",
    location: "Australia",
    region: "Oceania",
    rating: "4.8",
    image: "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Famous for its harbor, opera house, and beautiful beaches, Sydney is Australia's crown jewel.",
  },
]

