import { Header } from "@/components/header"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"
import { FilterSidebar } from "@/components/filter-sidebar"

const saleProducts = [
  {
    id: "1",
    name: "Nike Air Max 90",
    category: "Men's Shoes",
    price: "$84",
    originalPrice: "$120",
    image: "/placeholder.svg?height=400&width=400",
    isSale: true,
  },
  {
    id: "2",
    name: "Nike Dri-FIT T-Shirt",
    category: "Men's Top",
    price: "$24",
    originalPrice: "$35",
    image: "/placeholder.svg?height=400&width=400",
    isSale: true,
  },
  {
    id: "3",
    name: "Nike Yoga Luxe Leggings",
    category: "Women's Leggings",
    price: "$63",
    originalPrice: "$90",
    image: "/placeholder.svg?height=400&width=400",
    isSale: true,
  },
  {
    id: "4",
    name: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    price: "$77",
    originalPrice: "$110",
    image: "/placeholder.svg?height=400&width=400",
    isSale: true,
  },
  {
    id: "5",
    name: "Nike Pro Shorts",
    category: "Men's Shorts",
    price: "$28",
    originalPrice: "$40",
    image: "/placeholder.svg?height=400&width=400",
    isSale: true,
  },
  {
    id: "6",
    name: "Nike Sportswear Club Hoodie",
    category: "Women's Hoodie",
    price: "$59",
    originalPrice: "$85",
    image: "/placeholder.svg?height=400&width=400",
    isSale: true,
  },
  {
    id: "7",
    name: "Nike Revolution 6",
    category: "Kids' Shoes",
    price: "$38",
    originalPrice: "$55",
    image: "/placeholder.svg?height=400&width=400",
    isSale: true,
  },
  {
    id: "8",
    name: "Nike Tech Fleece Joggers",
    category: "Men's Pants",
    price: "$70",
    originalPrice: "$100",
    image: "/placeholder.svg?height=400&width=400",
    isSale: true,
  },
]

export default function SalePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <CategoryHero
        title="SALE"
        subtitle="Up to 40% Off"
        description="Don't miss out on these limited-time deals"
        image="/placeholder.svg?height=500&width=1200"
        ctaText="Shop Sale"
      />

      <div className="flex">
        <FilterSidebar />
        <div className="flex-1">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Sale Items ({saleProducts.length})</h2>
              <select className="border rounded px-3 py-2">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: High-Low</option>
                <option>Price: Low-High</option>
                <option>Discount %</option>
              </select>
            </div>
          </div>
          <ProductGrid products={saleProducts} />
        </div>
      </div>
    </div>
  )
}
