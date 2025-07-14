"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const allCategoriesData = [
  { name: "T-Shirts", stock: 150, lowStock: 23 },
  { name: "Jeans", stock: 75, lowStock: 12 },
  { name: "Dresses", stock: 90, lowStock: 8 },
  { name: "Shoes", stock: 120, lowStock: 15 },
  { name: "Accessories", stock: 200, lowStock: 30 },
]

const tShirtsData = [
  { name: "White", stock: 50, lowStock: 8 },
  { name: "Black", stock: 45, lowStock: 7 },
  { name: "Blue", stock: 30, lowStock: 5 },
  { name: "Red", stock: 25, lowStock: 3 },
]

export function InventoryChart({ filter }: { filter: string }) {
  const getData = () => {
    switch (filter) {
      case "t-shirts":
        return tShirtsData
      case "all":
      default:
        return allCategoriesData
    }
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={getData()}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          formatter={(value, name) => [value, name === "stock" ? "In Stock" : "Low Stock"]}
          labelStyle={{ color: "#000" }}
        />
        <Bar dataKey="stock" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="lowStock" fill="#ef4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
