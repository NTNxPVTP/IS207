import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CategoryHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  ctaText?: string
}

export function CategoryHero({ title, subtitle, description, image, ctaText = "Shop Now" }: CategoryHeroProps) {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4">{title}</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">{subtitle}</h2>
          <p className="text-lg mb-8 opacity-90">{description}</p>
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full">
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  )
}
