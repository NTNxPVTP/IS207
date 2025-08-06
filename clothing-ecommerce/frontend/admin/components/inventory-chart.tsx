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

type ProductItem = {
  product: string
  stock: number
}

type CategoryItem = {
  // backend format bạn mô tả:
  // { category: "Quần áo", products: [...], total_quantity: 170 }
  category: string // hoặc 'name' tuỳ bạn gửi key là gì, ở đây mình dùng 'category'
  products: ProductItem[]
  total_quantity: number
}

type InventoryChartProps = {
  filter?: string
  data: CategoryItem[]
}

export function InventoryChart({ filter, data }: InventoryChartProps) {

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          formatter={(value, name) => [value, name === "total_quantity" ? "Total Quantity" : "Total Value"]}
          labelStyle={{ color: "#000" }}
        />
        <Bar dataKey="total_quantity" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        {/* <Bar dataKey="total_value" fill="#ef4444" radius={[4, 4, 0, 0]} /> */}
      </BarChart>
    </ResponsiveContainer>
  )
}
