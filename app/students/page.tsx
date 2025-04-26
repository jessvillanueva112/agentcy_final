"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

// Mock student data
const students = [
  {
    id: "1",
    name: "Emma Wilson",
    grade: "10",
    riskLevel: "High",
    lastInteraction: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    tags: ["Anxiety", "Academic Support"],
  },
  {
    id: "2",
    name: "Olivia Davis",
    grade: "11",
    riskLevel: "High",
    lastInteraction: "Yesterday",
    avatar: "/placeholder.svg?height=40&width=40",
    tags: ["Depression", "Family Issues"],
  },
  {
    id: "3",
    name: "Jason Martinez",
    grade: "9",
    riskLevel: "Medium",
    lastInteraction: "3 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
    tags: ["Attendance", "Behavior"],
  },
  {
    id: "4",
    name: "Michael Johnson",
    grade: "12",
    riskLevel: "Low",
    lastInteraction: "1 week ago",
    avatar: "/placeholder.svg?height=40&width=40",
    tags: ["College Planning"],
  },
  {
    id: "5",
    name: "Sophia Lee",
    grade: "10",
    riskLevel: "Medium",
    lastInteraction: "2 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
    tags: ["Academic Support", "Social Skills"],
  },
  {
    id: "6",
    name: "Ethan Brown",
    grade: "9",
    riskLevel: "Low",
    lastInteraction: "5 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
    tags: ["New Student"],
  },
  // Add more students to reach 42 total
  // ... (more students would be here)
]

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [gradeFilter, setGradeFilter] = useState("all")
  const [riskFilter, setRiskFilter] = useState("all")

  // Filter students based on search query and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGrade = gradeFilter === "all" || student.grade === gradeFilter
    const matchesRisk = riskFilter === "all" || student.riskLevel.toLowerCase() === riskFilter.toLowerCase()
    return matchesSearch && matchesGrade && matchesRisk
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Students" text="View and manage your student caseload.">
        <Button asChild>
          <Link href="/students/import">
            <UserPlus className="mr-2 h-4 w-4" />
            Import Students
          </Link>
        </Button>
      </DashboardHeader>

      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search students..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <Select value={gradeFilter} onValueChange={setGradeFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="9">Grade 9</SelectItem>
                <SelectItem value="10">Grade 10</SelectItem>
                <SelectItem value="11">Grade 11</SelectItem>
                <SelectItem value="12">Grade 12</SelectItem>
              </SelectContent>
            </Select>
            <Select value={riskFilter} onValueChange={setRiskFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="overflow-hidden">
              <CardHeader className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                      <AvatarFallback>
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        <Link href={`/students/${student.id}`} className="hover:underline">
                          {student.name}
                        </Link>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">Grade {student.grade}</p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      student.riskLevel === "High"
                        ? "destructive"
                        : student.riskLevel === "Medium"
                          ? "warning"
                          : "outline"
                    }
                  >
                    {student.riskLevel}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-1">
                  {student.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Last interaction: {student.lastInteraction}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/students/${student.id}`}>View Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center py-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredStudents.length} of 42 students in your caseload
          </p>
        </div>
      </div>
    </DashboardShell>
  )
}
