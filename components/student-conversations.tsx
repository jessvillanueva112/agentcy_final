"use client"

import * as React from "react"
import { Search, UserPlus } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

type Conversation = {
  id: string
  studentId: string
  studentName: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: boolean
  participants: string[]
}

export function StudentConversations() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [conversations, setConversations] = React.useState<Conversation[]>([
    {
      id: "conv-1",
      studentId: "1",
      studentName: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've scheduled a meeting with her parents for tomorrow at 2pm.",
      timestamp: "2025-04-25T10:30:00",
      unread: true,
      participants: ["Dr. Sarah Johnson (Therapist)", "Michael Wilson (Father)", "Ms. Rodriguez (Teacher)"],
    },
    {
      id: "conv-2",
      studentId: "1",
      studentName: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The latest assessment shows improvement in her anxiety levels.",
      timestamp: "2025-04-24T15:45:00",
      unread: false,
      participants: ["Dr. Sarah Johnson (Therapist)"],
    },
    {
      id: "conv-3",
      studentId: "2",
      studentName: "Jason Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "He's been attending all classes this week, which is a good sign.",
      timestamp: "2025-04-25T09:15:00",
      unread: true,
      participants: ["Ms. Thompson (Math Teacher)", "Mr. Garcia (Vice Principal)"],
    },
    {
      id: "conv-4",
      studentId: "3",
      studentName: "Olivia Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "We need to schedule a follow-up appointment at the hospital next week.",
      timestamp: "2025-04-24T16:20:00",
      unread: false,
      participants: ["Dr. Williams (BC Children's Hospital)", "Mrs. Davis (Mother)"],
    },
  ])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return new Intl.DateTimeFormat("en-CA", {
        hour: "numeric",
        minute: "numeric",
      }).format(date)
    } else if (diffDays === 1) {
      return "Yesterday"
    } else {
      return new Intl.DateTimeFormat("en-CA", {
        month: "short",
        day: "numeric",
      }).format(date)
    }
  }

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.participants.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Group conversations by student
  const groupedConversations = filteredConversations.reduce<Record<string, Conversation[]>>((acc, conversation) => {
    if (!acc[conversation.studentId]) {
      acc[conversation.studentId] = []
    }
    acc[conversation.studentId].push(conversation)
    return acc
  }, {})

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Student Conversations</CardTitle>
        <CardDescription>View and manage conversations grouped by student</CardDescription>
        <div className="relative mt-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="grouped" className="px-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="grouped">Grouped by Student</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          <TabsContent value="grouped" className="space-y-4 mt-4">
            {Object.entries(groupedConversations).map(([studentId, convs]) => (
              <div key={studentId} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={convs[0].avatar || "/placeholder.svg"} alt={convs[0].studentName} />
                    <AvatarFallback>
                      {convs[0].studentName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-medium">{convs[0].studentName}</h4>
                    <p className="text-xs text-muted-foreground">{convs.length} conversations</p>
                  </div>
                </div>
                <div className="pl-10 space-y-2">
                  {convs.map((conv) => (
                    <div
                      key={conv.id}
                      className={`rounded-md border p-3 cursor-pointer transition-colors ${
                        conv.unread ? "bg-muted/50 border-primary/20" : ""
                      }`}
                      onClick={() => {
                        toast({
                          title: `Conversation with ${conv.participants.join(", ")}`,
                          description: "Opening conversation thread",
                          duration: 3000,
                        })
                        setConversations((prev) => prev.map((c) => (c.id === conv.id ? { ...c, unread: false } : c)))
                      }}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">With: {conv.participants.join(", ")}</p>
                          <p className="text-sm">{conv.lastMessage}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-muted-foreground">{formatDate(conv.timestamp)}</span>
                          {conv.unread && <Badge className="mt-1 h-2 w-2 rounded-full p-0" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="recent" className="space-y-2 mt-4">
            {filteredConversations
              .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
              .map((conv) => (
                <div
                  key={conv.id}
                  className={`rounded-md border p-3 cursor-pointer transition-colors ${
                    conv.unread ? "bg-muted/50 border-primary/20" : ""
                  }`}
                  onClick={() => {
                    toast({
                      title: `Conversation about ${conv.studentName}`,
                      description: "Opening conversation thread",
                      duration: 3000,
                    })
                    setConversations((prev) => prev.map((c) => (c.id === conv.id ? { ...c, unread: false } : c)))
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={conv.avatar || "/placeholder.svg"} alt={conv.studentName} />
                        <AvatarFallback>
                          {conv.studentName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{conv.studentName}</p>
                        <p className="text-xs text-muted-foreground mb-1">With: {conv.participants.join(", ")}</p>
                        <p className="text-sm">{conv.lastMessage}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-muted-foreground">{formatDate(conv.timestamp)}</span>
                      {conv.unread && <Badge className="mt-1 h-2 w-2 rounded-full p-0" />}
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t p-4">
        <Button
          className="w-full"
          onClick={() => {
            toast({
              title: "New Conversation",
              description: "Create a new conversation about a student",
              duration: 3000,
            })
          }}
        >
          <UserPlus className="mr-2 h-4 w-4" />
          New Conversation
        </Button>
      </CardFooter>
    </Card>
  )
}
