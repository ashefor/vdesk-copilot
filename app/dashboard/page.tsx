import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, CheckCircle, Clock, PhoneMissed } from "lucide-react"
import analyticsData from "@/lib/mock-data/analytics.json"
import ticketsData from "@/lib/mock-data/tickets.json"

export default function DashboardPage() {
  const { kpis, call_volume_weekly, response_time_trend } = analyticsData

  const kpiCards = [
    {
      title: "Total Calls",
      value: kpis.total_calls.toLocaleString(),
      icon: Phone,
      color: "text-blue-600",
    },
    {
      title: "Resolved Tickets",
      value: kpis.resolved_tickets.toLocaleString(),
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Avg Response Time",
      value: `${kpis.avg_response_time}s`,
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Missed Calls",
      value: kpis.missed_calls.toLocaleString(),
      icon: PhoneMissed,
      color: "text-red-600",
    },
  ]

  const recentTickets = ticketsData.slice(0, 10)

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpiCards.map((kpi) => {
            const Icon = kpi.icon
            return (
              <Card key={kpi.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {kpi.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${kpi.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpi.value}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts Row */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Weekly Call Volume */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Call Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-end justify-around gap-2">
                {call_volume_weekly.map((data) => (
                  <div key={data.day} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-full bg-primary rounded-t"
                      style={{ height: `${(data.calls / 800) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{data.day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Average Response Time */}
          <Card>
            <CardHeader>
              <CardTitle>Average Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-end justify-around gap-2">
                {response_time_trend.map((data, index) => (
                  <div key={data.date} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-full bg-blue-500 rounded-t"
                      style={{ height: `${(data.time / 300) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{data.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Tickets */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center justify-between border-b pb-3 last:border-0"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{ticket.id}</span>
                      <span className="text-sm">{ticket.subject}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{ticket.caller}</span>
                      <span>•</span>
                      <span>{ticket.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        ticket.status === "open"
                          ? "bg-blue-100 text-blue-700"
                          : ticket.status === "in_progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : ticket.status === "resolved"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {ticket.status.replace("_", " ")}
                    </span>
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        ticket.priority === "urgent"
                          ? "bg-red-100 text-red-700"
                          : ticket.priority === "high"
                          ? "bg-orange-100 text-orange-700"
                          : ticket.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
