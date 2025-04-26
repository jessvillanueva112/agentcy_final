"use client"

import { BarChart3, Download, Filter, LineChart, PieChart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { StudentDistributionChart } from "@/components/student-distribution-chart"
import { InterventionEffectivenessChart } from "@/components/intervention-effectiveness-chart"
import { TimeAllocationChart } from "@/components/time-allocation-chart"
import { RiskFactorAnalysis } from "@/components/risk-factor-analysis"

export default function AnalyticsPage() {
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
            heading="Analytics & Insights"
            text="Track student outcomes, measure intervention effectiveness, and optimize resource allocation."
          >
            <div className="flex items-center space-x-2">
              <Select defaultValue="current-quarter">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-month">Current Month</SelectItem>
                  <SelectItem value="current-quarter">Current Quarter</SelectItem>
                  <SelectItem value="current-semester">Current Semester</SelectItem>
                  <SelectItem value="current-year">Current School Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Reports
              </Button>
            </div>
          </DashboardHeader>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="students">Student Outcomes</TabsTrigger>
              <TabsTrigger value="interventions">Interventions</TabsTrigger>
              <TabsTrigger value="time">Time Allocation</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Students Served</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">248</div>
                    <p className="text-xs text-muted-foreground">+12% from last semester</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
                    <LineChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1.2 days</div>
                    <p className="text-xs text-muted-foreground">-30% from previous year</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Intervention Success Rate</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">78%</div>
                    <p className="text-xs text-muted-foreground">+15% from baseline</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Admin Time Reduction</CardTitle>
                    <PieChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">35%</div>
                    <p className="text-xs text-muted-foreground">14 hours/week saved</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Student Distribution by Need Category</CardTitle>
                    <CardDescription>Breakdown of student support needs across categories</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <StudentDistributionChart />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Intervention Effectiveness</CardTitle>
                    <CardDescription>Measuring outcomes of different intervention strategies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InterventionEffectivenessChart />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Counselor Time Allocation</CardTitle>
                    <CardDescription>How counselor time is distributed across activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TimeAllocationChart />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter by Date Range
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Risk Factor Analysis</CardTitle>
                    <CardDescription>Correlation between risk factors and student outcomes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RiskFactorAnalysis />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Export Analysis
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </DashboardShell>
      </main>
    </div>
  )
}
