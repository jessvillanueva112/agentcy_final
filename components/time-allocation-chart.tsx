"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Direct Student Support", value: 35, color: "#10b981" },
  { name: "Documentation", value: 25, color: "#f59e0b" },
  { name: "Coordination with Providers", value: 15, color: "#e11d48" },
  { name: "Parent Communication", value: 10, color: "#ec4899" },
  { name: "Teacher Consultation", value: 10, color: "#8b5cf6" },
  { name: "Administrative Tasks", value: 5, color: "#94a3b8" },
]

export function TimeAllocationChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
      </PieChart>
    </ResponsiveContainer>
  )
}
