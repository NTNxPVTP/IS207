import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function FilterSidebar() {
  return (
    <div className="w-64 p-6 border-r bg-white">
      <h3 className="font-bold text-lg mb-6">Filter</h3>

      {/* Category Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Category</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="shoes" />
            <label htmlFor="shoes" className="text-sm">
              Shoes
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="clothing" />
            <label htmlFor="clothing" className="text-sm">
              Clothing
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="accessories" />
            <label htmlFor="accessories" className="text-sm">
              Accessories
            </label>
          </div>
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Size</h4>
        <div className="grid grid-cols-3 gap-2">
          {["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"].map((size) => (
            <Button key={size} variant="outline" size="sm" className="h-10 bg-transparent">
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Price</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="under50" />
            <label htmlFor="under50" className="text-sm">
              Under $50
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="50to100" />
            <label htmlFor="50to100" className="text-sm">
              $50 - $100
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="100to150" />
            <label htmlFor="100to150" className="text-sm">
              $100 - $150
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="over150" />
            <label htmlFor="over150" className="text-sm">
              Over $150
            </label>
          </div>
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Color</h4>
        <div className="grid grid-cols-6 gap-2">
          {["bg-black", "bg-white", "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"].map(
            (color, index) => (
              <button key={index} className={`w-8 h-8 rounded-full border-2 border-gray-300 ${color}`} />
            ),
          )}
        </div>
      </div>
    </div>
  )
}
