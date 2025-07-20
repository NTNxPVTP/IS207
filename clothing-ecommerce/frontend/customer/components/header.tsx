import Image from "next/image"
import Link from "next/link"
import { Search, Heart, ShoppingBag, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="bg-gray-100 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/placeholder.svg?height=16&width=16" alt="Jordan" width={16} height={16} />
            <ChevronRight className="w-3 h-3" />
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <Link href="#" className="hover:text-black">
              Find a Store
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-black">
              Help
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-black">
              Join Us
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-black">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white px-4 py-4 sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Nike Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/placeholder.svg?height=24&width=60" alt="Nike" width={60} height={24} />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
            <Link href="/new-featured" className="hover:text-gray-600 transition-colors">
              New & Featured
            </Link>
            <Link href="/men" className="hover:text-gray-600 transition-colors">
              Men
            </Link>
            <Link href="/women" className="hover:text-gray-600 transition-colors">
              Women
            </Link>
            <Link href="/kids" className="hover:text-gray-600 transition-colors">
              Kids
            </Link>
            <Link href="/jordan" className="hover:text-gray-600 transition-colors">
              Jordan
            </Link>
            <Link href="/sale" className="hover:text-gray-600 transition-colors">
              Sale
            </Link>
            <Link href="/snkrs" className="hover:text-gray-600 transition-colors">
              SNKRS
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <Input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none text-sm focus:outline-none focus:ring-0 w-40"
              />
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
