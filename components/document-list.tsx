import { Clock, Download, Eye, FileText, Lock, Share2 } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function DocumentList() {
  const documents = [
    {
      id: "1",
      title: "Emma Wilson - Risk Assessment",
      type: "Assessment",
      student: "Emma Wilson",
      created: "May 22, 2023",
      author: "Ms. Thompson",
      shared: ["School", "Parent", "Healthcare"],
      status: "complete",
    },
    {
      id: "2",
      title: "Emma Wilson - Support Plan",
      type: "Plan",
      student: "Emma Wilson",
      created: "May 25, 2023",
      author: "Ms. Thompson",
      shared: ["School", "Parent", "Healthcare"],
      status: "complete",
    },
    {
      id: "3",
      title: "Jason Martinez - Risk Assessment",
      type: "Assessment",
      student: "Jason Martinez",
      created: "June 3, 2023",
      author: "Ms. Thompson",
      shared: ["School", "Parent"],
      status: "complete",
    },
    {
      id: "4",
      title: "Sophia Chen - Academic Accommodations",
      type: "Request",
      student: "Sophia Chen",
      created: "June 5, 2023",
      author: "Ms. Thompson",
      shared: ["School"],
      status: "complete",
    },
    {
      id: "5",
      title: "Tyler Johnson - External Referral",
      type: "Referral",
      student: "Tyler Johnson",
      created: "June 8, 2023",
      author: "Ms. Thompson",
      shared: ["Healthcare"],
      status: "complete",
    },
    {
      id: "6",
      title: "Olivia Davis - Monthly Review",
      type: "Assessment",
      student: "Olivia Davis",
      created: "Draft",
      author: "Ms. Thompson",
      shared: [],
      status: "draft",
    },
  ]

  return (
    <div className="divide-y">
      {documents.map((doc) => (
        <div key={doc.id} className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <div className="rounded-lg bg-muted p-2">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center">
                <h4 className="font-medium">{doc.title}</h4>
                {doc.status === "draft" && (
                  <Badge variant="outline" className="ml-2">
                    Draft
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Badge variant="secondary">{doc.type}</Badge>
                <span>•</span>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{doc.created}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Avatar className="h-4 w-4">
                    <AvatarImage src="/placeholder.svg?height=16&width=16" alt={doc.author} />
                    <AvatarFallback>MT</AvatarFallback>
                  </Avatar>
                  <span>{doc.author}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {doc.shared.length > 0 && (
              <div className="flex items-center space-x-1">
                <Share2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{doc.shared.length}</span>
              </div>
            )}
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Lock className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
