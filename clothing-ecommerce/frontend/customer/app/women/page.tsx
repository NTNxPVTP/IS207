import { Header } from "@/components/header"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"
import { FilterSidebar } from "@/components/filter-sidebar"

const womenProducts = [
  {
    id: "1",
    name: "Nike Air Max 270",
    category: "Women's Shoes",
    price: "$150",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "2",
    name: "Nike Yoga Luxe Leggings",
    category: "Women's Leggings",
    price: "$90",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Nike Dri-FIT Sports Bra",
    category: "Women's Sports Bra",
    price: "$50",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "4",
    name: "Nike Air Force 1 Shadow",
    category: "Women's Shoes",
    price: "$120",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "5",
    name: "Nike Swoosh Medium-Support Bra",
    category: "Women's Sports Bra",
    price: "$40",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "6",
    name: "Nike Pro 365 Shorts",
    category: "Women's Shorts",
    price: "$35",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "7",
    name: "Nike React Infinity Run Flyknit 3",
    category: "Women's Running Shoe",
    price: "$160",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "8",
    name: "Nike Therma-FIT Hoodie",
    category: "Women's Hoodie",
    price: "$85",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function WomenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <CategoryHero
        title="WOMEN"
        subtitle="Move to Zero"
        description="Discover sustainable women's athletic wear designed for performance"
        image="/placeholder.svg?height=500&width=1200"
      />

      <div className="flex">
        <FilterSidebar />
        <div className="flex-1">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Women's Shoes & Clothing ({womenProducts.length})</h2>
              <select className="border rounded px-3 py-2">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: High-Low</option>
                <option>Price: Low-High</option>
              </select>
            </div>
          </div>
          <ProductGrid products={womenProducts} />
        </div>
      </div>
    </div>
  )
}
