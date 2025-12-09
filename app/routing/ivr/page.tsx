"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Save, Play, Upload } from "lucide-react"

export default function IVRFlowEditorPage() {
  return (
    <DashboardLayout title="IVR Flow Editor">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Play className="mr-2 h-4 w-4" />
              Test
            </Button>
            <Button size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Publish
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-sm">Node Palette</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Start", "Play Message", "Menu", "Collect Digits", "Route", "Transfer", "Voicemail", "Hang Up", "Condition", "HTTP", "Set Variable", "Time Check"].map((node) => (
                <div
                  key={node}
                  className="cursor-pointer rounded-md border p-2 text-sm hover:bg-accent"
                >
                  {node}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Canvas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-[600px] items-center justify-center border-2 border-dashed rounded-lg bg-muted/20">
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground">
                    Drag nodes from the palette to build your IVR flow
                  </p>
                  <p className="text-sm text-muted-foreground">
                    IVR editor with drag-and-drop functionality
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
