"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    factor: "Family Disruption",
    correlation: 0.78,
    interventionSuccess: 0.65,
  },
  {
    factor: "Academic Struggles",
    correlation: 0.65,
    interventionSuccess: 0.72,
  },
  {
    factor: "Peer Conflict",
    correlation: 0.58,
    interventionSuccess: 0.68,
  },
  {
    factor: "Substance Use",
    correlation: 0.82,
    interventionSuccess: 0.45,
  },
  {
    factor: "Mental Health History",
    correlation: 0.75,
    interventionSuccess: 0.62,
  },
  {
    factor: "Trauma History",
    correlation: 0.85,
    interventionSuccess: 0.55,
  },
  {
    factor: "Social Isolation",
    correlation: 0.68,
    interventionSuccess: 0.7,
  },
]

export function RiskFactorAnalysis() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis
          dataKey="factor"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toFixed(1)}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="correlation" stroke="#e11d48" strokeWidth={2} name="Risk Correlation" />
        <Line
          type="monotone"
          dataKey="interventionSuccess"
          stroke="#10b981"
          strokeWidth={2}
          name="Intervention Success"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
