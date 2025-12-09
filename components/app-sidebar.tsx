"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Ticket,
  Phone,
  GitBranch,
  PhoneCall,
  Users,
  BarChart3,
  UserCog,
  Settings,
  CreditCard,
  ChevronDown,
  ChevronRight,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import * as Collapsible from "@radix-ui/react-collapsible"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    items: [],
  },
  {
    title: "Tickets",
    icon: Ticket,
    href: "/tickets",
    items: [
      { title: "All Tickets", href: "/tickets" },
      { title: "My Tickets", href: "/tickets/my" },
      { title: "Unassigned", href: "/tickets/unassigned" },
    ],
  },
  {
    title: "Calls",
    icon: Phone,
    href: "/calls",
    items: [
      { title: "Recent Calls", href: "/calls" },
      { title: "Missed Calls", href: "/calls/missed" },
      { title: "Voicemail", href: "/calls/voicemail" },
    ],
  },
  {
    title: "Call Routing",
    icon: GitBranch,
    href: "/routing",
    items: [
      { title: "IVR Flows", href: "/routing/ivr" },
      { title: "Routing Rules", href: "/routing/rules" },
      { title: "Queues", href: "/routing/queues" },
    ],
  },
  {
    title: "Phone Numbers",
    icon: PhoneCall,
    href: "/phone-numbers",
    items: [
      { title: "All Numbers", href: "/phone-numbers" },
      { title: "Buy Number", href: "/phone-numbers/buy" },
    ],
  },
  {
    title: "Contacts",
    icon: Users,
    href: "/contacts",
    items: [
      { title: "All Contacts", href: "/contacts" },
      { title: "Companies", href: "/contacts/companies" },
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    items: [
      { title: "Overview", href: "/analytics" },
      { title: "Agent Performance", href: "/analytics/agents" },
      { title: "Call Analytics", href: "/analytics/calls" },
    ],
  },
  {
    title: "Team",
    icon: UserCog,
    href: "/team",
    items: [
      { title: "All Agents", href: "/team" },
      { title: "Roles & Permissions", href: "/team/roles" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    items: [
      { title: "General", href: "/settings" },
      { title: "Languages", href: "/settings/languages" },
      { title: "Notifications", href: "/settings/notifications" },
      { title: "Integrations", href: "/settings/integrations" },
    ],
  },
  {
    title: "Billing",
    icon: CreditCard,
    href: "/billing",
    items: [
      { title: "Subscription", href: "/billing" },
      { title: "Usage", href: "/billing/usage" },
      { title: "Invoices", href: "/billing/invoices" },
    ],
  },
]

interface AppSidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function AppSidebar({ isCollapsed, onToggle }: AppSidebarProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])

  const toggleItem = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    )
  }

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex h-14 items-center justify-between border-b px-3">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
              VD
            </div>
            <span className="font-semibold">VDesk</span>
          </div>
        )}
        <Button variant="ghost" size="icon" onClick={onToggle}>
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            const isExpanded = expandedItems.includes(item.title)
            const hasSubItems = item.items.length > 0

            if (!hasSubItems) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isCollapsed && "justify-center"
                  )}
                  title={isCollapsed ? item.title : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              )
            }

            return (
              <Collapsible.Root
                key={item.title}
                open={isExpanded && !isCollapsed}
                onOpenChange={() => !isCollapsed && toggleItem(item.title)}
              >
                <Collapsible.Trigger asChild>
                  <button
                    className={cn(
                      "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      isCollapsed && "justify-center"
                    )}
                    title={isCollapsed ? item.title : undefined}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left">{item.title}</span>
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </button>
                </Collapsible.Trigger>
                {!isCollapsed && (
                  <Collapsible.Content className="ml-6 mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors",
                          pathname === subItem.href
                            ? "bg-primary/10 text-primary"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </Collapsible.Content>
                )}
              </Collapsible.Root>
            )
          })}
        </nav>
      </ScrollArea>

      {/* Footer - User Profile */}
      <div className="border-t p-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3",
                isCollapsed && "justify-center px-0"
              )}
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback>CO</AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="flex flex-1 flex-col items-start text-left text-sm">
                  <span className="font-medium">Chidi Okonkwo</span>
                  <span className="text-xs text-muted-foreground">
                    chidi@company.com
                  </span>
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
