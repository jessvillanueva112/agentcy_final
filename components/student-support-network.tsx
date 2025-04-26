import { Mail, MessageSquare, Phone, Shield } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function StudentSupportNetwork() {
  const contacts = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      role: "Therapist",
      organization: "Community Mental Health Center",
      type: "healthcare",
      contact: "sjohnson@cmhc.org",
      phone: "(555) 123-4567",
      notes: "Primary therapist, weekly sessions",
      permissions: ["Full medical records", "Treatment updates"],
    },
    {
      id: "2",
      name: "Michael Wilson",
      role: "Parent",
      relationship: "Father",
      type: "family",
      contact: "mwilson@email.com",
      phone: "(555) 987-6543",
      notes: "Primary contact, very responsive",
      permissions: ["Educational records", "Counseling updates"],
    },
    {
      id: "3",
      name: "Ms. Rodriguez",
      role: "English Teacher",
      organization: "Lincoln High School",
      type: "school",
      contact: "rodriguez@lhs.edu",
      phone: "(555) 234-5678",
      notes: "Trusted adult at school, provides academic support",
      permissions: ["Academic accommodations"],
    },
  ]

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt={contact.name} />
                <AvatarFallback>
                  {contact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">{contact.name}</h4>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={
                      contact.type === "healthcare" ? "secondary" : contact.type === "family" ? "outline" : "default"
                    }
                  >
                    {contact.role}
                  </Badge>
                  {contact.organization && (
                    <span className="text-sm text-muted-foreground">{contact.organization}</span>
                  )}
                  {contact.relationship && (
                    <span className="text-sm text-muted-foreground">{contact.relationship}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="font-medium">Contact: </span>
              <span className="text-muted-foreground">{contact.contact}</span>
            </div>
            <div>
              <span className="font-medium">Phone: </span>
              <span className="text-muted-foreground">{contact.phone}</span>
            </div>
          </div>
          <div className="text-sm">
            <span className="font-medium">Notes: </span>
            <span className="text-muted-foreground">{contact.notes}</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Information Sharing Permissions:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {contact.permissions.map((permission, index) => (
                <Badge key={index} variant="outline">
                  {permission}
                </Badge>
              ))}
            </div>
          </div>
          <Separator />
        </div>
      ))}
    </div>
  )
}
