"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

const initialCart = [
  {
    id: "1",
    name: "Nike Air Force 1",
    category: "Men's Shoes",
    price: 100,
    quantity: 1,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Nike Dunk Low",
    category: "Women's Shoes",
    price: 110,
    quantity: 2,
    image: "/placeholder.svg"
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart)
  const router = useRouter()

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Giỏ hàng của bạn</h1>

        {cartItems.length === 0 ? (
          <p>Không có sản phẩm nào trong giỏ hàng.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Danh sách sản phẩm */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                  <Image src={item.image} alt={item.name} width={120} height={120} className="rounded-lg" />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="mt-1 font-medium">${item.price} x {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Tóm tắt thanh toán */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Tóm tắt đơn hàng</h2>
              <div className="flex justify-between mb-2">
                <span>Tạm tính</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Tổng cộng</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>

              <Button className="w-full mb-4">Thanh toán</Button>
              <Button variant="outline" className="w-full" onClick={() => router.push("/")}>
                Tiếp tục mua sắm
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
