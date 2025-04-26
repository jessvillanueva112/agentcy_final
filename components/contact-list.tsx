import { Mail, MessageSquare, Phone, Plus, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ContactList() {
  const contacts = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      role: "Therapist",
      organization: "Community Mental Health Center",
      type: "healthcare",
      contact: "sjohnson@cmhc.org",
      phone: "(555) 123-4567",
    },
    {
      id: "2",
      name: "Dr. Williams",
      role: "Psychiatrist",
      organization: "Community Mental Health Center",
      type: "healthcare",
      contact: "williams@cmhc.org",
      phone: "(555) 345-6789",
    },
    {
      id: "3",
      name: "Michael Wilson",
      role: "Parent",
      relationship: "Father",
      type: "family",
      contact: "mwilson@email.com",
      phone: "(555) 987-6543",
    },
    {
      id: "4",
      name: "Lisa Wilson",
      role: "Parent",
      relationship: "Mother",
      type: "family",
      contact: "lwilson@email.com",
      phone: "(555) 876-5432",
    },
    {
      id: "5",
      name: "Ms. Rodriguez",
      role: "English Teacher",
      organization: "Lincoln High School",
      type: "school",
      contact: "rodriguez@lhs.edu",
      phone: "(555) 234-5678",
    },
    {
      id: "6",
      name: "Coach Stevens",
      role: "Basketball Coach",
      organization: "Lincoln High School",
      type: "school",
      contact: "stevens@lhs.edu",
      phone: "(555) 456-7890",
    },
    {
      id: "7",
      name: "Principal Davis",
      role: "Principal",
      organization: "Lincoln High School",
      type: "school",
      contact: "davis@lhs.edu",
      phone: "(555) 567-8901",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search contacts..." className="w-full pl-8" />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
          <TabsTrigger value="school">School</TabsTrigger>
          <TabsTrigger value="family">Family</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex items-center justify-between rounded-lg border p-3">
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
                          contact.type === "healthcare"
                            ? "secondary"
                            : contact.type === "family"
                              ? "outline"
                              : "default"
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
                <div className="flex items-center space-x-2">
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
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
