import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function CommunicationActivity() {
  const communications = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      role: "Therapist",
      message: "Sent you Emma's updated treatment plan",
      timestamp: "2 hours ago",
      type: "healthcare",
    },
    {
      id: "2",
      name: "Michael Wilson",
      role: "Parent",
      message: "Replied to your message about Emma's absences",
      timestamp: "4 hours ago",
      type: "parent",
    },
    {
      id: "3",
      name: "Ms. Rodriguez",
      role: "Teacher",
      message: "Requested a meeting about Emma's classroom behavior",
      timestamp: "Yesterday",
      type: "teacher",
    },
    {
      id: "4",
      name: "Community Health Center",
      role: "Organization",
      message: "Confirmed Emma's appointment for next week",
      timestamp: "2 days ago",
      type: "healthcare",
    },
    {
      id: "5",
      name: "Principal Davis",
      role: "Administrator",
      message: "Approved your intervention plan for Emma",
      timestamp: "3 days ago",
      type: "admin",
    },
  ]

  return (
    <div className="space-y-4">
      {communications.map((comm) => (
        <div key={comm.id} className="flex items-start space-x-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={comm.name} />
            <AvatarFallback>
              {comm.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">{comm.name}</p>
              <Badge
                variant={
                  comm.type === "healthcare"
                    ? "secondary"
                    : comm.type === "parent"
                      ? "outline"
                      : comm.type === "teacher"
                        ? "default"
                        : "outline"
                }
                className="text-xs"
              >
                {comm.role}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{comm.message}</p>
            <p className="text-xs text-muted-foreground">{comm.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
