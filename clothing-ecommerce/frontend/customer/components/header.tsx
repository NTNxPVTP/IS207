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
            <Image src="/3P1N_logo.png?height=24&width=60" alt="Nike" width={60} height={24} />
          </Link>

          {/* Navigation */}
          <nav className="relative hidden md:flex items-center space-x-8 text-base font-medium">
            {/* New & Featured */}
            <div className="relative group">
              <Link href="/new-featured" className="py-20 hover:text-gray-600 transition-colors">
                New & Featured
              </Link>
              
              {/* Dropdown New & Featured */}
              <div className="fixed left-0 top-23 bg-white shadow-xl border w-screen p-6 z-50
                opacity-0 translate-y-[-20px] 
                transition-all duration-500 ease-out
                pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Column 1 - Featured */}
                  <div>
                    <h4 className="font-semibold mb-2">Featured</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">New & Upcoming Drops</Link></li>
                      <li><Link href="#">New Arrivals</Link></li>
                      <li><Link href="#">Bestsellers</Link></li>
                      <li><Link href="#">Member Exclusive</Link></li>
                      <li><Link href="#">Customise with Nike By You</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Jordan</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 - Trending */}
                  <div>
                    <h4 className="font-semibold mb-2">Trending</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Summer Essentials</Link></li>
                      <li><Link href="#">Structure 26 - Run Supported</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Nike 24.7</Link></li>
                      <li><Link href="#">Colours of the Season: Earth Tones</Link></li>
                      <li><Link href="#">Retro Running</Link></li>
                      <li><Link href="#">Running Shoe Finder</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 - Shop Icons */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop Icons</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Lifestyle</Link></li>
                      <li><Link href="#">Air Force 1</Link></li>
                      <li><Link href="#">Air Jordan 1</Link></li>
                      <li><Link href="#">Air Max</Link></li>
                      <li><Link href="#">Dunk</Link></li>
                      <li><Link href="#">Cortez</Link></li>
                      <li><Link href="#">Blazer</Link></li>
                      <li><Link href="#">Pegasus</Link></li>
                      <li><Link href="#">Vomero</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 - Shop By Sport */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop By Sport</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Running</Link></li>
                      <li><Link href="#">Basketball</Link></li>
                      <li><Link href="#">Football</Link></li>
                      <li><Link href="#">Golf</Link></li>
                      <li><Link href="#">Tennis</Link></li>
                      <li><Link href="#">Gym and Training</Link></li>
                      <li><Link href="#">Yoga</Link></li>
                      <li><Link href="#">Skateboarding</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* men  */}
            <div className="relative group">
            <Link href="/men" className="py-20 hover:text-gray-600 transition-colors">
              Men
            </Link>
            {/* Dropdown men */}
              <div className="fixed left-0 top-23 bg-white shadow-xl border w-screen p-6 z-50
                opacity-0 translate-y-[-20px] 
                transition-all duration-500 ease-out
                pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Column 1 - Featured */}
                  <div>
                    <h4 className="font-semibold mb-2">Featured</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">New</Link></li>
                      <li><Link href="#">New Arrivals</Link></li>
                      <li><Link href="#">Bestsellers</Link></li>
                      <li><Link href="#">Member Exclusive</Link></li>
                      <li><Link href="#">Customise with Nike By You</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Jordan</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 - Trending */}
                  <div>
                    <h4 className="font-semibold mb-2">Trending</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Summer Essentials</Link></li>
                      <li><Link href="#">Structure 26 - Run Supported</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Nike 24.7</Link></li>
                      <li><Link href="#">Colours of the Season: Earth Tones</Link></li>
                      <li><Link href="#">Retro Running</Link></li>
                      <li><Link href="#">Running Shoe Finder</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 - Shop Icons */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop Icons</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Lifestyle</Link></li>
                      <li><Link href="#">Air Force 1</Link></li>
                      <li><Link href="#">Air Jordan 1</Link></li>
                      <li><Link href="#">Air Max</Link></li>
                      <li><Link href="#">Dunk</Link></li>
                      <li><Link href="#">Cortez</Link></li>
                      <li><Link href="#">Blazer</Link></li>
                      <li><Link href="#">Pegasus</Link></li>
                      <li><Link href="#">Vomero</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 - Shop By Sport */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop By Sport</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Running</Link></li>
                      <li><Link href="#">Basketball</Link></li>
                      <li><Link href="#">Football</Link></li>
                      <li><Link href="#">Golf</Link></li>
                      <li><Link href="#">Tennis</Link></li>
                      <li><Link href="#">Gym and Training</Link></li>
                      <li><Link href="#">Yoga</Link></li>
                      <li><Link href="#">Skateboarding</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
            <Link href="/women" className="py-20 hover:text-gray-600 transition-colors">
              Women
            </Link>

            {/* Dropdown New & Featured */}
              <div className="fixed left-0 top-23 bg-white shadow-xl border w-screen p-6 z-50
                opacity-0 translate-y-[-20px] 
                transition-all duration-500 ease-out
                pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Column 1 - Featured */}
                  <div>
                    <h4 className="font-semibold mb-2">Featured</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">New & Upcoming Drops</Link></li>
                      <li><Link href="#">New Arrivals</Link></li>
                      <li><Link href="#">Bestsellers</Link></li>
                      <li><Link href="#">Member Exclusive</Link></li>
                      <li><Link href="#">Customise with Nike By You</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Jordan</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 - Trending */}
                  <div>
                    <h4 className="font-semibold mb-2">Trending</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Summer Essentials</Link></li>
                      <li><Link href="#">Structure 26 - Run Supported</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Nike 24.7</Link></li>
                      <li><Link href="#">Colours of the Season: Earth Tones</Link></li>
                      <li><Link href="#">Retro Running</Link></li>
                      <li><Link href="#">Running Shoe Finder</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 - Shop Icons */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop Icons</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Lifestyle</Link></li>
                      <li><Link href="#">Air Force 1</Link></li>
                      <li><Link href="#">Air Jordan 1</Link></li>
                      <li><Link href="#">Air Max</Link></li>
                      <li><Link href="#">Dunk</Link></li>
                      <li><Link href="#">Cortez</Link></li>
                      <li><Link href="#">Blazer</Link></li>
                      <li><Link href="#">Pegasus</Link></li>
                      <li><Link href="#">Vomero</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 - Shop By Sport */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop By Sport</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Running</Link></li>
                      <li><Link href="#">Basketball</Link></li>
                      <li><Link href="#">Football</Link></li>
                      <li><Link href="#">Golf</Link></li>
                      <li><Link href="#">Tennis</Link></li>
                      <li><Link href="#">Gym and Training</Link></li>
                      <li><Link href="#">Yoga</Link></li>
                      <li><Link href="#">Skateboarding</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
            <Link href="/kids" className="py-20 hover:text-gray-600 transition-colors">
              Kids
            </Link>

            {/* Dropdown New & Featured */}
              <div className="fixed left-0 top-23 bg-white shadow-xl border w-screen p-6 z-50
                opacity-0 translate-y-[-20px] 
                transition-all duration-500 ease-out
                pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Column 1 - Featured */}
                  <div>
                    <h4 className="font-semibold mb-2">Featured</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">New & Upcoming Drops</Link></li>
                      <li><Link href="#">New Arrivals</Link></li>
                      <li><Link href="#">Bestsellers</Link></li>
                      <li><Link href="#">Member Exclusive</Link></li>
                      <li><Link href="#">Customise with Nike By You</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Jordan</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 - Trending */}
                  <div>
                    <h4 className="font-semibold mb-2">Trending</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Summer Essentials</Link></li>
                      <li><Link href="#">Structure 26 - Run Supported</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Nike 24.7</Link></li>
                      <li><Link href="#">Colours of the Season: Earth Tones</Link></li>
                      <li><Link href="#">Retro Running</Link></li>
                      <li><Link href="#">Running Shoe Finder</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 - Shop Icons */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop Icons</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Lifestyle</Link></li>
                      <li><Link href="#">Air Force 1</Link></li>
                      <li><Link href="#">Air Jordan 1</Link></li>
                      <li><Link href="#">Air Max</Link></li>
                      <li><Link href="#">Dunk</Link></li>
                      <li><Link href="#">Cortez</Link></li>
                      <li><Link href="#">Blazer</Link></li>
                      <li><Link href="#">Pegasus</Link></li>
                      <li><Link href="#">Vomero</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 - Shop By Sport */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop By Sport</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Running</Link></li>
                      <li><Link href="#">Basketball</Link></li>
                      <li><Link href="#">Football</Link></li>
                      <li><Link href="#">Golf</Link></li>
                      <li><Link href="#">Tennis</Link></li>
                      <li><Link href="#">Gym and Training</Link></li>
                      <li><Link href="#">Yoga</Link></li>
                      <li><Link href="#">Skateboarding</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="relative group">
            <Link href="/jordan" className="py-20 hover:text-gray-600 transition-colors">
              Jordan
            </Link>

            {/* Dropdown New & Featured */}
              <div className="fixed left-0 top-23 bg-white shadow-xl border w-screen p-6 z-50
                opacity-0 translate-y-[-20px] 
                transition-all duration-500 ease-out
                pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Column 1 - Featured */}
                  <div>
                    <h4 className="font-semibold mb-2">Featured</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">New & Upcoming Drops</Link></li>
                      <li><Link href="#">New Arrivals</Link></li>
                      <li><Link href="#">Bestsellers</Link></li>
                      <li><Link href="#">Member Exclusive</Link></li>
                      <li><Link href="#">Customise with Nike By You</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Jordan</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 - Trending */}
                  <div>
                    <h4 className="font-semibold mb-2">Trending</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Summer Essentials</Link></li>
                      <li><Link href="#">Structure 26 - Run Supported</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Nike 24.7</Link></li>
                      <li><Link href="#">Colours of the Season: Earth Tones</Link></li>
                      <li><Link href="#">Retro Running</Link></li>
                      <li><Link href="#">Running Shoe Finder</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 - Shop Icons */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop Icons</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Lifestyle</Link></li>
                      <li><Link href="#">Air Force 1</Link></li>
                      <li><Link href="#">Air Jordan 1</Link></li>
                      <li><Link href="#">Air Max</Link></li>
                      <li><Link href="#">Dunk</Link></li>
                      <li><Link href="#">Cortez</Link></li>
                      <li><Link href="#">Blazer</Link></li>
                      <li><Link href="#">Pegasus</Link></li>
                      <li><Link href="#">Vomero</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 - Shop By Sport */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop By Sport</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Running</Link></li>
                      <li><Link href="#">Basketball</Link></li>
                      <li><Link href="#">Football</Link></li>
                      <li><Link href="#">Golf</Link></li>
                      <li><Link href="#">Tennis</Link></li>
                      <li><Link href="#">Gym and Training</Link></li>
                      <li><Link href="#">Yoga</Link></li>
                      <li><Link href="#">Skateboarding</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="relative group">
            <Link href="/sale" className="py-20 hover:text-gray-600 transition-colors">
              Sale
            </Link>

            {/* Dropdown New & Featured */}
              <div className="fixed left-0 top-23 bg-white shadow-xl border w-screen p-6 z-50
                opacity-0 translate-y-[-20px] 
                transition-all duration-500 ease-out
                pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Column 1 - Featured */}
                  <div>
                    <h4 className="font-semibold mb-2">Featured</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">New & Upcoming Drops</Link></li>
                      <li><Link href="#">New Arrivals</Link></li>
                      <li><Link href="#">Bestsellers</Link></li>
                      <li><Link href="#">Member Exclusive</Link></li>
                      <li><Link href="#">Customise with Nike By You</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Jordan</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 - Trending */}
                  <div>
                    <h4 className="font-semibold mb-2">Trending</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Summer Essentials</Link></li>
                      <li><Link href="#">Structure 26 - Run Supported</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Nike 24.7</Link></li>
                      <li><Link href="#">Colours of the Season: Earth Tones</Link></li>
                      <li><Link href="#">Retro Running</Link></li>
                      <li><Link href="#">Running Shoe Finder</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 - Shop Icons */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop Icons</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Lifestyle</Link></li>
                      <li><Link href="#">Air Force 1</Link></li>
                      <li><Link href="#">Air Jordan 1</Link></li>
                      <li><Link href="#">Air Max</Link></li>
                      <li><Link href="#">Dunk</Link></li>
                      <li><Link href="#">Cortez</Link></li>
                      <li><Link href="#">Blazer</Link></li>
                      <li><Link href="#">Pegasus</Link></li>
                      <li><Link href="#">Vomero</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 - Shop By Sport */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop By Sport</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Running</Link></li>
                      <li><Link href="#">Basketball</Link></li>
                      <li><Link href="#">Football</Link></li>
                      <li><Link href="#">Golf</Link></li>
                      <li><Link href="#">Tennis</Link></li>
                      <li><Link href="#">Gym and Training</Link></li>
                      <li><Link href="#">Yoga</Link></li>
                      <li><Link href="#">Skateboarding</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="relative group">
            <Link href="/snkrs" className="py-20 hover:text-gray-600 transition-colors">
              SNKRS
            </Link>

            {/* Dropdown New & Featured */}
              <div className="fixed left-0 top-23 bg-white shadow-xl border w-screen p-6 z-50
                opacity-0 translate-y-[-20px] 
                transition-all duration-500 ease-out
                pointer-events-none
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Column 1 - Featured */}
                  <div>
                    <h4 className="font-semibold mb-2">Featured</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">New & Upcoming Drops</Link></li>
                      <li><Link href="#">New Arrivals</Link></li>
                      <li><Link href="#">Bestsellers</Link></li>
                      <li><Link href="#">Member Exclusive</Link></li>
                      <li><Link href="#">Customise with Nike By You</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Jordan</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 - Trending */}
                  <div>
                    <h4 className="font-semibold mb-2">Trending</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Summer Essentials</Link></li>
                      <li><Link href="#">Structure 26 - Run Supported</Link></li>
                      <li><Link href="#">What's Trending</Link></li>
                      <li><Link href="#">Nike 24.7</Link></li>
                      <li><Link href="#">Colours of the Season: Earth Tones</Link></li>
                      <li><Link href="#">Retro Running</Link></li>
                      <li><Link href="#">Running Shoe Finder</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 - Shop Icons */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop Icons</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Lifestyle</Link></li>
                      <li><Link href="#">Air Force 1</Link></li>
                      <li><Link href="#">Air Jordan 1</Link></li>
                      <li><Link href="#">Air Max</Link></li>
                      <li><Link href="#">Dunk</Link></li>
                      <li><Link href="#">Cortez</Link></li>
                      <li><Link href="#">Blazer</Link></li>
                      <li><Link href="#">Pegasus</Link></li>
                      <li><Link href="#">Vomero</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 - Shop By Sport */}
                  <div>
                    <h4 className="font-semibold mb-2">Shop By Sport</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Running</Link></li>
                      <li><Link href="#">Basketball</Link></li>
                      <li><Link href="#">Football</Link></li>
                      <li><Link href="#">Golf</Link></li>
                      <li><Link href="#">Tennis</Link></li>
                      <li><Link href="#">Gym and Training</Link></li>
                      <li><Link href="#">Yoga</Link></li>
                      <li><Link href="#">Skateboarding</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            
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
