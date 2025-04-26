"use client"

import * as React from "react"
import { Check, Hospital, Loader2, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type ExternalSystem = {
  id: string
  name: string
  status: "connected" | "disconnected" | "syncing"
  lastSync: string
  records: number
}

export function ExternalSystemsIntegration() {
  const [systems, setSystems] = React.useState<ExternalSystem[]>([
    {
      id: "fraser-health",
      name: "Fraser Health EHR",
      status: "connected",
      lastSync: "2025-04-25T08:30:00",
      records: 28,
    },
    {
      id: "surrey-memorial",
      name: "Surrey Memorial Hospital",
      status: "connected",
      lastSync: "2025-04-24T14:15:00",
      records: 12,
    },
    {
      id: "bc-childrens",
      name: "BC Children's Hospital",
      status: "connected",
      lastSync: "2025-04-23T16:45:00",
      records: 7,
    },
    {
      id: "myedbc",
      name: "MyEdBC",
      status: "connected",
      lastSync: "2025-04-25T09:00:00",
      records: 450,
    },
  ])

  const handleSync = (systemId: string) => {
    setSystems((prev) =>
      prev.map((system) => (system.id === systemId ? { ...system, status: "syncing" as const } : system)),
    )

    // Simulate sync process
    setTimeout(() => {
      setSystems((prev) =>
        prev.map((system) =>
          system.id === systemId
            ? {
                ...system,
                status: "connected" as const,
                lastSync: new Date().toISOString(),
                records: system.records + Math.floor(Math.random() * 5),
              }
            : system,
        ),
      )

      toast({
        title: "Sync completed",
        description: `Successfully synchronized with ${systems.find((s) => s.id === systemId)?.name}`,
        duration: 3000,
      })
    }, 2000)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-CA", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Hospital className="mr-2 h-5 w-5" />
          External Systems Integration
        </CardTitle>
        <CardDescription>Connect with healthcare providers and educational systems</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="health">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="health">Healthcare Systems</TabsTrigger>
            <TabsTrigger value="education">Educational Systems</TabsTrigger>
          </TabsList>
          <TabsContent value="health" className="space-y-4 mt-4">
            {systems
              .filter((system) => ["fraser-health", "surrey-memorial", "bc-childrens"].includes(system.id))
              .map((system) => (
                <div key={system.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <div className="font-medium flex items-center">
                      {system.name}
                      {system.status === "connected" && (
                        <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                          <Check className="mr-1 h-3 w-3" /> Connected
                        </Badge>
                      )}
                      {system.status === "disconnected" && (
                        <Badge variant="outline" className="ml-2 bg-red-50 text-red-700 border-red-200">
                          Disconnected
                        </Badge>
                      )}
                      {system.status === "syncing" && (
                        <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                          <Loader2 className="mr-1 h-3 w-3 animate-spin" /> Syncing
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last sync: {formatDate(system.lastSync)} • {system.records} records
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSync(system.id)}
                    disabled={system.status === "syncing"}
                  >
                    {system.status === "syncing" ? (
                      <>
                        <Loader2 className="mr-1 h-3 w-3 animate-spin" /> Syncing
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-1 h-3 w-3" /> Sync Now
                      </>
                    )}
                  </Button>
                </div>
              ))}
          </TabsContent>
          <TabsContent value="education" className="space-y-4 mt-4">
            {systems
              .filter((system) => system.id === "myedbc")
              .map((system) => (
                <div key={system.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <div className="font-medium flex items-center">
                      {system.name}
                      {system.status === "connected" && (
                        <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                          <Check className="mr-1 h-3 w-3" /> Connected
                        </Badge>
                      )}
                      {system.status === "disconnected" && (
                        <Badge variant="outline" className="ml-2 bg-red-50 text-red-700 border-red-200">
                          Disconnected
                        </Badge>
                      )}
                      {system.status === "syncing" && (
                        <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                          <Loader2 className="mr-1 h-3 w-3 animate-spin" /> Syncing
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Last sync: {formatDate(system.lastSync)} • {system.records} records
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSync(system.id)}
                    disabled={system.status === "syncing"}
                  >
                    {system.status === "syncing" ? (
                      <>
                        <Loader2 className="mr-1 h-3 w-3 animate-spin" /> Syncing
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-1 h-3 w-3" /> Sync Now
                      </>
                    )}
                  </Button>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() =>
            toast({
              title: "Integration Settings",
              description: "Configure integration settings and permissions",
              duration: 3000,
            })
          }
        >
          Configure Integration Settings
        </Button>
      </CardFooter>
    </Card>
  )
}
