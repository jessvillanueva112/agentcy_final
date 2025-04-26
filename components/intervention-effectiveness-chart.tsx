"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Individual Counseling",
    improvement: 78,
    engagement: 85,
  },
  {
    name: "Group Therapy",
    improvement: 65,
    engagement: 72,
  },
  {
    name: "Family Support",
    improvement: 82,
    engagement: 68,
  },
  {
    name: "Academic Support",
    improvement: 70,
    engagement: 75,
  },
  {
    name: "Peer Mentoring",
    improvement: 60,
    engagement: 90,
  },
]

export function InterventionEffectivenessChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
        <Tooltip />
        <Legend />
        <Bar dataKey="improvement" name="Outcome Improvement" fill="#10b981" radius={[4, 4, 0, 0]} />
        <Bar dataKey="engagement" name="Student Engagement" fill="#e11d48" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
