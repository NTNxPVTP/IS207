"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";

type FilterSidebarProps = {
  onFilterChange: (filters: { categories: string[]; prices: number[][] }) => void;
};

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<number[][]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const togglePrice = (priceRange: number[]) => {
    setSelectedPrices((prev) =>
      prev.some((p) => p[0] === priceRange[0] && p[1] === priceRange[1])
        ? prev.filter((p) => p[0] !== priceRange[0] || p[1] !== priceRange[1])
        : [...prev, priceRange]
    );
  };

  useEffect(() => {
    onFilterChange({
      categories: selectedCategories,
      prices: selectedPrices,
    });
  }, [selectedCategories, selectedPrices, onFilterChange]);

  return (
    <div className="w-64 p-6 border-r bg-white">
      <h3 className="font-bold text-lg mb-6">Filter</h3>

      {/* Category Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Category</h4>
        <div className="space-y-3">
          {["Shoes", "Clothing", "Accessories"].map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox
                id={cat}
                checked={selectedCategories.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <label htmlFor={cat} className="text-sm">
                {cat}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Price</h4>
        <div className="space-y-3">
          {[
            { id: "under50", label: "Under $50", range: [0, 50] },
            { id: "50to100", label: "$50 - $100", range: [50, 100] },
            { id: "100to150", label: "$100 - $150", range: [100, 150] },
            { id: "over150", label: "Over $150", range: [150, Infinity] },
          ].map((p) => (
            <div key={p.id} className="flex items-center space-x-2">
              <Checkbox
                id={p.id}
                checked={selectedPrices.some(
                  (range) => range[0] === p.range[0] && range[1] === p.range[1]
                )}
                onCheckedChange={() => togglePrice(p.range)}
              />
              <label htmlFor={p.id} className="text-sm">
                {p.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
