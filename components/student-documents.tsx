import { Clock, Download, Eye, FileText, Lock, Share2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function StudentDocuments() {
  const documents = [
    {
      id: "1",
      title: "Initial Risk Assessment",
      type: "Assessment",
      created: "May 22, 2023",
      author: "Ms. Thompson",
      shared: ["School", "Parent", "Healthcare"],
      status: "complete",
    },
    {
      id: "2",
      title: "Counseling Support Plan",
      type: "Plan",
      created: "May 25, 2023",
      author: "Ms. Thompson",
      shared: ["School", "Parent", "Healthcare"],
      status: "complete",
    },
    {
      id: "3",
      title: "Community Mental Health Referral",
      type: "Referral",
      created: "May 25, 2023",
      author: "Ms. Thompson",
      shared: ["Healthcare"],
      status: "complete",
    },
    {
      id: "4",
      title: "Academic Accommodation Request",
      type: "Request",
      created: "June 2, 2023",
      author: "Ms. Thompson",
      shared: ["School"],
      status: "complete",
    },
    {
      id: "5",
      title: "Treatment Progress Update",
      type: "Report",
      created: "June 12, 2023",
      author: "Dr. Johnson",
      shared: ["School"],
      status: "complete",
    },
    {
      id: "6",
      title: "Monthly Progress Review",
      type: "Assessment",
      created: "Draft",
      author: "Ms. Thompson",
      shared: [],
      status: "draft",
    },
  ]

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div key={doc.id} className="flex items-center justify-between rounded-lg border p-3">
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
                <span>{doc.author}</span>
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
