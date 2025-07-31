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
            <Image src="/3P1N_logo.png?height=16&width=16" alt="Jordan" width={16} height={16} />
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
            <Link href="/login" className="hover:text-black">
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
            <Image src="/3P1N_logo.png?height=24&width=60" alt="Nike" width={60} height={24} />
          </Link>

          {/* Navigation */}
          <nav className="relative hidden md:flex items-center space-x-8 text-base font-medium">
            {/* New & Featured */}
            <div className="relative group">
              <Link href="/new-featured" className="relative inline-block  text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                New & Featured
              </Link>
              {/* Dropdown New & Featured */}
            </div>

            {/* men  */}
            <div className="relative group">
              <Link href="/men" className="relative inline-block  text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                Men
              </Link>
              {/* Dropdown men */}
            </div>

            <div className="relative group">
              <Link href="/women" className="relative inline-block  text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                Women
              </Link>
            </div>
            <div className="relative group">
              <Link href="/kids" className="relative inline-block  text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                Kids
              </Link>
            </div>
            <div className="relative group">
              <Link href="/jordan" className="relative inline-block  text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                Jordan
              </Link>
            </div>
            <div className="relative group">
              <Link href="/sale" className="relative inline-block  text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                Sale
              </Link>
            </div>
            <div className="relative group">
              <Link href="/snkrs"
                className="relative inline-block  text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                SNKRS
              </Link>

            </div>
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
            <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="w-5 h-5" />
            </Button>
            </Link>
            <Link href="/cartitem">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
