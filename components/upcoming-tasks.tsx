import { Calendar, Clock, FileText, MessageSquare, Phone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export function UpcomingTasks() {
  const tasks = [
    {
      id: "1",
      title: "Call Emma's parents",
      description: "Discuss recent absences and therapy plan",
      due: "Today, 2:30 PM",
      type: "call",
      priority: "high",
      completed: false,
    },
    {
      id: "2",
      title: "Complete risk assessment",
      description: "For Jason Martinez",
      due: "Today, 4:00 PM",
      type: "document",
      priority: "medium",
      completed: false,
    },
    {
      id: "3",
      title: "Team meeting",
      description: "Weekly counseling team check-in",
      due: "Tomorrow, 9:00 AM",
      type: "meeting",
      priority: "medium",
      completed: false,
    },
    {
      id: "4",
      title: "Follow up with Dr. Johnson",
      description: "Regarding Emma's treatment plan",
      due: "Tomorrow, 11:00 AM",
      type: "message",
      priority: "high",
      completed: false,
    },
    {
      id: "5",
      title: "Submit monthly report",
      description: "Student intervention statistics",
      due: "Friday",
      type: "document",
      priority: "low",
      completed: true,
    },
  ]

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-start space-x-4">
          <Checkbox id={`task-${task.id}`} checked={task.completed} />
          <div className="flex-1 space-y-1">
            <div className="flex items-center">
              {task.type === "call" && <Phone className="mr-2 h-4 w-4 text-muted-foreground" />}
              {task.type === "document" && <FileText className="mr-2 h-4 w-4 text-muted-foreground" />}
              {task.type === "meeting" && <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />}
              {task.type === "message" && <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />}
              <label
                htmlFor={`task-${task.id}`}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                  task.completed ? "text-muted-foreground line-through" : ""
                }`}
              >
                {task.title}
              </label>
            </div>
            <p className="text-sm text-muted-foreground">{task.description}</p>
            <div className="flex items-center pt-1">
              <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{task.due}</span>
              <Badge
                variant={task.priority === "high" ? "destructive" : task.priority === "medium" ? "warning" : "outline"}
                className="ml-auto text-xs"
              >
                {task.priority}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
