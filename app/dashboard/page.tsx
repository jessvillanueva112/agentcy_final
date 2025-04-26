"use client"

import { useState } from "react"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Calendar,
  Clock,
  FileText,
  Filter,
  MessageSquare,
  Plus,
  Search,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { NotificationCenter } from "@/components/notification-center"
import { ExternalSystemsIntegration } from "@/components/external-systems-integration"
import { StudentConversations } from "@/components/student-conversations"
import { SOSAlerts } from "@/components/sos-alerts"
import { AutomationAgents } from "@/components/automation-agents"

export default function DashboardPage() {
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-xs font-medium text-white">
                  5
                </span>
              </Button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80">
                  <NotificationCenter onClose={() => setShowNotifications(false)} />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <DashboardShell>
          <DashboardHeader
            heading="Counselor Dashboard"
            text="Manage student support, documentation, and communications in one place."
          >
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild>
                      <Link href="/assessment/new">
                        <Plus className="mr-2 h-4 w-4" />
                        New Assessment
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Create a new student assessment</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </DashboardHeader>

          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search students, documents, or tasks..." className="pl-8" />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                toast({
                  title: "Filters",
                  description: "Filter options would appear here",
                  duration: 2000,
                })
              }}
            >
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-l-4 border-l-rose-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Urgent Attention Needed</CardTitle>
                <AlertTriangle className="h-4 w-4 text-rose-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">Students requiring immediate support</p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="text-xs text-rose-500 flex items-center">
                  View urgent cases
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Documentation</CardTitle>
                <FileText className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Forms requiring completion</p>
              </CardContent>
              <CardFooter>
                <Link href="/documentation" className="text-xs text-amber-500 flex items-center">
                  Complete documentation
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
                <Calendar className="h-4 w-4 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Next: Emma W. at 10:30 AM</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="text-xs text-emerald-500 flex items-center p-0"
                  onClick={() => {
                    toast({
                      title: "Calendar",
                      description: "Calendar view would open here",
                      duration: 2000,
                    })
                  }}
                >
                  View calendar
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                <MessageSquare className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">3 from healthcare providers</p>
              </CardContent>
              <CardFooter>
                <Link href="/communication" className="text-xs text-purple-500 flex items-center">
                  Check messages
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <SOSAlerts />
            <ExternalSystemsIntegration />
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <StudentConversations />
            <Tabs defaultValue="at-risk" className="card">
              <Card>
                <CardHeader>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="at-risk">At-Risk Students</TabsTrigger>
                    <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                    <TabsTrigger value="tasks">My Tasks</TabsTrigger>
                    <TabsTrigger value="all">All Students</TabsTrigger>
                  </TabsList>
                </CardHeader>
                <CardContent>
                  <TabsContent value="at-risk" className="mt-0 space-y-4">
                    <div className="grid gap-4">
                      {/* Student 1 */}
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex border-l-4 border-l-rose-600">
                            <div className="p-4 flex-1">
                              <div className="flex items-center space-x-4">
                                <Avatar>
                                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emma Wilson" />
                                  <AvatarFallback>EW</AvatarFallback>
                                </Avatar>
                                <div>
                                  <Link href="/students/1" className="font-medium hover:underline">
                                    Emma Wilson
                                  </Link>
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <span>Grade 10</span>
                                    <span className="mx-1">•</span>
                                    <Badge variant="destructive" className="text-xs">
                                      High Risk
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2 text-sm">
                                <p className="text-muted-foreground">
                                  Recent family disruption, increased anxiety symptoms, missed 3 days this week
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col justify-between border-l p-4 bg-muted/30 w-48">
                              <div className="text-xs">
                                <div className="flex items-center mb-1">
                                  <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                                  <span className="text-muted-foreground">Last update: 2 hours ago</span>
                                </div>
                                <div className="flex items-center">
                                  <FileText className="h-3 w-3 mr-1 text-muted-foreground" />
                                  <span className="text-muted-foreground">Risk assessment needed</span>
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-2">
                                <Button size="sm" variant="default" asChild className="flex-1">
                                  <Link href="/students/1">View</Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Student 2 */}
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex border-l-4 border-l-amber-500">
                            <div className="p-4 flex-1">
                              <div className="flex items-center space-x-4">
                                <Avatar>
                                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jason Martinez" />
                                  <AvatarFallback>JM</AvatarFallback>
                                </Avatar>
                                <div>
                                  <Button
                                    variant="link"
                                    className="font-medium p-0 h-auto"
                                    onClick={() => {
                                      toast({
                                        title: "Student Profile",
                                        description: "Jason Martinez's profile would open here",
                                        duration: 2000,
                                      })
                                    }}
                                  >
                                    Jason Martinez
                                  </Button>
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <span>Grade 9</span>
                                    <span className="mx-1">•</span>
                                    <Badge variant="warning" className="text-xs">
                                      Medium Risk
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2 text-sm">
                                <p className="text-muted-foreground">
                                  Academic performance decline, behavioral incidents in class, parent meeting scheduled
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col justify-between border-l p-4 bg-muted/30 w-48">
                              <div className="text-xs">
                                <div className="flex items-center mb-1">
                                  <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                                  <span className="text-muted-foreground">Last update: 1 day ago</span>
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                                  <span className="text-muted-foreground">Meeting tomorrow at 2pm</span>
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-2">
                                <Button
                                  size="sm"
                                  variant="default"
                                  className="flex-1"
                                  onClick={() => {
                                    toast({
                                      title: "Student Profile",
                                      description: "Jason Martinez's profile would open here",
                                      duration: 2000,
                                    })
                                  }}
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="recent">
                    <div className="p-8 text-center text-muted-foreground">
                      <p>Recent activity will be displayed here</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="tasks">
                    <div className="p-8 text-center text-muted-foreground">
                      <p>Your tasks will be displayed here</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="all">
                    <div className="p-8 text-center text-muted-foreground">
                      <p>All students will be displayed here</p>
                    </div>
                  </TabsContent>
                </CardContent>
              </Card>
            </Tabs>
          </div>
        </DashboardShell>
      </main>
      <div className="mt-6">
        <AutomationAgents />
      </div>
    </div>
  )
}
