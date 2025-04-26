import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentStudents() {
  const students = [
    {
      id: "1",
      name: "Emma Wilson",
      grade: "10th",
      activity: "Visited nurse's office",
      timestamp: "2 hours ago",
      risk: "high",
    },
    {
      id: "2",
      name: "Jason Martinez",
      grade: "9th",
      activity: "Counseling session",
      timestamp: "3 hours ago",
      risk: "medium",
    },
    {
      id: "3",
      name: "Sophia Chen",
      grade: "11th",
      activity: "Parent meeting",
      timestamp: "Yesterday",
      risk: "low",
    },
    {
      id: "4",
      name: "Tyler Johnson",
      grade: "12th",
      activity: "Academic intervention",
      timestamp: "Yesterday",
      risk: "medium",
    },
    {
      id: "5",
      name: "Olivia Davis",
      grade: "10th",
      activity: "New support plan created",
      timestamp: "2 days ago",
      risk: "high",
    },
  ]

  return (
    <div className="space-y-8">
      {students.map((student) => (
        <div key={student.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={student.name} />
            <AvatarFallback>
              {student.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{student.name}</p>
            <p className="text-sm text-muted-foreground">
              {student.grade} • {student.activity}
            </p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <Badge
              variant={student.risk === "high" ? "destructive" : student.risk === "medium" ? "warning" : "outline"}
              className="mb-1"
            >
              {student.risk}
            </Badge>
            <span className="text-xs text-muted-foreground">{student.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
