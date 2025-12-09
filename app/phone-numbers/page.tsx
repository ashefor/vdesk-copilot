import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import phoneNumbersData from "@/lib/mock-data/phone-numbers.json"

export default function PhoneNumbersPage() {
  return (
    <DashboardLayout title="Phone Numbers">
      <div className="space-y-4">
        <div className="flex items-center justify-end">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Buy Number
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Phone Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Number</TableHead>
                  <TableHead>Label</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Routing</TableHead>
                  <TableHead>Calls (30d)</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {phoneNumbersData.map((number) => (
                  <TableRow key={number.id}>
                    <TableCell className="font-mono font-medium">{number.number}</TableCell>
                    <TableCell>{number.label}</TableCell>
                    <TableCell className="capitalize">{number.type}</TableCell>
                    <TableCell>{number.routing}</TableCell>
                    <TableCell>{number.calls_30d.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        {number.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
