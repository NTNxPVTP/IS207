"use client"

import { Header } from "@/components/header"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"
import { FilterSidebar } from "@/components/filter-sidebar"
import { useEffect, useState } from "react"
const newProducts = [
  {
    id: "1",
    name: "Nike Air Max Plus",
    category: "Men's Shoes",
    price: "$170",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "2",
    name: "Nike Dri-FIT ADV Run Division",
    category: "Men's Running Top",
    price: "$85",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "3",
    name: "Nike Air Zoom Pegasus 40",
    category: "Women's Running Shoe",
    price: "$130",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "4",
    name: "Nike Therma-FIT ADV Jacket",
    category: "Men's Jacket",
    price: "$150",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "5",
    name: "Nike InfinityRN 4",
    category: "Women's Road Running Shoes",
    price: "$160",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "6",
    name: "Nike Pro Dri-FIT Flex Vent Max",
    category: "Men's Shorts",
    price: "$65",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "7",
    name: "Nike Yoga Dri-FIT Indy",
    category: "Women's Light-Support Sports Bra",
    price: "$40",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "8",
    name: "Nike Air Max 1 '87",
    category: "Men's Shoes",
    price: "$140",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
]

export default function NewFeaturedPage() {
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
        title="NEW & FEATURED"
        subtitle="Latest Drops"
        description="Discover the newest Nike innovations and featured collections"
        image="/placeholder.svg?height=500&width=1200"
      />

      <div className="flex">
        <FilterSidebar />
        <div className="flex-1">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">New & Featured ({newProducts.length})</h2>
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
