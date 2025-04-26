"use client"

import * as React from "react"
import { AlertTriangle, Bell, Check, Clock, MessageSquare, X } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

type SOSAlert = {
  id: string
  studentId: string
  studentName: string
  avatar: string
  teacherName: string
  teacherAvatar: string
  message: string
  location: string
  timestamp: string
  status: "new" | "acknowledged" | "resolved"
}

export function SOSAlerts() {
  const [alerts, setAlerts] = React.useState<SOSAlert[]>([
    {
      id: "sos-1",
      studentId: "1",
      studentName: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      teacherName: "Ms. Rodriguez",
      teacherAvatar: "/placeholder.svg?height=40&width=40",
      message: "Emma is having a panic attack in class. Needs immediate assistance.",
      location: "Room 203 - English Class",
      timestamp: "2025-04-25T10:15:00",
      status: "new",
    },
    {
      id: "sos-2",
      studentId: "3",
      studentName: "Olivia Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      teacherName: "Mr. Johnson",
      teacherAvatar: "/placeholder.svg?height=40&width=40",
      message: "Olivia mentioned feeling suicidal during class discussion. Please come right away.",
      location: "Room 105 - History Class",
      timestamp: "2025-04-25T09:30:00",
      status: "acknowledged",
    },
  ])

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)

    if (diffMins < 1) {
      return "Just now"
    } else if (diffMins < 60) {
      return `${diffMins} min ago`
    } else {
      const diffHours = Math.floor(diffMins / 60)
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`
    }
  }

  const handleAcknowledge = (alertId: string) => {
    setAlerts((prev) =>
      prev.map((alert) => (alert.id === alertId ? { ...alert, status: "acknowledged" as const } : alert)),
    )

    toast({
      title: "Alert acknowledged",
      description: "You have acknowledged this SOS alert",
      duration: 3000,
    })
  }

  const handleResolve = (alertId: string) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === alertId ? { ...alert, status: "resolved" as const } : alert)))

    toast({
      title: "Alert resolved",
      description: "You have marked this SOS alert as resolved",
      duration: 3000,
    })
  }

  const handleDismiss = (alertId: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== alertId))

    toast({
      title: "Alert dismissed",
      description: "You have dismissed this SOS alert",
      duration: 3000,
    })
  }

  return (
    <Card>
      <CardHeader className="bg-red-50 border-b">
        <CardTitle className="flex items-center text-red-700">
          <AlertTriangle className="mr-2 h-5 w-5" />
          SOS Alerts
        </CardTitle>
        <CardDescription className="text-red-600">Urgent assistance requests from teachers</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {alerts.length === 0 ? (
          <div className="p-6 text-center text-muted-foreground">
            <Bell className="mx-auto h-8 w-8 mb-2 text-muted-foreground/50" />
            <p>No active SOS alerts</p>
          </div>
        ) : (
          <div className="divide-y">
            {alerts
              .sort((a, b) => {
                // Sort by status (new first, then acknowledged, then resolved)
                if (a.status !== b.status) {
                  if (a.status === "new") return -1
                  if (b.status === "new") return 1
                  if (a.status === "acknowledged") return -1
                  if (b.status === "acknowledged") return 1
                }
                // Then sort by timestamp (newest first)
                return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
              })
              .map((alert) => (
                <div key={alert.id} className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={alert.studentAvatar || "/placeholder.svg"} alt={alert.studentName} />
                      <AvatarFallback>
                        {alert.studentName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{alert.studentName}</div>
                        <div className="flex items-center">
                          {alert.status === "new" && <Badge variant="destructive">New</Badge>}
                          {alert.status === "acknowledged" && (
                            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                              Acknowledged
                            </Badge>
                          )}
                          {alert.status === "resolved" && (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Resolved
                            </Badge>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 ml-1"
                            onClick={() => handleDismiss(alert.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm mt-1">{alert.message}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-2">
                        <div className="flex items-center mr-4">
                          <Avatar className="h-5 w-5 mr-1">
                            <AvatarImage src={alert.teacherAvatar || "/placeholder.svg"} alt={alert.teacherName} />
                            <AvatarFallback>
                              {alert.teacherName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{alert.teacherName}</span>
                        </div>
                        <div className="flex items-center mr-4">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{formatTimeAgo(alert.timestamp)}</span>
                        </div>
                        <div className="flex items-center">
                          <span>{alert.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        {alert.status === "new" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs"
                            onClick={() => handleAcknowledge(alert.id)}
                          >
                            <Check className="mr-1 h-3 w-3" />
                            Acknowledge
                          </Button>
                        )}
                        {(alert.status === "new" || alert.status === "acknowledged") && (
                          <Button
                            size="sm"
                            variant="default"
                            className="text-xs"
                            onClick={() => handleResolve(alert.id)}
                          >
                            <Check className="mr-1 h-3 w-3" />
                            Mark as Resolved
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs"
                          onClick={() => {
                            toast({
                              title: `Messaging ${alert.teacherName}`,
                              description: "Opening message thread",
                              duration: 3000,
                            })
                          }}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" />
                          Message Teacher
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t p-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            toast({
              title: "SOS Alert Settings",
              description: "Configure SOS alert notifications and responses",
              duration: 3000,
            })
          }}
        >
          Configure Alert Settings
        </Button>
      </CardFooter>
    </Card>
  )
}
