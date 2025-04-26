import { FileText, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { DocumentTemplates } from "@/components/document-templates"
import { DocumentList } from "@/components/document-list"
import { DocumentFilters } from "@/components/document-filters"

export default function DocumentationPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Documentation Center"
        text="Create, manage, and share student documentation with secure access controls."
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Document
        </Button>
      </DashboardHeader>

      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search documents..." className="w-full pl-8" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-5">
              <CardHeader>
                <CardTitle>All Documents</CardTitle>
                <CardDescription>Browse and manage all student documentation</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <DocumentList />
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Load More Documents
                </Button>
              </CardFooter>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Filters</CardTitle>
                <CardDescription>Refine document search results</CardDescription>
              </CardHeader>
              <CardContent>
                <DocumentFilters />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Templates</CardTitle>
              <CardDescription>Standardized templates for common documentation needs</CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentTemplates />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
