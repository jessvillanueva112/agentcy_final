"use client"

import { AlertTriangle, Calendar, Check, FileText, MessageSquare, X } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface NotificationCenterProps {
  onClose: () => void
}

export function NotificationCenter({ onClose }: NotificationCenterProps) {
  const notifications = [
    {
      id: "1",
      type: "alert",
      title: "Urgent: Student in Crisis",
      description: "Olivia Davis reported suicidal ideation. Immediate action required.",
      time: "30 minutes ago",
      icon: AlertTriangle,
      iconColor: "text-rose-500",
      student: "Olivia Davis",
    },
    {
      id: "2",
      type: "message",
      title: "New Message",
      description: "Dr. Sarah Johnson sent you a message about Emma Wilson's treatment plan.",
      time: "2 hours ago",
      icon: MessageSquare,
      iconColor: "text-purple-500",
      student: "Emma Wilson",
    },
    {
      id: "3",
      type: "document",
      title: "Document Shared",
      description: "Community Mental Health Center shared Emma's treatment update.",
      time: "Yesterday",
      icon: FileText,
      iconColor: "text-amber-500",
      student: "Emma Wilson",
    },
    {
      id: "4",
      type: "calendar",
      title: "Upcoming Meeting",
      description: "Parent meeting with Michael Wilson (Emma's father) tomorrow at 2:00 PM.",
      time: "Tomorrow",
      icon: Calendar,
      iconColor: "text-emerald-500",
      student: "Emma Wilson",
    },
    {
      id: "5",
      type: "task",
      title: "Task Due",
      description: "Complete risk assessment for Jason Martinez.",
      time: "Today",
      icon: Check,
      iconColor: "text-blue-500",
      student: "Jason Martinez",
    },
  ]

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Notifications</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription>You have 5 unread notifications</CardDescription>
      </CardHeader>
      <CardContent className="max-h-[400px] overflow-y-auto">
        <div className="space-y-2">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3 rounded-md p-2 hover:bg-accent">
              <div
                className={`mt-0.5 rounded-full p-1.5 ${notification.type === "alert" ? "bg-rose-100" : "bg-muted"}`}
              >
                <notification.icon className={`h-4 w-4 ${notification.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{notification.title}</p>
                  <Badge variant="outline" className="text-xs">
                    {notification.time}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{notification.description}</p>
                <div className="mt-1 flex items-center">
                  <Avatar className="h-4 w-4 mr-1">
                    <AvatarImage src="/placeholder.svg?height=16&width=16" alt={notification.student} />
                    <AvatarFallback>
                      {notification.student
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs">{notification.student}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="p-2 flex justify-between">
        <Button variant="ghost" size="sm">
          Mark all as read
        </Button>
        <Button variant="outline" size="sm">
          View all notifications
        </Button>
      </CardFooter>
    </Card>
  )
}
