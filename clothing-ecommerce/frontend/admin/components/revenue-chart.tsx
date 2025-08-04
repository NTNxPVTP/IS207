"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type RevenueChartProps = {
  filter: string
  data: {
    label: string
    total: number
  }[]
}

export function RevenueChart({ filter, data }: RevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="label" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} labelStyle={{ color: "#000" }} />
        <Line type="monotone" dataKey="total" stroke="#adfa1d" strokeWidth={2} dot={{ fill: "#adfa1d" }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
