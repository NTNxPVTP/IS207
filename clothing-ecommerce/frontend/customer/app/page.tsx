import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function NikePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image src="/main_image.png?height=700&width=1200" alt="Nike Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-4">BRING</h1>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-8">YOUR GAME</h2>
          </div>
        </div>

        {/* Carousel Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full opacity-50" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full opacity-50" />
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Jordan Basketball"
                width={300}
                height={300}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-lg mb-1">Jordan</h3>
            <p className="text-gray-600 text-sm">Basketball Shoes</p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Nike Running"
                width={300}
                height={300}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-lg mb-1">Nike Running</h3>
            <p className="text-gray-600 text-sm">Performance Footwear</p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Nike Lifestyle"
                width={300}
                height={300}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-lg mb-1">Nike Lifestyle</h3>
            <p className="text-gray-600 text-sm">Everyday Comfort</p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Nike Training"
                width={300}
                height={300}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-lg mb-1">Nike Training</h3>
            <p className="text-gray-600 text-sm">Workout Essentials</p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* women feature  */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Women's Collection"
                width={600}
                height={400}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-bold mb-2">Women's</h3>
                <Button className="bg-white text-black hover:bg-black hover:text-white rounded-full px-6 py-2 transition-colors duration-300">
                    Shop Now
                  </Button>
              </div>
            </div>
          </div>
        {/* men feature  */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Men's Collection"
                width={600}
                height={400}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-bold mb-2">Men's</h3>
                <Link href="/men">
                  <Button className="bg-white text-black hover:bg-black hover:text-white rounded-full px-6 py-2 transition-colors duration-300">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* kids feature  */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="!!!"
                width={600}
                height={400}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-bold mb-2">Kids</h3>
                <Button className="bg-white text-black hover:bg-black hover:text-white rounded-full px-6 py-2 transition-colors duration-300">
                    Shop Now
                  </Button>
              </div>
            </div>
          </div>
          {/* sale feature */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Men's Collection"
                width={600}
                height={400}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-bold mb-2">Sales</h3>
                <Button className="bg-white text-black hover:bg-black hover:text-white rounded-full px-6 py-2 transition-colors duration-300">
                    Shop Now
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium mb-4">Find A Store</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Become A Member
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sign Up for Email
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Send Us Feedback
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Student Discounts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Get Help</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Order Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Payment Options
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">About Nike</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <div className="w-6 h-6 bg-gray-400 rounded" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <div className="w-6 h-6 bg-gray-400 rounded" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <div className="w-6 h-6 bg-gray-400 rounded" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2024 Nike, Inc. All rights reserved</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white">
                  Guides
                </Link>
                <Link href="#" className="hover:text-white">
                  Terms of Sale
                </Link>
                <Link href="#" className="hover:text-white">
                  Terms of Use
                </Link>
                <Link href="#" className="hover:text-white">
                  Nike Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
