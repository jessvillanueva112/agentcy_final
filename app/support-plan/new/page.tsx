"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Check, Loader2, Plus, Save } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function NewSupportPlanPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      router.push("/students/1")
    }, 1500)
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
          <DashboardHeader heading="Create Support Plan" text="Develop a comprehensive support plan for Emma Wilson">
            <div className="flex space-x-2">
              <Button variant="outline" asChild>
                <Link href="/students/1">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Cancel
                </Link>
              </Button>
              <Button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Plan
                  </>
                )}
              </Button>
            </div>
          </DashboardHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Information</CardTitle>
                  <CardDescription>Review student details before creating support plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Emma Wilson" />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Emma Wilson</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Grade 10</span>
                        <span className="mx-1">•</span>
                        <Badge variant="destructive">High Risk</Badge>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Latest Assessment</p>
                      <p className="text-sm">Risk Assessment (Today)</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Risk Score</p>
                      <p className="text-sm">72/100 (High)</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Key Concerns</p>
                      <p className="text-sm">Anxiety, Depression, Academic Decline</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Previous Support</p>
                      <p className="text-sm">Weekly check-ins (last 2 weeks)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support Plan Details</CardTitle>
                  <CardDescription>Define the parameters of this support plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="plan-name">Plan Name</Label>
                      <Input
                        id="plan-name"
                        placeholder="Enter a name for this support plan"
                        defaultValue="Emma Wilson - Mental Health Support Plan"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plan-duration">Plan Duration</Label>
                      <Select defaultValue="6-weeks">
                        <SelectTrigger id="plan-duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-weeks">2 Weeks</SelectItem>
                          <SelectItem value="4-weeks">4 Weeks</SelectItem>
                          <SelectItem value="6-weeks">6 Weeks</SelectItem>
                          <SelectItem value="quarter">Quarter/Term</SelectItem>
                          <SelectItem value="semester">Semester</SelectItem>
                          <SelectItem value="year">Academic Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan-goals">Primary Goals</Label>
                    <Textarea
                      id="plan-goals"
                      placeholder="Enter the primary goals of this support plan..."
                      className="min-h-20"
                      defaultValue="1. Reduce anxiety symptoms through regular counseling and coping strategies
2. Improve academic performance by addressing missed assignments and providing accommodations
3. Establish regular communication with parents regarding progress
4. Connect with external mental health provider for additional support"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interventions</CardTitle>
                  <CardDescription>Select and customize interventions for this student</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="intervention-counseling" defaultChecked />
                        <Label htmlFor="intervention-counseling" className="font-medium">
                          School-Based Counseling
                        </Label>
                      </div>
                      <div className="ml-6 mt-2 grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="counseling-frequency" className="text-sm">
                            Frequency
                          </Label>
                          <Select defaultValue="weekly">
                            <SelectTrigger id="counseling-frequency">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="twice-weekly">Twice Weekly</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                              <SelectItem value="biweekly">Bi-weekly</SelectItem>
                              <SelectItem value="monthly">Monthly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="counseling-staff" className="text-sm">
                            Staff Responsible
                          </Label>
                          <Select defaultValue="thompson">
                            <SelectTrigger id="counseling-staff">
                              <SelectValue placeholder="Select staff" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="thompson">Ms. Thompson (Counselor)</SelectItem>
                              <SelectItem value="rodriguez">Ms. Rodriguez (Teacher)</SelectItem>
                              <SelectItem value="davis">Principal Davis</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2 col-span-2">
                          <Label htmlFor="counseling-notes" className="text-sm">
                            Notes
                          </Label>
                          <Textarea
                            id="counseling-notes"
                            placeholder="Enter notes about this intervention..."
                            className="min-h-16"
                            defaultValue="Focus on anxiety management techniques and coping strategies for family stress. Schedule sessions during study hall to avoid missing class time."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="intervention-external" defaultChecked />
                        <Label htmlFor="intervention-external" className="font-medium">
                          External Mental Health Referral
                        </Label>
                      </div>
                      <div className="ml-6 mt-2 grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="external-provider" className="text-sm">
                            Provider
                          </Label>
                          <Select defaultValue="cmhc">
                            <SelectTrigger id="external-provider">
                              <SelectValue placeholder="Select provider" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cmhc">Community Mental Health Center</SelectItem>
                              <SelectItem value="private">Dr. Sarah Johnson (Private Practice)</SelectItem>
                              <SelectItem value="hospital">Children's Hospital Outpatient</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="referral-status" className="text-sm">
                            Status
                          </Label>
                          <Select defaultValue="pending">
                            <SelectTrigger id="referral-status">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="not-started">Not Started</SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="scheduled">Appointment Scheduled</SelectItem>
                              <SelectItem value="active">Active Treatment</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2 col-span-2">
                          <Label htmlFor="referral-notes" className="text-sm">
                            Notes
                          </Label>
                          <Textarea
                            id="referral-notes"
                            placeholder="Enter notes about this referral..."
                            className="min-h-16"
                            defaultValue="Referral form sent to Community Mental Health Center. Parent has agreed to schedule intake appointment this week. Consent for information sharing obtained."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="intervention-academic" defaultChecked />
                        <Label htmlFor="intervention-academic" className="font-medium">
                          Academic Accommodations
                        </Label>
                      </div>
                      <div className="ml-6 mt-2 grid grid-cols-2 gap-4">
                        <div className="space-y-2 col-span-2">
                          <Label className="text-sm">Selected Accommodations</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="extended-time" defaultChecked />
                              <Label htmlFor="extended-time" className="text-sm font-normal">
                                Extended time for assignments
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="reduced-workload" defaultChecked />
                              <Label htmlFor="reduced-workload" className="text-sm font-normal">
                                Reduced workload
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="testing-accommodations" defaultChecked />
                              <Label htmlFor="testing-accommodations" className="text-sm font-normal">
                                Testing accommodations
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="check-ins" defaultChecked />
                              <Label htmlFor="check-ins" className="text-sm font-normal">
                                Teacher check-ins
                              </Label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 col-span-2">
                          <Label htmlFor="academic-notes" className="text-sm">
                            Notes
                          </Label>
                          <Textarea
                            id="academic-notes"
                            placeholder="Enter notes about academic accommodations..."
                            className="min-h-16"
                            defaultValue="Emma will be given extended time (1.5x) for all assignments and tests. Teachers will check in with her at the beginning and end of each class. A plan for making up missed work has been created with each teacher."
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="button" variant="outline" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Another Intervention
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monitoring and Follow-up</CardTitle>
                  <CardDescription>Define how progress will be monitored and follow-up tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Progress Monitoring Method</Label>
                    <RadioGroup defaultValue="weekly-check">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekly-check" id="weekly-check" />
                        <Label htmlFor="weekly-check" className="text-sm font-normal">
                          Weekly check-ins
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="biweekly-review" id="biweekly-review" />
                        <Label htmlFor="biweekly-review" className="text-sm font-normal">
                          Bi-weekly progress review
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly-meeting" id="monthly-meeting" />
                        <Label htmlFor="monthly-meeting" className="text-sm font-normal">
                          Monthly team meeting
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Success Indicators</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="reduced-anxiety" defaultChecked />
                        <Label htmlFor="reduced-anxiety" className="text-sm font-normal">
                          Reduced anxiety symptoms
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="improved-attendance" defaultChecked />
                        <Label htmlFor="improved-attendance" className="text-sm font-normal">
                          Improved attendance
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="academic-improvement" defaultChecked />
                        <Label htmlFor="academic-improvement" className="text-sm font-normal">
                          Academic improvement
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="increased-engagement" defaultChecked />
                        <Label htmlFor="increased-engagement" className="text-sm font-normal">
                          Increased social engagement
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Follow-up Tasks</Label>
                      <Button type="button" variant="ghost" size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Task
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="task-1" />
                            <Label htmlFor="task-1" className="text-sm font-medium">
                              Call parent to discuss referral
                            </Label>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>Tomorrow</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="task-2" />
                            <Label htmlFor="task-2" className="text-sm font-medium">
                              Email teachers about accommodations
                            </Label>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>Today</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="task-3" />
                            <Label htmlFor="task-3" className="text-sm font-medium">
                              Schedule first counseling session
                            </Label>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>Today</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Collaboration and Consent</CardTitle>
                  <CardDescription>Document collaboration and consent for this support plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Stakeholders Involved</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="student-involved" defaultChecked />
                        <Label htmlFor="student-involved" className="text-sm font-normal">
                          Student
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="parent-involved" defaultChecked />
                        <Label htmlFor="parent-involved" className="text-sm font-normal">
                          Parent/Guardian
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="teachers-involved" defaultChecked />
                        <Label htmlFor="teachers-involved" className="text-sm font-normal">
                          Teachers
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="external-involved" defaultChecked />
                        <Label htmlFor="external-involved" className="text-sm font-normal">
                          External Provider
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Information Sharing Consent</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="consent-school" defaultChecked />
                        <Label htmlFor="consent-school" className="text-sm font-normal">
                          Share within school team
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="consent-external" defaultChecked />
                        <Label htmlFor="consent-external" className="text-sm font-normal">
                          Share with external providers
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="consent-documentation" defaultChecked />
                        <Label htmlFor="consent-documentation" className="text-sm font-normal">
                          Include in student records
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="consent-meetings" defaultChecked />
                        <Label htmlFor="consent-meetings" className="text-sm font-normal">
                          Discuss in team meetings
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="consent-notes">Consent Notes</Label>
                    <Textarea
                      id="consent-notes"
                      placeholder="Enter notes about consent and collaboration..."
                      className="min-h-20"
                      defaultValue="Verbal consent obtained from father (Michael Wilson) on 5/15/2023 for referral to Community Mental Health Center and information sharing. Written consent form to be signed at parent meeting tomorrow. Emma has been involved in creating this plan and agrees with the interventions."
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t px-6 py-4">
                  <Button variant="outline" asChild>
                    <Link href="/students/1">Cancel</Link>
                  </Button>
                  <Button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Create Support Plan
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </form>
        </DashboardShell>
      </main>
    </div>
  )
}
