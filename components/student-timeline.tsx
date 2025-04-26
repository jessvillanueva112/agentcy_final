import { Calendar, FileText, MessageSquare, Phone, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function StudentTimeline() {
  const timeline = [
    {
      id: "1",
      date: "May 15, 2023",
      time: "2:30 PM",
      event: "Initial counseling intake",
      description: "Student self-referred due to anxiety symptoms and academic concerns",
      staff: "Ms. Thompson",
      type: "meeting",
    },
    {
      id: "2",
      date: "May 18, 2023",
      time: "10:15 AM",
      event: "Parent consultation",
      description: "Called father to discuss concerns and obtain permission for counseling services",
      staff: "Ms. Thompson",
      type: "call",
    },
    {
      id: "3",
      date: "May 22, 2023",
      time: "1:00 PM",
      event: "Risk assessment completed",
      description: "Moderate to high risk identified for anxiety and depression",
      staff: "Ms. Thompson",
      type: "document",
    },
    {
      id: "4",
      date: "May 25, 2023",
      time: "3:45 PM",
      event: "Referral to Community Mental Health",
      description: "Referred for evaluation by psychiatrist and ongoing therapy",
      staff: "Ms. Thompson",
      type: "document",
    },
    {
      id: "5",
      date: "June 2, 2023",
      time: "11:30 AM",
      event: "Teacher consultation",
      description: "Met with Ms. Rodriguez to discuss classroom accommodations",
      staff: "Ms. Thompson",
      type: "meeting",
    },
    {
      id: "6",
      date: "June 8, 2023",
      time: "2:00 PM",
      event: "Follow-up counseling session",
      description: "Student reported continued anxiety but using new coping strategies",
      staff: "Ms. Thompson",
      type: "meeting",
    },
    {
      id: "7",
      date: "June 12, 2023",
      time: "9:30 AM",
      event: "Communication from therapist",
      description: "Received treatment update from Dr. Johnson at Community Mental Health",
      staff: "Ms. Thompson",
      type: "message",
    },
  ]

  return (
    <div className="relative space-y-4 p-4 before:absolute before:inset-0 before:left-9 before:border-l-2 before:border-dashed">
      {timeline.map((item) => (
        <div key={item.id} className="relative grid gap-2 pb-4 pl-10">
          <div className="absolute left-[-30px] flex h-6 w-6 items-center justify-center rounded-full bg-background">
            {item.type === "meeting" && <User className="h-4 w-4" />}
            {item.type === "call" && <Phone className="h-4 w-4" />}
            {item.type === "document" && <FileText className="h-4 w-4" />}
            {item.type === "message" && <MessageSquare className="h-4 w-4" />}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{item.date}</span>
              </Badge>
              <span className="text-sm text-muted-foreground">{item.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">{item.staff}</span>
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg?height=24&width=24" alt={item.staff} />
                <AvatarFallback>MT</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div>
            <h4 className="font-medium">{item.event}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
