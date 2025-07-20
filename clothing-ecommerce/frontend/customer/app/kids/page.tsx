import { Header } from "@/components/header"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"
import { FilterSidebar } from "@/components/filter-sidebar"

const kidsProducts = [
  {
    id: "1",
    name: "Nike Air Max SC",
    category: "Kids' Shoes",
    price: "$60",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "2",
    name: "Nike Dri-FIT T-Shirt",
    category: "Kids' Top",
    price: "$25",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Nike Revolution 6",
    category: "Kids' Running Shoe",
    price: "$55",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "4",
    name: "Nike Sportswear Club Fleece",
    category: "Kids' Hoodie",
    price: "$45",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "5",
    name: "Nike Court Borough Low 2",
    category: "Kids' Shoes",
    price: "$50",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "6",
    name: "Nike Dri-FIT Shorts",
    category: "Kids' Shorts",
    price: "$30",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "7",
    name: "Nike Air Force 1 LE",
    category: "Kids' Shoes",
    price: "$75",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "8",
    name: "Nike Sportswear Joggers",
    category: "Kids' Pants",
    price: "$40",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function KidsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <CategoryHero
        title="KIDS"
        subtitle="Play Every Day"
        description="Keep kids active with comfortable, durable athletic wear"
        image="/placeholder.svg?height=500&width=1200"
      />

      <div className="flex">
        <FilterSidebar />
        <div className="flex-1">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Kids' Shoes & Clothing ({kidsProducts.length})</h2>
              <select className="border rounded px-3 py-2">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: High-Low</option>
                <option>Price: Low-High</option>
              </select>
            </div>
          </div>
          <ProductGrid products={kidsProducts} />
        </div>
      </div>
    </div>
  )
}
