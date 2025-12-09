"use client"

import * as React from "react"
import { Bell, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AppHeaderProps {
  title: string
  breadcrumbs?: { label: string; href?: string }[]
}

export function AppHeader({ title, breadcrumbs }: AppHeaderProps) {
  const [connectionStatus, setConnectionStatus] = React.useState<
    "connected" | "disconnected" | "connecting"
  >("connected")

  const statusConfig = {
    connected: {
      color: "bg-green-500",
      label: "Connected",
    },
    disconnected: {
      color: "bg-red-500",
      label: "Disconnected",
    },
    connecting: {
      color: "bg-yellow-500",
      label: "Connecting...",
    },
  }

  const status = statusConfig[connectionStatus]

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-background px-4">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="h-4 w-4" />
                <span>{crumb.label}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* WebRTC Connection Status */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2">
              <span className={cn("h-2 w-2 rounded-full", status.color)} />
              <span className="hidden md:inline">{status.label}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Connection Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="px-2 py-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-medium">{status.label}</span>
              </div>
              <div className="mt-1 flex justify-between">
                <span className="text-muted-foreground">Ping:</span>
                <span className="font-medium">45ms</span>
              </div>
              <div className="mt-1 flex justify-between">
                <span className="text-muted-foreground">Quality:</span>
                <span className="font-medium">Excellent</span>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Retry Connection</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Dialpad Button */}
        <Button variant="ghost" size="icon">
          <Phone className="h-4 w-4" />
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="font-medium">New ticket assigned</div>
                <div className="text-xs text-muted-foreground">
                  TKT-1045 has been assigned to you
                </div>
                <div className="text-xs text-muted-foreground">2 minutes ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="font-medium">Missed call</div>
                <div className="text-xs text-muted-foreground">
                  +234 801 234 5678
                </div>
                <div className="text-xs text-muted-foreground">15 minutes ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="font-medium">SLA breach warning</div>
                <div className="text-xs text-muted-foreground">
                  TKT-1032 will breach SLA in 30 minutes
                </div>
                <div className="text-xs text-muted-foreground">1 hour ago</div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Avatar */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Avatar className="h-8 w-8">
                <AvatarFallback>CO</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
