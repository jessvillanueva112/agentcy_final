"use client"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, FileText, MessageSquare, Phone, Plus, Shield, UserPlus } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { StudentTimeline } from "@/components/student-timeline"
import { StudentRiskFactors } from "@/components/student-risk-factors"
import { StudentSupportNetwork } from "@/components/student-support-network"

export default function StudentProfilePage() {
  // This would normally be fetched from a database
  const student = {
    id: "1",
    name: "Emma Wilson",
    grade: "10th",
    age: 16,
    riskScore: 72,
    riskLevel: "High",
    lastInteraction: "2 hours ago",
    counselingPlan: "Weekly check-ins, coordination with external therapist",
    supportNetwork: [
      { name: "Dr. Sarah Johnson", role: "Therapist", organization: "Community Mental Health Center" },
      { name: "Michael Wilson", role: "Parent", relationship: "Father" },
      { name: "Ms. Rodriguez", role: "English Teacher", notes: "Trusted adult at school" },
    ],
    recentActivity: "Missed 2 classes yesterday, visited nurse's office with headache",
  }

  const handleCreateSupportPlan = () => {
    toast({
      title: "Creating support plan",
      description: "Redirecting to support plan creation page",
      duration: 2000,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <div className="flex items-center gap-4">
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <DashboardShell>
          <DashboardHeader heading={student.name} text={`${student.grade} • Student ID: ${student.id}`}>
            <div className="flex space-x-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
              <Button asChild>
                <Link href="/assessment/new">
                  <Plus className="mr-2 h-4 w-4" />
                  New Assessment
                </Link>
              </Button>
            </div>
          </DashboardHeader>

          <div className="grid gap-6 md:grid-cols-6">
            <Card className="md:col-span-2">
              <CardHeader className="flex flex-row items-center">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt={student.name} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{student.name}</CardTitle>
                    <CardDescription>
                      {student.grade} Grade • Age {student.age}
                    </CardDescription>
                    <div className="mt-2 flex items-center">
                      <Badge
                        variant={
                          student.riskLevel === "High"
                            ? "destructive"
                            : student.riskLevel === "Medium"
                              ? "warning"
                              : "outline"
                        }
                      >
                        {student.riskLevel} Risk
                      </Badge>
                      <span className="ml-2 text-sm text-muted-foreground">Last seen: {student.lastInteraction}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Risk Assessment Score</span>
                    <span className="text-sm font-medium">{student.riskScore}/100</span>
                  </div>
                  <Progress
                    value={student.riskScore}
                    className="h-2"
                    indicatorClassName={
                      student.riskScore > 70 ? "bg-red-500" : student.riskScore > 40 ? "bg-amber-500" : "bg-emerald-500"
                    }
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Current Support Plan</h4>
                  <p className="text-sm text-muted-foreground">{student.counselingPlan}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Recent Activity</h4>
                  <p className="text-sm text-muted-foreground">{student.recentActivity}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="#schedule">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/documentation">
                      <FileText className="mr-2 h-4 w-4" />
                      Documents
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      toast({
                        title: "Calling home",
                        description: "Initiating call to Michael Wilson (Father)",
                        duration: 3000,
                      })
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Home
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/communication">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t px-6 py-4">
                <Button variant="default" className="w-full" asChild>
                  <Link href="/support-plan/new">
                    <FileText className="mr-2 h-4 w-4" />
                    Create Support Plan
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <div className="md:col-span-4 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Risk Factors & Protective Factors</CardTitle>
                  <CardDescription>Identified factors affecting student wellbeing and academic success</CardDescription>
                </CardHeader>
                <CardContent>
                  <StudentRiskFactors />
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      toast({
                        title: "Risk assessment",
                        description: "Redirecting to risk assessment update form",
                        duration: 2000,
                      })
                    }}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Update Risk Assessment
                  </Button>
                </CardFooter>
              </Card>

              <Tabs defaultValue="mental-health" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="mental-health">Mental Health</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
                  <TabsTrigger value="family">Family</TabsTrigger>
                  <TabsTrigger value="social">Social</TabsTrigger>
                </TabsList>
                <TabsContent value="mental-health" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mental Health Timeline</CardTitle>
                      <CardDescription>History of mental health concerns, interventions, and progress</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <StudentTimeline />
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button
                        className="w-full"
                        onClick={() => {
                          toast({
                            title: "Timeline entry",
                            description: "Opening form to add new timeline entry",
                            duration: 2000,
                          })
                        }}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        Add Timeline Entry
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="academic" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Academic Performance</CardTitle>
                      <CardDescription>Grades, attendance, and academic interventions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Current Grades</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg border p-3">
                              <div className="font-medium">English</div>
                              <div className="text-2xl font-bold">C-</div>
                              <div className="text-xs text-muted-foreground">Down from B last quarter</div>
                            </div>
                            <div className="rounded-lg border p-3">
                              <div className="font-medium">Math</div>
                              <div className="text-2xl font-bold">D</div>
                              <div className="text-xs text-muted-foreground">Down from C last quarter</div>
                            </div>
                            <div className="rounded-lg border p-3">
                              <div className="font-medium">Science</div>
                              <div className="text-2xl font-bold">C</div>
                              <div className="text-xs text-muted-foreground">Stable from last quarter</div>
                            </div>
                            <div className="rounded-lg border p-3">
                              <div className="font-medium">History</div>
                              <div className="text-2xl font-bold">B-</div>
                              <div className="text-xs text-muted-foreground">Down from B+ last quarter</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-2">Attendance</h3>
                          <div className="rounded-lg border p-3">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium">Last 30 Days</div>
                                <div className="text-muted-foreground">8 absences, 5 tardies</div>
                              </div>
                              <Badge variant="destructive">Concerning</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button
                        className="w-full"
                        onClick={() => {
                          toast({
                            title: "Academic accommodations",
                            description: "Opening form to request academic accommodations",
                            duration: 2000,
                          })
                        }}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Request Academic Accommodations
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="family" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Family Support Network</CardTitle>
                      <CardDescription>Family members, guardians, and home environment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <StudentSupportNetwork />
                    </CardContent>
                    <CardFooter className="border-t px-6 py-4">
                      <Button
                        className="w-full"
                        onClick={() => {
                          toast({
                            title: "Family contact",
                            description: "Opening form to add new family contact",
                            duration: 2000,
                          })
                        }}
                      >
                        <UserPlus className="mr-2 h-4 w-4" />
                        Add Family Contact
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </DashboardShell>
      </main>
    </div>
  )
}
