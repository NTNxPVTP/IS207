import Image from "next/image"

interface Product {
  id: string
  name: string
  category: string
  price: string
  originalPrice?: string
  image: string
  isNew?: boolean
  isSale?: boolean
}

interface ProductGridProps {
  products: Product[]
  title?: string
}

export function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {title && <h2 className="text-2xl font-bold mb-8">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs font-medium rounded">
                  New
                </span>
              )}
              {product.isSale && (
                <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-medium rounded">
                  Sale
                </span>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.category}</p>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
