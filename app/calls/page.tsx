import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Phone, PhoneIncoming, PhoneOutgoing } from "lucide-react"
import callsData from "@/lib/mock-data/calls.json"

export default function CallsPage() {
  return (
    <DashboardLayout title="Calls">
      <Card>
        <CardHeader>
          <CardTitle>Recent Calls</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Direction</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {callsData.slice(0, 25).map((call) => (
                <TableRow key={call.id}>
                  <TableCell className="font-mono text-sm">{call.id}</TableCell>
                  <TableCell>
                    {call.direction === "inbound" ? (
                      <div className="flex items-center gap-2">
                        <PhoneIncoming className="h-4 w-4 text-blue-600" />
                        <span>Inbound</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <PhoneOutgoing className="h-4 w-4 text-green-600" />
                        <span>Outbound</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-mono text-sm">{call.from}</TableCell>
                  <TableCell className="font-mono text-sm">{call.to}</TableCell>
                  <TableCell>{Math.floor(call.duration / 60)}m {call.duration % 60}s</TableCell>
                  <TableCell>
                    <Badge className={
                      call.status === "completed" ? "bg-green-100 text-green-700 hover:bg-green-100" :
                      call.status === "missed" ? "bg-red-100 text-red-700 hover:bg-red-100" :
                      "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                    }>
                      {call.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(call.timestamp).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
