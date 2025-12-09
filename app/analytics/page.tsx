import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, CheckCircle, Clock, PhoneMissed, TrendingUp } from "lucide-react"
import analyticsData from "@/lib/mock-data/analytics.json"

export default function AnalyticsPage() {
  const { kpis, call_volume_weekly, response_time_trend } = analyticsData

  return (
    <DashboardLayout title="Analytics">
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
              <Phone className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpis.total_calls.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved Tickets</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpis.resolved_tickets.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +8% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpis.avg_response_time}s</div>
              <p className="text-xs text-muted-foreground">
                -5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Missed Calls</CardTitle>
              <PhoneMissed className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpis.missed_calls.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                -3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Call Volume by Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-end justify-around gap-2">
                {call_volume_weekly.map((data) => (
                  <div key={data.day} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-full bg-primary rounded-t"
                      style={{ height: `${(data.calls / 800) * 100}%` }}
                    />
                    <div className="text-center">
                      <div className="text-xs font-medium">{data.day}</div>
                      <div className="text-xs text-muted-foreground">{data.calls}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-end justify-around gap-2">
                {response_time_trend.map((data) => (
                  <div key={data.date} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-full bg-blue-500 rounded-t"
                      style={{ height: `${(data.time / 300) * 100}%` }}
                    />
                    <div className="text-center">
                      <div className="text-xs font-medium">{data.date}</div>
                      <div className="text-xs text-muted-foreground">{data.time}s</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
