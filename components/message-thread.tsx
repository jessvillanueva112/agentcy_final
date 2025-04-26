import { FileText, Lock } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function MessageThread() {
  const messages = [
    {
      id: "1",
      sender: "You",
      content:
        "Hello Dr. Johnson, I wanted to discuss Emma Wilson's treatment plan. She's been showing increased anxiety at school.",
      timestamp: "May 25, 2023 - 10:15 AM",
      isMe: true,
    },
    {
      id: "2",
      sender: "Dr. Sarah Johnson",
      content:
        "Hi there. Thank you for reaching out about Emma. I've noticed similar patterns during our sessions. Can you share more details about what you're observing at school?",
      timestamp: "May 25, 2023 - 11:30 AM",
      isMe: false,
    },
    {
      id: "3",
      sender: "You",
      content:
        "She's been missing classes and visiting the nurse's office with complaints of headaches. Her teachers report she seems withdrawn and has stopped participating in group activities.",
      timestamp: "May 25, 2023 - 1:45 PM",
      isMe: true,
    },
    {
      id: "4",
      sender: "Dr. Sarah Johnson",
      content:
        "That's concerning and aligns with what I'm seeing. I'd like to propose some adjustments to her treatment plan. I'm attaching a document with my recommendations.",
      timestamp: "May 26, 2023 - 9:20 AM",
      isMe: false,
      attachment: {
        name: "Emma_Wilson_Treatment_Update.pdf",
        type: "PDF",
        size: "1.2 MB",
      },
    },
    {
      id: "5",
      sender: "You",
      content:
        "Thank you for the recommendations. I'll review them and discuss with her teachers. Would you be available for a team meeting next week to coordinate our approach?",
      timestamp: "May 26, 2023 - 10:05 AM",
      isMe: true,
    },
    {
      id: "6",
      sender: "Dr. Sarah Johnson",
      content:
        "Yes, I'd be happy to join a team meeting. I'm available Tuesday or Thursday afternoon. Let me know what works best for the school team.",
      timestamp: "May 26, 2023 - 11:15 AM",
      isMe: false,
    },
    {
      id: "7",
      sender: "Dr. Sarah Johnson",
      content:
        "Also, I wanted to let you know that Emma mentioned feeling more comfortable with Ms. Rodriguez. It might be helpful to include her in our coordination efforts if appropriate.",
      timestamp: "Today - 9:45 AM",
      isMe: false,
    },
  ]

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="flex items-center justify-center">
        <Badge variant="outline" className="flex items-center space-x-1 px-3 py-1">
          <Lock className="h-3 w-3" />
          <span>HIPAA-compliant secure messaging</span>
        </Badge>
      </div>

      {messages.map((message) => (
        <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
          <div className={`flex max-w-[80%] ${message.isMe ? "flex-row-reverse" : "flex-row"}`}>
            <Avatar className={`h-8 w-8 ${message.isMe ? "ml-2" : "mr-2"}`}>
              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={message.sender} />
              <AvatarFallback>{message.isMe ? "ME" : "SJ"}</AvatarFallback>
            </Avatar>
            <div>
              <div
                className={`rounded-lg px-4 py-2 ${message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                <div className="mb-1 text-xs font-medium">{message.sender}</div>
                <p className="text-sm">{message.content}</p>
                {message.attachment && (
                  <div className="mt-2 flex items-center rounded-md bg-background/10 p-2">
                    <FileText className="mr-2 h-4 w-4" />
                    <div className="text-xs">
                      <div className="font-medium">{message.attachment.name}</div>
                      <div>
                        {message.attachment.type} • {message.attachment.size}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`mt-1 text-xs text-muted-foreground ${message.isMe ? "text-right" : "text-left"}`}>
                {message.timestamp}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
