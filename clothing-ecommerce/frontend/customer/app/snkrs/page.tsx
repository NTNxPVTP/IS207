"use client"

import { Header } from "@/components/header"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const snkrsProducts = [
  {
    id: "1",
    name: "Air Jordan 1 Retro High OG 'Chicago'",
    category: "Men's Shoes",
    price: "$170",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "2",
    name: "Nike Dunk Low 'Panda'",
    category: "Men's Shoes",
    price: "$110",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Air Jordan 4 Retro 'Black Cat'",
    category: "Men's Shoes",
    price: "$210",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "4",
    name: "Nike Air Max 1 '86 'Big Bubble'",
    category: "Men's Shoes",
    price: "$140",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "5",
    name: "Air Jordan 11 Retro 'Bred'",
    category: "Men's Shoes",
    price: "$220",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "6",
    name: "Nike SB Dunk Low 'Travis Scott'",
    category: "Men's Shoes",
    price: "$150",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function SNKRSPage() {
  const [products, setProducts] = useState([]);
      const [message, setMessage] = useState("");
    
      const getProduct = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8000/customer/product");
          const data = await response.json();
          console.log("Dữ liệu từ API:", data);
          setProducts(data);
        } catch (error) {
          console.error("Lỗi gọi API:", error);
          setMessage("Có lỗi xảy ra!");
        }
      };
    
      useEffect(() => {
        getProduct();
      }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <CategoryHero
        title="SNKRS"
        subtitle="Got 'Em"
        description="Your gateway to the latest sneaker drops and exclusive releases"
        image="/placeholder.svg?height=500&width=1200"
      />

      {/* SNKRS Features */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">!</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Exclusive Access</h3>
            <p className="text-gray-600">Get first access to the latest sneaker drops</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">⚡</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Quick checkout for limited releases</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">🏆</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Member Benefits</h3>
            <p className="text-gray-600">Special perks for SNKRS members</p>
          </div>
        </div>
      </section>

      {/* Upcoming Drops */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Upcoming Drops</h2>
          <Button variant="outline">View Calendar</Button>
        </div>
        <div className="bg-gray-100 rounded-lg p-8 text-center mb-12">
          <h3 className="text-xl font-bold mb-2">Next Drop</h3>
          <p className="text-gray-600 mb-4">Air Jordan 1 Retro High OG 'Chicago'</p>
          <p className="text-2xl font-bold mb-4">Tomorrow at 10:00 AM EST</p>
          <Button className="bg-black text-white hover:bg-gray-800">Set Reminder</Button>
        </div>
      </section>

      {/* Available Now */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Available Now</h2>
          <select className="border rounded px-3 py-2">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: High-Low</option>
            <option>Price: Low-High</option>
          </select>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
