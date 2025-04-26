import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  )
}
