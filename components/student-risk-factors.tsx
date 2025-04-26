import { AlertTriangle, Shield } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export function StudentRiskFactors() {
  const riskFactors = [
    {
      id: "1",
      factor: "Recent family disruption",
      impact: "High",
      category: "Family",
      description: "Parents recently separated, causing emotional distress",
    },
    {
      id: "2",
      factor: "Academic performance decline",
      impact: "Medium",
      category: "Academic",
      description: "Grades dropped from B average to D in last semester",
    },
    {
      id: "3",
      factor: "Reported anxiety symptoms",
      impact: "High",
      category: "Mental Health",
      description: "Experiencing panic attacks and withdrawal from activities",
    },
    {
      id: "4",
      factor: "Increased absences",
      impact: "Medium",
      category: "Behavioral",
      description: "Missed 8 days in the last month, up from 1-2 previously",
    },
  ]

  const protectiveFactors = [
    {
      id: "1",
      factor: "Strong relationship with English teacher",
      impact: "High",
      category: "School",
      description: "Ms. Rodriguez serves as a trusted adult and mentor",
    },
    {
      id: "2",
      factor: "Engaged in art therapy",
      impact: "Medium",
      category: "Treatment",
      description: "Shows positive response to creative expression therapy",
    },
    {
      id: "3",
      factor: "Father actively involved in support",
      impact: "High",
      category: "Family",
      description: "Attends all meetings and follows through on recommendations",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-4 flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5 text-rose-500" />
          <h3 className="text-lg font-medium">Risk Factors</h3>
        </div>
        <div className="space-y-4">
          {riskFactors.map((factor) => (
            <div key={factor.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-medium">{factor.factor}</span>
                  <Badge variant={factor.impact === "High" ? "destructive" : "warning"} className="ml-2">
                    {factor.impact} Impact
                  </Badge>
                </div>
                <Badge variant="outline">{factor.category}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{factor.description}</p>
              <Separator />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center">
          <Shield className="mr-2 h-5 w-5 text-emerald-500" />
          <h3 className="text-lg font-medium">Protective Factors</h3>
        </div>
        <div className="space-y-4">
          {protectiveFactors.map((factor) => (
            <div key={factor.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-medium">{factor.factor}</span>
                  <Badge variant={factor.impact === "High" ? "default" : "outline"} className="ml-2">
                    {factor.impact} Impact
                  </Badge>
                </div>
                <Badge variant="outline">{factor.category}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{factor.description}</p>
              <Separator />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">Overall Risk Assessment</span>
          <span className="text-sm font-medium">72/100</span>
        </div>
        <Progress value={72} className="h-2" indicatorClassName="bg-red-500" />
        <p className="mt-2 text-sm text-muted-foreground">
          High risk level requiring immediate intervention and close monitoring
        </p>
      </div>
    </div>
  )
}
