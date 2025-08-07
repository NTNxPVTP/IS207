"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type ProductItem = {
  product: string
  stock: number
}

type CategoryItem = {
  category: string
  products: ProductItem[]
  total_quantity: number
}

type InventoryChartProps = {
  filter?: string
  data: CategoryItem[]
}

export function InventoryChart({ filter = "all", data }: InventoryChartProps) {
  // Dữ liệu hiển thị lên biểu đồ
  let chartData: any[] = []

  if (filter === "all") {
    // Hiển thị tổng tồn kho của từng danh mục
    chartData = data.map(item => ({
      name: item.category,
      total_quantity: item.total_quantity
    }))
  } else {
    // Tìm danh mục được chọn
    const selectedCategory = data.find(item => item.category === filter)
    if (selectedCategory) {
      chartData = selectedCategory.products.map(product => ({
        name: product.product,
        stock: product.stock
      }))
    }
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          formatter={(value, name) => [value, name === "total_quantity" ? "Total Quantity" : "Stock"]}
          labelStyle={{ color: "#000" }}
        />
        <Bar
          dataKey={filter === "all" ? "total_quantity" : "stock"}
          fill="#adfa1d"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
