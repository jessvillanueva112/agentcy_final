import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export function DocumentFilters() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Document Type</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="type-assessment" />
            <Label htmlFor="type-assessment" className="text-sm">
              Assessment
            </Label>
            <Badge variant="outline" className="ml-auto">
              12
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type-plan" />
            <Label htmlFor="type-plan" className="text-sm">
              Support Plan
            </Label>
            <Badge variant="outline" className="ml-auto">
              8
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type-referral" />
            <Label htmlFor="type-referral" className="text-sm">
              Referral
            </Label>
            <Badge variant="outline" className="ml-auto">
              5
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type-request" />
            <Label htmlFor="type-request" className="text-sm">
              Request
            </Label>
            <Badge variant="outline" className="ml-auto">
              4
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="type-notes" />
            <Label htmlFor="type-notes" className="text-sm">
              Notes
            </Label>
            <Badge variant="outline" className="ml-auto">
              15
            </Badge>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <h4 className="font-medium">Status</h4>
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="status-all" />
            <Label htmlFor="status-all" className="text-sm">
              All
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="complete" id="status-complete" />
            <Label htmlFor="status-complete" className="text-sm">
              Complete
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="draft" id="status-draft" />
            <Label htmlFor="status-draft" className="text-sm">
              Draft
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-2">
        <h4 className="font-medium">Shared With</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="shared-school" />
            <Label htmlFor="shared-school" className="text-sm">
              School Staff
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="shared-parents" />
            <Label htmlFor="shared-parents" className="text-sm">
              Parents/Guardians
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="shared-healthcare" />
            <Label htmlFor="shared-healthcare" className="text-sm">
              Healthcare Providers
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="shared-none" />
            <Label htmlFor="shared-none" className="text-sm">
              Not Shared
            </Label>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <h4 className="font-medium">Date Range</h4>
        <RadioGroup defaultValue="all-time">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all-time" id="date-all" />
            <Label htmlFor="date-all" className="text-sm">
              All Time
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="last-week" id="date-week" />
            <Label htmlFor="date-week" className="text-sm">
              Last Week
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="last-month" id="date-month" />
            <Label htmlFor="date-month" className="text-sm">
              Last Month
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="last-quarter" id="date-quarter" />
            <Label htmlFor="date-quarter" className="text-sm">
              Last Quarter
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
