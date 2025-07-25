"use client"
import { Header } from "@/components/header"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"
import { FilterSidebar } from "@/components/filter-sidebar"
import { useEffect, useState } from "react"
const jordanProducts = [
  {
    id: "1",
    name: "Air Jordan 1 Retro High OG",
    category: "Men's Shoes",
    price: "$170",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "2",
    name: "Air Jordan 4 Retro",
    category: "Men's Shoes",
    price: "$210",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Jordan Jumpman Logo T-Shirt",
    category: "Men's T-Shirt",
    price: "$35",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "4",
    name: "Air Jordan 11 Retro",
    category: "Men's Shoes",
    price: "$220",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "5",
    name: "Jordan Flight Fleece Hoodie",
    category: "Men's Hoodie",
    price: "$90",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "6",
    name: "Air Jordan 3 Retro",
    category: "Men's Shoes",
    price: "$200",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "7",
    name: "Jordan Dri-FIT Sport Shorts",
    category: "Men's Shorts",
    price: "$50",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "8",
    name: "Air Jordan 12 Retro",
    category: "Men's Shoes",
    price: "$200",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function JordanPage() {
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
        title="JORDAN"
        subtitle="Greatness Never Stops"
        description="Iconic basketball heritage meets modern performance"
        image="/placeholder.svg?height=500&width=1200"
      />

      <div className="flex">
        <FilterSidebar />
        <div className="flex-1">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Jordan Shoes & Clothing ({jordanProducts.length})</h2>
              <select className="border rounded px-3 py-2">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: High-Low</option>
                <option>Price: Low-High</option>
              </select>
            </div>
          </div>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  )
}
