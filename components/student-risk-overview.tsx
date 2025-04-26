"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    category: "Academic",
    high: 12,
    medium: 18,
    low: 35,
  },
  {
    category: "Mental Health",
    high: 18,
    medium: 24,
    low: 27,
  },
  {
    category: "Behavioral",
    high: 8,
    medium: 15,
    low: 42,
  },
  {
    category: "Social",
    high: 6,
    medium: 22,
    low: 38,
  },
  {
    category: "Family",
    high: 14,
    medium: 19,
    low: 32,
  },
]

export function StudentRiskOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} stackOffset="expand">
        <XAxis dataKey="category" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Bar dataKey="high" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
        <Bar dataKey="medium" stackId="a" fill="#f59e0b" radius={0} />
        <Bar dataKey="low" stackId="a" fill="#10b981" radius={0} />
      </BarChart>
    </ResponsiveContainer>
  )
}
