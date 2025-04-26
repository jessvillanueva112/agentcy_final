"use client"

import * as React from "react"
import { Bot, FileSpreadsheet, FileText, FileUp, Loader2, RotateCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

type AutomationTask = {
  id: string
  name: string
  description: string
  status: "idle" | "running" | "completed" | "failed"
  progress: number
  lastRun: string | null
  source: "spreadsheet" | "docs" | "myedbc" | "paper" | "email"
  type: "import" | "export" | "sync" | "process"
}

export function AutomationAgents() {
  const [tasks, setTasks] = React.useState<AutomationTask[]>([
    {
      id: "task-1",
      name: "Course Selection Data Import",
      description: "Import student course selections from MyEdBC",
      status: "idle",
      progress: 0,
      lastRun: "2025-04-24T15:30:00",
      source: "myedbc",
      type: "import",
    },
    {
      id: "task-2",
      name: "Student Notes Summarization",
      description: "Summarize counselor notes and generate action items",
      status: "idle",
      progress: 0,
      lastRun: "2025-04-25T09:15:00",
      source: "docs",
      type: "process",
    },
    {
      id: "task-3",
      name: "Attendance Report Generation",
      description: "Generate attendance reports for at-risk students",
      status: "idle",
      progress: 0,
      lastRun: "2025-04-23T14:45:00",
      source: "spreadsheet",
      type: "export",
    },
    {
      id: "task-4",
      name: "Paper Notes Digitization",
      description: "Scan and digitize handwritten counselor notes",
      status: "idle",
      progress: 0,
      lastRun: "2025-04-22T11:20:00",
      source: "paper",
      type: "import",
    },
    {
      id: "task-5",
      name: "Parent Email Analysis",
      description: "Analyze parent emails and categorize by priority",
      status: "idle",
      progress: 0,
      lastRun: "2025-04-25T08:00:00",
      source: "email",
      type: "process",
    },
  ])

  const runTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: "running" as const,
              progress: 0,
            }
          : task,
      ),
    )

    // Simulate task progress
    const interval = setInterval(() => {
      setTasks((prev) => {
        const updatedTasks = prev.map((task) => {
          if (task.id === taskId && task.status === "running") {
            const newProgress = task.progress + 10

            if (newProgress >= 100) {
              clearInterval(interval)
              return {
                ...task,
                progress: 100,
                status: "completed" as const,
                lastRun: new Date().toISOString(),
              }
            }

            return {
              ...task,
              progress: newProgress,
            }
          }
          return task
        })

        return updatedTasks
      })
    }, 500)

    // Show toast notification
    toast({
      title: "Automation task started",
      description: `Running: ${tasks.find((t) => t.id === taskId)?.name}`,
      duration: 3000,
    })
  }

  const getSourceIcon = (source: AutomationTask["source"]) => {
    switch (source) {
      case "spreadsheet":
        return <FileSpreadsheet className="h-4 w-4" />
      case "docs":
        return <FileText className="h-4 w-4" />
      case "myedbc":
        return <FileUp className="h-4 w-4" />
      case "paper":
        return <FileText className="h-4 w-4" />
      case "email":
        return <FileText className="h-4 w-4" />
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never"

    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-CA", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="mr-2 h-5 w-5" />
          Automation Task Agents
        </CardTitle>
        <CardDescription>AI-powered agents that automate administrative tasks and paperwork</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Tasks</TabsTrigger>
            <TabsTrigger value="import">Import</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="export">Export</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 mt-4">
            {tasks.map((task) => (
              <div key={task.id} className="border rounded-md p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium">{task.name}</span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {getSourceIcon(task.source)}
                        <span className="ml-1 capitalize">{task.source}</span>
                      </Badge>
                      <Badge variant="outline" className="ml-2 text-xs capitalize">
                        {task.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                  </div>
                  <Button
                    size="sm"
                    variant={task.status === "running" ? "outline" : "default"}
                    disabled={task.status === "running"}
                    onClick={() => runTask(task.id)}
                  >
                    {task.status === "running" ? (
                      <>
                        <Loader2 className="mr-1 h-3 w-3 animate-spin" /> Running
                      </>
                    ) : (
                      <>
                        <RotateCw className="mr-1 h-3 w-3" /> Run Now
                      </>
                    )}
                  </Button>
                </div>
                {task.status === "running" && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{task.progress}%</span>
                    </div>
                    <Progress value={task.progress} className="h-1" />
                  </div>
                )}
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>
                    Status: <span className="capitalize">{task.status}</span>
                  </span>
                  <span>Last run: {formatDate(task.lastRun)}</span>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="import" className="space-y-4 mt-4">
            {tasks
              .filter((task) => task.type === "import")
              .map((task) => (
                <div key={task.id} className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">{task.name}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {getSourceIcon(task.source)}
                          <span className="ml-1 capitalize">{task.source}</span>
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                    </div>
                    <Button
                      size="sm"
                      variant={task.status === "running" ? "outline" : "default"}
                      disabled={task.status === "running"}
                      onClick={() => runTask(task.id)}
                    >
                      {task.status === "running" ? (
                        <>
                          <Loader2 className="mr-1 h-3 w-3 animate-spin" /> Running
                        </>
                      ) : (
                        <>
                          <RotateCw className="mr-1 h-3 w-3" /> Run Now
                        </>
                      )}
                    </Button>
                  </div>
                  {task.status === "running" && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-1" />
                    </div>
                  )}
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>
                      Status: <span className="capitalize">{task.status}</span>
                    </span>
                    <span>Last run: {formatDate(task.lastRun)}</span>
                  </div>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="process" className="space-y-4 mt-4">
            {tasks
              .filter((task) => task.type === "process")
              .map((task) => (
                <div key={task.id} className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">{task.name}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {getSourceIcon(task.source)}
                          <span className="ml-1 capitalize">{task.source}</span>
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                    </div>
                    <Button
                      size="sm"
                      variant={task.status === "running" ? "outline" : "default"}
                      disabled={task.status === "running"}
                      onClick={() => runTask(task.id)}
                    >
                      {task.status === "running" ? (
                        <>
                          <Loader2 className="mr-1 h-3 w-3 animate-spin" /> Running
                        </>
                      ) : (
                        <>
                          <RotateCw className="mr-1 h-3 w-3" /> Run Now
                        </>
                      )}
                    </Button>
                  </div>
                  {task.status === "running" && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-1" />
                    </div>
                  )}
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>
                      Status: <span className="capitalize">{task.status}</span>
                    </span>
                    <span>Last run: {formatDate(task.lastRun)}</span>
                  </div>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="export" className="space-y-4 mt-4">
            {tasks
              .filter((task) => task.type === "export")
              .map((task) => (
                <div key={task.id} className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">{task.name}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {getSourceIcon(task.source)}
                          <span className="ml-1 capitalize">{task.source}</span>
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                    </div>
                    <Button
                      size="sm"
                      variant={task.status === "running" ? "outline" : "default"}
                      disabled={task.status === "running"}
                      onClick={() => runTask(task.id)}
                    >
                      {task.status === "running" ? (
                        <>
                          <Loader2 className="mr-1 h-3 w-3 animate-spin" /> Running
                        </>
                      ) : (
                        <>
                          <RotateCw className="mr-1 h-3 w-3" /> Run Now
                        </>
                      )}
                    </Button>
                  </div>
                  {task.status === "running" && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-1" />
                    </div>
                  )}
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>
                      Status: <span className="capitalize">{task.status}</span>
                    </span>
                    <span>Last run: {formatDate(task.lastRun)}</span>
                  </div>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            toast({
              title: "Automation Settings",
              description: "Configure automation task schedules and preferences",
              duration: 3000,
            })
          }}
        >
          Configure Automation Settings
        </Button>
      </CardFooter>
    </Card>
  )
}
