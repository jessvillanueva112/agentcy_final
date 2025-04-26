import type React from "react"
import type { HTMLAttributes } from "react"

interface DashboardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, text, children, ...props }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2 pb-4" {...props}>
      <div className="grid gap-1">
        <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
        {text && <p className="text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  )
}
