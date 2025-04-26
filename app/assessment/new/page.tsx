"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Bot, Check, Info, Lightbulb, Loader2, Save } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function NewAssessmentPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [aiSuggestion, setAiSuggestion] = useState("")
  const [isGeneratingSuggestion, setIsGeneratingSuggestion] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState("emma-wilson")
  const [assessmentType, setAssessmentType] = useState("risk")
  const [anxietyLevel, setAnxietyLevel] = useState(75)

  const handleGenerateSuggestion = () => {
    setIsGeneratingSuggestion(true)
    // Simulate AI generating a suggestion
    setTimeout(() => {
      setAiSuggestion(
        "Emma is displaying signs of anxiety and depression likely related to recent family disruption. Her academic performance has declined significantly in the past month, and she has been isolating herself from peers. Recommend weekly counseling sessions and possible referral to external mental health provider.",
      )
      setIsGeneratingSuggestion(false)

      toast({
        title: "AI suggestion generated",
        description: "Review and edit the suggested assessment notes as needed",
        duration: 3000,
      })
    }, 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)

      toast({
        title: "Assessment saved",
        description: "Risk assessment for Emma Wilson has been saved successfully",
        duration: 3000,
      })

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
          <DashboardHeader heading="New Assessment" text="Create a comprehensive assessment for a student">
            <div className="flex space-x-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard">
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
                    Save Assessment
                  </>
                )}
              </Button>
            </div>
          </DashboardHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Details</CardTitle>
                  <CardDescription>Basic information about this assessment</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student">Student</Label>
                      <Select defaultValue={selectedStudent} onValueChange={setSelectedStudent}>
                        <SelectTrigger id="student">
                          <SelectValue placeholder="Select student" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emma-wilson">
                            <div className="flex items-center">
                              <span>Emma Wilson</span>
                              <Badge variant="destructive" className="ml-2">
                                High Risk
                              </Badge>
                            </div>
                          </SelectItem>
                          <SelectItem value="jason-martinez">
                            <div className="flex items-center">
                              <span>Jason Martinez</span>
                              <Badge variant="warning" className="ml-2">
                                Medium Risk
                              </Badge>
                            </div>
                          </SelectItem>
                          <SelectItem value="olivia-davis">
                            <div className="flex items-center">
                              <span>Olivia Davis</span>
                              <Badge variant="destructive" className="ml-2">
                                High Risk
                              </Badge>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="assessment-type">Assessment Type</Label>
                      <Select defaultValue={assessmentType} onValueChange={setAssessmentType}>
                        <SelectTrigger id="assessment-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="risk">Risk Assessment</SelectItem>
                          <SelectItem value="mental-health">Mental Health Evaluation</SelectItem>
                          <SelectItem value="academic">Academic Performance</SelectItem>
                          <SelectItem value="behavioral">Behavioral Assessment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="assessment-date">Assessment Date</Label>
                    <Input type="date" id="assessment-date" defaultValue={new Date().toISOString().split("T")[0]} />
                  </div>
                </CardContent>
              </Card>

              {selectedStudent === "emma-wilson" && (
                <Card>
                  <CardHeader className="flex flex-row items-center">
                    <div>
                      <CardTitle>Student Overview</CardTitle>
                      <CardDescription>Current information about Emma Wilson</CardDescription>
                    </div>
                    <div className="ml-auto flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emma Wilson" />
                        <AvatarFallback>EW</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Grade</p>
                        <p className="text-sm">10th Grade</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Age</p>
                        <p className="text-sm">16</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Current Risk Level</p>
                        <div className="flex items-center">
                          <Badge variant="destructive">High Risk</Badge>
                          <span className="ml-2 text-sm text-muted-foreground">Score: 72/100</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Last Assessment</p>
                        <p className="text-sm">2 weeks ago</p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Recent Notes</p>
                      <p className="text-sm text-muted-foreground">
                        Emma has been showing increased signs of anxiety. Parents recently separated, causing emotional
                        distress. Grades have dropped from B average to D in last semester. Experiencing panic attacks
                        and withdrawal from activities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

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
                      <CardTitle>Mental Health Assessment</CardTitle>
                      <CardDescription>Evaluate current mental health status and concerns</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label>
                          Anxiety Level
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-4 w-4 ml-2 inline text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-80">
                                  Rate the student's anxiety level based on observed behaviors, self-reporting, and
                                  consultation with teachers and parents.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <div className="flex items-center space-x-2">
                          <Slider
                            defaultValue={[anxietyLevel]}
                            max={100}
                            step={1}
                            className="flex-1"
                            onValueChange={(value) => setAnxietyLevel(value[0])}
                          />
                          <span className="w-12 text-center font-medium">{anxietyLevel}%</span>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Minimal</span>
                          <span>Moderate</span>
                          <span>Severe</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>
                          Depression Indicators
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-4 w-4 ml-2 inline text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-80">
                                  Select all depression indicators that apply based on observation and reporting.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="sleep-changes"
                              className="rounded border-gray-300"
                              defaultChecked
                            />
                            <Label htmlFor="sleep-changes" className="text-sm font-normal">
                              Sleep changes
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="appetite-changes"
                              className="rounded border-gray-300"
                              defaultChecked
                            />
                            <Label htmlFor="appetite-changes" className="text-sm font-normal">
                              Appetite changes
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="loss-of-interest"
                              className="rounded border-gray-300"
                              defaultChecked
                            />
                            <Label htmlFor="loss-of-interest" className="text-sm font-normal">
                              Loss of interest
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="fatigue" className="rounded border-gray-300" defaultChecked />
                            <Label htmlFor="fatigue" className="text-sm font-normal">
                              Fatigue
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="concentration-issues"
                              className="rounded border-gray-300"
                              defaultChecked
                            />
                            <Label htmlFor="concentration-issues" className="text-sm font-normal">
                              Concentration issues
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="suicidal-ideation" className="rounded border-gray-300" />
                            <Label htmlFor="suicidal-ideation" className="text-sm font-normal">
                              Suicidal ideation
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mental-health-notes">Assessment Notes</Label>
                        <div className="relative">
                          <Textarea
                            id="mental-health-notes"
                            placeholder="Enter detailed notes about mental health observations and concerns..."
                            className="min-h-32"
                            value={aiSuggestion || ""}
                            onChange={(e) => setAiSuggestion(e.target.value)}
                          />
                          <div className="absolute bottom-2 right-2 flex space-x-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    type="button"
                                    size="sm"
                                    variant="outline"
                                    onClick={handleGenerateSuggestion}
                                    disabled={isGeneratingSuggestion}
                                  >
                                    {isGeneratingSuggestion ? (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <Bot className="h-4 w-4" />
                                    )}
                                    <span className="ml-2">
                                      {isGeneratingSuggestion ? "Generating..." : "AI Assist"}
                                    </span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Generate AI-assisted assessment notes based on student history</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                        {aiSuggestion && (
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Lightbulb className="h-3 w-3 mr-1" />
                            <span>AI-generated content. Review and edit as needed.</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="suicide-risk">Suicide Risk Assessment</Label>
                        <RadioGroup defaultValue="low" id="suicide-risk">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="none" id="risk-none" />
                            <Label htmlFor="risk-none" className="text-sm font-normal">
                              No risk identified
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="low" id="risk-low" />
                            <Label htmlFor="risk-low" className="text-sm font-normal">
                              Low risk - Occasional thoughts, no plan
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="moderate" id="risk-moderate" />
                            <Label htmlFor="risk-moderate" className="text-sm font-normal">
                              Moderate risk - Frequent thoughts, vague plan
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="high" id="risk-high" />
                            <Label htmlFor="risk-high" className="text-sm font-normal">
                              High risk - Specific plan, access to means
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="severe" id="risk-severe" />
                            <Label htmlFor="risk-severe" className="text-sm font-normal">
                              Severe risk - Immediate danger
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recommended-interventions">Recommended Interventions</Label>
                        <Select defaultValue="counseling">
                          <SelectTrigger id="recommended-interventions">
                            <SelectValue placeholder="Select primary intervention" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="counseling">School-based counseling</SelectItem>
                            <SelectItem value="external-referral">External mental health referral</SelectItem>
                            <SelectItem value="crisis-intervention">Crisis intervention</SelectItem>
                            <SelectItem value="parent-consultation">Parent consultation</SelectItem>
                            <SelectItem value="safety-plan">Safety plan development</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="academic" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Academic Assessment</CardTitle>
                      <CardDescription>Evaluate academic performance and needs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="current-gpa">Current GPA</Label>
                            <Input type="text" id="current-gpa" placeholder="e.g., 2.5" defaultValue="1.8" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="previous-gpa">Previous GPA</Label>
                            <Input type="text" id="previous-gpa" placeholder="e.g., 3.0" defaultValue="3.2" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Academic Concerns</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="missing-assignments"
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                              <Label htmlFor="missing-assignments" className="text-sm font-normal">
                                Missing assignments
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="test-anxiety"
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                              <Label htmlFor="test-anxiety" className="text-sm font-normal">
                                Test anxiety
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="attendance-issues"
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                              <Label htmlFor="attendance-issues" className="text-sm font-normal">
                                Attendance issues
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="concentration-problems"
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                              <Label htmlFor="concentration-problems" className="text-sm font-normal">
                                Concentration problems
                              </Label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="academic-notes">Academic Notes</Label>
                          <Textarea
                            id="academic-notes"
                            placeholder="Enter notes about academic performance and concerns..."
                            className="min-h-20"
                            defaultValue="Emma's grades have dropped significantly in the past semester. She was previously a B student but is now failing multiple classes. She has missed several assignments and her test scores have declined. Teachers report she seems distracted and disengaged in class."
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment Summary</CardTitle>
                  <CardDescription>Overall risk evaluation and recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Overall Risk Level</Label>
                    <RadioGroup defaultValue="high">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="overall-low" />
                        <Label htmlFor="overall-low" className="text-sm font-normal">
                          Low Risk
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="overall-medium" />
                        <Label htmlFor="overall-medium" className="text-sm font-normal">
                          Medium Risk
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="overall-high" />
                        <Label htmlFor="overall-high" className="text-sm font-normal">
                          High Risk
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="immediate-actions">Immediate Actions Required</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="parent-contact" className="rounded border-gray-300" defaultChecked />
                        <Label htmlFor="parent-contact" className="text-sm font-normal">
                          Contact parents/guardians
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="safety-plan" className="rounded border-gray-300" defaultChecked />
                        <Label htmlFor="safety-plan" className="text-sm font-normal">
                          Create safety plan
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="external-referral"
                          className="rounded border-gray-300"
                          defaultChecked
                        />
                        <Label htmlFor="external-referral" className="text-sm font-normal">
                          External mental health referral
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="teacher-consultation"
                          className="rounded border-gray-300"
                          defaultChecked
                        />
                        <Label htmlFor="teacher-consultation" className="text-sm font-normal">
                          Teacher consultation
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary-notes">Summary Notes</Label>
                    <Textarea
                      id="summary-notes"
                      placeholder="Enter summary notes and recommendations..."
                      className="min-h-32"
                      defaultValue="Emma is displaying significant signs of anxiety and depression related to her parents' recent separation. Her academic performance has declined dramatically, and she is withdrawing from social activities. She requires immediate intervention including weekly counseling sessions, parent consultation, and referral to external mental health provider. A safety plan should be developed and shared with relevant staff."
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t px-6 py-4">
                  <Button variant="outline" asChild>
                    <Link href="/dashboard">Cancel</Link>
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
                        Complete Assessment
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
