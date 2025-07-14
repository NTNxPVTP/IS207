"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const dailyData = [
  { name: "Mon", revenue: 2400 },
  { name: "Tue", revenue: 1398 },
  { name: "Wed", revenue: 9800 },
  { name: "Thu", revenue: 3908 },
  { name: "Fri", revenue: 4800 },
  { name: "Sat", revenue: 3800 },
  { name: "Sun", revenue: 4300 },
]

const monthlyData = [
  { name: "Jan", revenue: 45000 },
  { name: "Feb", revenue: 52000 },
  { name: "Mar", revenue: 48000 },
  { name: "Apr", revenue: 61000 },
  { name: "May", revenue: 55000 },
  { name: "Jun", revenue: 67000 },
]

const categoryData = [
  { name: "T-Shirts", revenue: 25000 },
  { name: "Jeans", revenue: 18000 },
  { name: "Dresses", revenue: 12000 },
  { name: "Shoes", revenue: 15000 },
  { name: "Accessories", revenue: 8000 },
]

export function RevenueChart({ filter }: { filter: string }) {
  const getData = () => {
    switch (filter) {
      case "day":
        return dailyData
      case "month":
        return monthlyData
      case "category":
        return categoryData
      default:
        return monthlyData
    }
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={getData()}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} labelStyle={{ color: "#000" }} />
        <Line type="monotone" dataKey="revenue" stroke="#adfa1d" strokeWidth={2} dot={{ fill: "#adfa1d" }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
