import { FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function DocumentTemplates() {
  const templates = [
    {
      id: "1",
      title: "Initial Risk Assessment",
      description: "Comprehensive evaluation of student risk factors and protective factors",
      category: "Assessment",
      fields: 18,
      aiAssisted: true,
    },
    {
      id: "2",
      title: "Student Support Plan",
      description: "Detailed plan outlining interventions, goals, and support strategies",
      category: "Plan",
      fields: 24,
      aiAssisted: true,
    },
    {
      id: "3",
      title: "External Referral Form",
      description: "Secure referral to external healthcare providers with relevant information",
      category: "Referral",
      fields: 15,
      aiAssisted: true,
    },
    {
      id: "4",
      title: "Parent Consultation Notes",
      description: "Documentation of parent meetings and communication",
      category: "Notes",
      fields: 12,
      aiAssisted: false,
    },
    {
      id: "5",
      title: "Academic Accommodation Request",
      description: "Request for classroom accommodations based on student needs",
      category: "Request",
      fields: 10,
      aiAssisted: false,
    },
    {
      id: "6",
      title: "Monthly Progress Review",
      description: "Regular assessment of intervention effectiveness and goal progress",
      category: "Assessment",
      fields: 20,
      aiAssisted: true,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {templates.map((template) => (
        <Card key={template.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{template.title}</CardTitle>
            <CardDescription>{template.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Category: {template.category}</span>
              <span className="text-muted-foreground">{template.fields} fields</span>
            </div>
            {template.aiAssisted && (
              <div className="mt-2 rounded-md bg-secondary px-2 py-1 text-xs">AI-assisted documentation available</div>
            )}
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <FileText className="mr-2 h-4 w-4" />
              Use Template
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
