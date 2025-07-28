"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import Image from "next/image"
import { Link, Trash2 } from "lucide-react"
const wishlist = [
  {
    id: "1",
    name: "Nike Air Max 90",
    category: "Men's Shoes",
    price: "$120",
    image: "/placeholder.svg"
  },
  
]

export default function WishlistPage() {
  const [message, setMessage] = useState("")
  const router = useRouter()

  const getWishlist = async () => {
    // try {
    //   const response = await fetch("http://127.0.0.1:8000/customer/wishlist", {
    //     headers: {
    //       Authorization: "Bearer your-token-if-needed"
    //     }
    //   })
    //   const data = await response.json()
    // } catch (error) {
    //   setMessage("Không thể tải danh sách yêu thích")
    //   console.error(error)
    // }
  }

  const removeFromWishlist = async (productId: string) => {
    // try {
    //   await fetch(`http://127.0.0.1:8000/customer/wishlist/${productId}`, {
    //     method: "DELETE",
    //     headers: {
    //       Authorization: "Bearer your-token-if-needed"
    //     }
    //   })
    //   setWishlist(prev => prev.filter(p => p.id !== productId))
    // } catch (err) {
    //   console.error("Lỗi xoá khỏi wishlist:", err)
    // }
  }

  useEffect(() => {
    getWishlist()
  }, [])

  return (
  <div className="min-h-screen bg-white">
    <Header />

    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Danh sách yêu thích</h1>

      {message && <p className="text-red-500">{message}</p>}

      {wishlist.length === 0 ? (
        <p>Danh sách trống. Hãy thêm vài sản phẩm bạn thích ❤️</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((product: any) => (
            <div
              key={product.id}
              className="relative border rounded-xl overflow-hidden group shadow hover:shadow-lg transition"
            >
              {/* Icon trái tim để xoá */}
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 hover:text-red-500 transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>

              {/* Ảnh sản phẩm */}
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-[300px] object-cover"
              />

              {/* Thông tin sản phẩm */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-base font-medium mt-1">{product.price}</p>

                {/* Nút thêm vào giỏ */}
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => addToCart(product)}
                >
                  Add to Bag
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
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
   
);

}
