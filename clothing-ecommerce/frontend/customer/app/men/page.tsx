"use client"

import { Header } from "@/components/header"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"
import { FilterSidebar } from "@/components/filter-sidebar"
import { useEffect, useState } from "react"


const menProducts = [
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
    name: "Nike Air Max 90",
    category: "Men's Shoes",
    price: "$120",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Nike Dri-FIT T-Shirt",
    category: "Men's Top",
    price: "$35",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "4",
    name: "Nike Tech Fleece Hoodie",
    category: "Men's Hoodie",
    price: "$110",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "5",
    name: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    price: "$110",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "6",
    name: "Nike Pro Shorts",
    category: "Men's Shorts",
    price: "$40",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "7",
    name: "Nike React Infinity Run",
    category: "Men's Running Shoe",
    price: "$160",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "8",
    name: "Nike Sportswear Club Joggers",
    category: "Men's Pants",
    price: "$60",
    image: "/placeholder.svg?height=400&width=400",
  },
]
export default function MenPage() {
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
        title="MEN"
        subtitle="Just Do It"
        description="Gear up with the latest men's athletic wear, shoes, and accessories"
        image="/placeholder.svg?height=500&width=1200"
      />

      <div className="flex">
        <FilterSidebar />
        <div className="flex-1">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Men's Shoes & Clothing ({products.length})
              </h2>
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
  );
}


// export default function MenPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <CategoryHero
//         title="MEN"
//         subtitle="Just Do It"
//         description="Gear up with the latest men's athletic wear, shoes, and accessories"
//         image="/placeholder.svg?height=500&width=1200"
//       />

//       <div className="flex">
//         <FilterSidebar />
//         <div className="flex-1">
//           <div className="p-6 border-b">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-bold">Men's Shoes & Clothing ({menProducts.length})</h2>
//               <select className="border rounded px-3 py-2">
//                 <option>Featured</option>
//                 <option>Newest</option>
//                 <option>Price: High-Low</option>
//                 <option>Price: Low-High</option>
//               </select>
//             </div>
//           </div>
//           <ProductGrid products={menProducts} />
//         </div>
//       </div>
//     </div>
//   )
// }
