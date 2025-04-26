"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Check,
  FileText,
  Lock,
  Mail,
  Phone,
  Plus,
  Search,
  Send,
  Shield,
  User,
  Video,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function CommunicationPage() {
  const [selectedContact, setSelectedContact] = useState("dr-johnson")
  const [showNewMessage, setShowNewMessage] = useState(false)
  const [messageText, setMessageText] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (messageText.trim()) {
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully",
        duration: 2000,
      })
      setMessageText("")
    }
  }

  const handleSendNewMessage = () => {
    toast({
      title: "Message sent",
      description: "Your message has been sent to Dr. Sarah Johnson",
      duration: 2000,
    })
    setShowNewMessage(false)
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
          <DashboardHeader
            heading="Communication Hub"
            text="Securely communicate with students, families, and healthcare providers"
          >
            <div className="flex space-x-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
              <Button onClick={() => setShowNewMessage(true)}>
                <Plus className="mr-2 h-4 w-4" />
                New Message
              </Button>
            </div>
          </DashboardHeader>

          {showNewMessage ? (
            <Card>
              <CardHeader>
                <CardTitle>New Message</CardTitle>
                <CardDescription>Create a new secure message</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipient-type">Recipient Type</Label>
                    <Select defaultValue="healthcare">
                      <SelectTrigger id="recipient-type">
                        <SelectValue placeholder="Select recipient type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare Provider</SelectItem>
                        <SelectItem value="parent">Parent/Guardian</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient</Label>
                    <Select defaultValue="dr-johnson">
                      <SelectTrigger id="recipient">
                        <SelectValue placeholder="Select recipient" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr-johnson">Dr. Sarah Johnson (Therapist)</SelectItem>
                        <SelectItem value="dr-williams">Dr. Williams (Psychiatrist)</SelectItem>
                        <SelectItem value="cmhc">Community Mental Health Center</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Enter message subject"
                    defaultValue="Emma Wilson - Treatment Plan Update"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="message">Message</Label>
                    <Badge variant="outline" className="flex items-center">
                      <Lock className="h-3 w-3 mr-1" />
                      <span>HIPAA Compliant</span>
                    </Badge>
                  </div>
                  <Textarea
                    id="message"
                    placeholder="Enter your message..."
                    className="min-h-32"
                    defaultValue="Hello Dr. Johnson,

I wanted to provide an update on Emma Wilson following our recent risk assessment. Emma's anxiety symptoms have increased, and she's showing signs of depression related to her parents' recent separation. Her academic performance has declined significantly.

We've developed a support plan that includes weekly counseling sessions at school, but I believe she would benefit from your expertise as well. Could we schedule a coordination meeting to discuss her treatment plan?

Thank you,
Ms. Thompson"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Related Student</Label>
                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emma Wilson" />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Emma Wilson</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Grade 10</span>
                        <span className="mx-1">•</span>
                        <Badge variant="destructive">High Risk</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <User className="h-4 w-4 mr-1" />
                      Change
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Consent Verification</Label>
                  <RadioGroup defaultValue="yes">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="consent-yes" />
                      <Label htmlFor="consent-yes" className="text-sm font-normal">
                        I confirm that I have proper consent to share this information
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="consent-no" />
                      <Label htmlFor="consent-no" className="text-sm font-normal">
                        I need to obtain consent before sharing
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Attachments</Label>
                  <div className="flex items-center justify-between rounded-md border p-4">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Emma_Wilson_Risk_Assessment.pdf</p>
                        <p className="text-xs text-muted-foreground">PDF • 1.2 MB</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Check className="h-4 w-4 mr-1" />
                      Attached
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Attachment
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t px-6 py-4">
                <Button variant="outline" onClick={() => setShowNewMessage(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSendNewMessage}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-7">
              <Card className="md:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Conversations</CardTitle>
                    <Button variant="ghost" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search messages..." className="w-full pl-8" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    <button
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-accent transition-colors relative ${selectedContact === "dr-johnson" ? "bg-accent" : ""}`}
                      onClick={() => setSelectedContact("dr-johnson")}
                    >
                      <Badge className="absolute right-4 top-3" variant="destructive">
                        3
                      </Badge>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Sarah Johnson" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium leading-none truncate">Dr. Sarah Johnson</p>
                          <span className="text-xs text-muted-foreground">2h</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">Re: Emma Wilson's treatment plan</p>
                      </div>
                    </button>
                    <Separator />
                    <button
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-accent transition-colors ${selectedContact === "michael-wilson" ? "bg-accent" : ""}`}
                      onClick={() => setSelectedContact("michael-wilson")}
                    >
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Michael Wilson" />
                        <AvatarFallback>MW</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium leading-none truncate">Michael Wilson</p>
                          <span className="text-xs text-muted-foreground">1d</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">Thank you for your help with Emma</p>
                      </div>
                    </button>
                    <Separator />
                    <button
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-accent transition-colors ${selectedContact === "ms-rodriguez" ? "bg-accent" : ""}`}
                      onClick={() => setSelectedContact("ms-rodriguez")}
                    >
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Ms. Rodriguez" />
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium leading-none truncate">Ms. Rodriguez</p>
                          <span className="text-xs text-muted-foreground">2d</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">Emma missed class again today</p>
                      </div>
                    </button>
                    <Separator />
                    <button
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-accent transition-colors ${selectedContact === "cmhc" ? "bg-accent" : ""}`}
                      onClick={() => setSelectedContact("cmhc")}
                    >
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Community Health Center" />
                        <AvatarFallback>CH</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium leading-none truncate">Community Health</p>
                          <span className="text-xs text-muted-foreground">3d</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">Appointment confirmation for Emma</p>
                      </div>
                    </button>
                  </nav>
                </CardContent>
              </Card>
              <Card className="md:col-span-5">
                <CardHeader className="flex flex-row items-center border-b">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Dr. Sarah Johnson</CardTitle>
                      <CardDescription>Community Mental Health Center</CardDescription>
                    </div>
                  </div>
                  <div className="ml-auto flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        toast({
                          title: "Call",
                          description: "Initiating call to Dr. Sarah Johnson",
                          duration: 2000,
                        })
                      }}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        toast({
                          title: "Video Call",
                          description: "Initiating video call with Dr. Sarah Johnson",
                          duration: 2000,
                        })
                      }}
                    >
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        toast({
                          title: "Email",
                          description: "Opening email to Dr. Sarah Johnson",
                          duration: 2000,
                        })
                      }}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        toast({
                          title: "Schedule",
                          description: "Opening scheduler for Dr. Sarah Johnson",
                          duration: 2000,
                        })
                      }}
                    >
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-col space-y-4 p-4">
                    <div className="flex items-center justify-center">
                      <Badge variant="outline" className="flex items-center space-x-1 px-3 py-1">
                        <Shield className="h-3 w-3" />
                        <span>HIPAA & FERPA Compliant Secure Messaging</span>
                      </Badge>
                    </div>

                    <div className="flex justify-start">
                      <div className="flex max-w-[80%] flex-row">
                        <Avatar className="mr-2 h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                          <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="rounded-lg bg-muted px-4 py-2">
                            <div className="mb-1 text-xs font-medium">You</div>
                            <p className="text-sm">
                              Hello Dr. Johnson, I wanted to discuss Emma Wilson's treatment plan. She's been showing
                              increased anxiety at school.
                            </p>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">May 25, 2023 - 10:15 AM</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="flex max-w-[80%] flex-row-reverse">
                        <Avatar className="ml-2 h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                            <div className="mb-1 text-xs font-medium">Dr. Sarah Johnson</div>
                            <p className="text-sm">
                              Hi there. Thank you for reaching out about Emma. I've noticed similar patterns during our
                              sessions. Can you share more details about what you're observing at school?
                            </p>
                          </div>
                          <div className="mt-1 text-right text-xs text-muted-foreground">May 25, 2023 - 11:30 AM</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="flex max-w-[80%] flex-row">
                        <Avatar className="mr-2 h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                          <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="rounded-lg bg-muted px-4 py-2">
                            <div className="mb-1 text-xs font-medium">You</div>
                            <p className="text-sm">
                              She's been missing classes and visiting the nurse's office with complaints of headaches.
                              Her teachers report she seems withdrawn and has stopped participating in group activities.
                            </p>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">May 25, 2023 - 1:45 PM</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="flex max-w-[80%] flex-row-reverse">
                        <Avatar className="ml-2 h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                            <div className="mb-1 text-xs font-medium">Dr. Sarah Johnson</div>
                            <p className="text-sm">
                              That's concerning and aligns with what I'm seeing. I'd like to propose some adjustments to
                              her treatment plan. I'm attaching a document with my recommendations.
                            </p>
                            <div className="mt-2 flex items-center rounded-md bg-background/10 p-2">
                              <FileText className="mr-2 h-4 w-4" />
                              <div className="text-xs">
                                <div className="font-medium">Emma_Wilson_Treatment_Update.pdf</div>
                                <div>PDF • 1.2 MB</div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-1 text-right text-xs text-muted-foreground">May 26, 2023 - 9:20 AM</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="flex max-w-[80%] flex-row">
                        <Avatar className="mr-2 h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                          <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="rounded-lg bg-muted px-4 py-2">
                            <div className="mb-1 text-xs font-medium">You</div>
                            <p className="text-sm">
                              Thank you for the recommendations. I'll review them and discuss with her teachers. Would
                              you be available for a team meeting next week to coordinate our approach?
                            </p>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">May 26, 2023 - 10:05 AM</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="flex max-w-[80%] flex-row-reverse">
                        <Avatar className="ml-2 h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                            <div className="mb-1 text-xs font-medium">Dr. Sarah Johnson</div>
                            <p className="text-sm">
                              Yes, I'd be happy to join a team meeting. I'm available Tuesday or Thursday afternoon. Let
                              me know what works best for the school team.
                            </p>
                          </div>
                          <div className="mt-1 text-right text-xs text-muted-foreground">May 26, 2023 - 11:15 AM</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="flex max-w-[80%] flex-row-reverse">
                        <Avatar className="ml-2 h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dr. Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                            <div className="mb-1 text-xs font-medium">Dr. Sarah Johnson</div>
                            <p className="text-sm">
                              Also, I wanted to let you know that Emma mentioned feeling more comfortable with Ms.
                              Rodriguez. It might be helpful to include her in our coordination efforts if appropriate.
                            </p>
                          </div>
                          <div className="mt-1 text-right text-xs text-muted-foreground">Today - 9:45 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-3">
                  <form className="flex w-full items-center space-x-2" onSubmit={handleSendMessage}>
                    <Input
                      id="message"
                      placeholder="Type your message..."
                      className="flex-1"
                      autoComplete="off"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                    <Button type="submit">
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </div>
          )}
        </DashboardShell>
      </main>
    </div>
  )
}
