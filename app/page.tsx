import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Globe, Calendar, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-teal-500" />
            <span>GoNomadly</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Home
            </Link>
            <Link href="/destinations" className="text-sm font-medium hover:text-teal-500 transition-colors">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-teal-500 hover:bg-teal-600">Adventure Awaits</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the World with GoNomadly
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore breathtaking destinations, create unforgettable memories, and embark on journeys that will
                    transform your perspective.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/destinations">
                    <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                      Explore Destinations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="https://images.pexels.com/photos/15923411/pexels-photo-15923411/free-photo-of-tropical-village-with-beach.jpeg?auto=compress&cs=tinysrgb&w=600"
                width={550}
                height={550}
                alt="Hero image of a scenic travel destination"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="border-teal-500 text-teal-500">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Travel Smarter, Not Harder</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  GoNomadly provides everything you need for seamless travel experiences, from expert recommendations to
                  personalized itineraries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Curated Destinations</h3>
                  <p className="text-muted-foreground">
                    Handpicked locations that offer authentic experiences beyond typical tourist spots.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-500">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Smart Itineraries</h3>
                  <p className="text-muted-foreground">
                    AI-powered trip planning that adapts to your preferences, time constraints, and budget.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-500">
                  <Star className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Traveler Community</h3>
                  <p className="text-muted-foreground">
                    Connect with fellow explorers, share tips, and discover hidden gems from local experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-teal-500 hover:bg-teal-600">Featured Destinations</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Places to Explore</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our most loved destinations and start planning your next adventure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600"
                    fill
                    alt="Santorini, Greece"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <Badge className="bg-white text-black hover:bg-gray-100">Europe</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Santorini, Greece</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="ml-1 text-sm">4.9</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Iconic white-washed buildings, stunning sunsets, and crystal-clear waters make this Greek island a
                      must-visit destination.
                    </p>
                    <Link href="/destinations/santorini">
                      <Button className="w-full mt-2 bg-teal-500 hover:bg-teal-600">Explore Santorini</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image src="https://images.pexels.com/photos/315403/pexels-photo-315403.jpeg?auto=compress&cs=tinysrgb&w=600" fill alt="Kyoto, Japan" className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <Badge className="bg-white text-black hover:bg-gray-100">Asia</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Kyoto, Japan</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="ml-1 text-sm">4.8</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Experience traditional Japanese culture with ancient temples, beautiful gardens, and authentic tea
                      ceremonies.
                    </p>
                    <Link href="/destinations/kyoto">
                      <Button className="w-full mt-2 bg-teal-500 hover:bg-teal-600">Explore Kyoto</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src="https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=600"
                    fill
                    alt="Machu Picchu, Peru"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <Badge className="bg-white text-black hover:bg-gray-100">South America</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Machu Picchu, Peru</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="ml-1 text-sm">4.9</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Discover the ancient Incan citadel nestled high in the Andes mountains, offering breathtaking
                      views and rich history.
                    </p>
                    <Link href="/destinations/machu-picchu">
                      <Button className="w-full mt-2 bg-teal-500 hover:bg-teal-600">Explore Machu Picchu</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link href="/destinations">
                <Button size="lg" variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
                  View All Destinations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <Badge className="bg-teal-500 hover:bg-teal-600">Join Our Community</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get Inspired for Your Next Adventure
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Subscribe to our newsletter and be the first to receive travel tips, exclusive deals, and inspiration
                  for your next journey.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <form className="w-full space-y-4">
                  <div className="grid gap-2">
                    <Input type="email" placeholder="Enter your email" required />
                  </div>
                  <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
                    Subscribe to Newsletter
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-teal-50">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <Globe className="h-6 w-6 text-teal-500" />
                <span>GoNomadly</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Empowering travelers to explore the world with confidence and curiosity since 2023.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-teal-500">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-teal-500">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-teal-500">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
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
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-teal-500">
                    Blog
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
                  <Link href="/careers" className="text-muted-foreground hover:text-teal-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-teal-500">
                    Press
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
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-teal-500">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} GoNomadly. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-teal-500">
                Sitemap
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-teal-500">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

