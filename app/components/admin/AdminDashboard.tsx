'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  UsersIcon, 
  ClipboardDocumentListIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon 
} from "@heroicons/react/24/outline"

const stats = [
  { 
    title: 'Total Employees', 
    value: '12', 
    icon: UsersIcon,
    change: '+2 from last month'
  },
  { 
    title: 'Active Tasks', 
    value: '25', 
    icon: ClipboardDocumentListIcon,
    change: '+5 from last week'
  },
  { 
    title: 'Completion Rate', 
    value: '85%', 
    icon: ChartBarIcon,
    change: '+10% from last month'
  }
]

export default function AdminDashboard() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('userRole')
    router.push('/login')
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin</p>
        </div>
        <div className="flex gap-4">
          <Button>Generate Report</Button>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add recent activity content */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add task overview content */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}