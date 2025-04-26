"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    category: "Anxiety",
    count: 42,
  },
  {
    category: "Depression",
    count: 38,
  },
  {
    category: "Academic",
    count: 65,
  },
  {
    category: "Family",
    count: 35,
  },
  {
    category: "Behavioral",
    count: 28,
  },
  {
    category: "Social",
    count: 45,
  },
  {
    category: "Substance",
    count: 12,
  },
  {
    category: "Trauma",
    count: 22,
  },
]

export function StudentDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="category" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="count" fill="#e11d48" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
