'use client'

import { Card, CardContent} from "@/components/ui/card"
import { Button } from "@/components/ui/button"





const tasks = [
  { id: 1, title: "Complete Project Proposal", assignee: "John Doe", status: "In Progress", dueDate: "2024-03-20" },
  { id: 2, title: "Review Code Changes", assignee: "Sarah Smith", status: "Pending", dueDate: "2024-03-21" },
  { id: 3, title: "Update Documentation", assignee: "Mike Johnson", status: "Completed", dueDate: "2024-03-19" }
]

export default function DashboardContent() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
        <p className="text-muted-foreground">Here's an overview of your dashboard</p>
      </header>
    
      <Card>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Assignee</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Due Date</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="bg-white border-b">
                    <td className="px-6 py-4">{task.title}</td>
                    <td className="px-6 py-4">{task.assignee}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{task.dueDate}</td>
                    <td className="px-6 py-4">
                      <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}