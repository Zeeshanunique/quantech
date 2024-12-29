'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircleIcon, 
  ClockIcon, 
  XCircleIcon,
  ArrowRightOnRectangleIcon 
} from "@heroicons/react/24/outline"

interface Task {
  id: number
  title: string
  description: string
  status: 'Pending' | 'In Progress' | 'Completed'
  priority: 'Low' | 'Medium' | 'High'
  dueDate: string
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Complete Project Proposal",
    description: "Create detailed project proposal for client review",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-03-20"
  },
  {
    id: 2,
    title: "Review Code Changes",
    description: "Review pull requests and provide feedback",
    status: "Pending",
    priority: "Medium",
    dueDate: "2024-03-21"
  }
]

export default function EmployeeDashboard() {
  const router = useRouter()
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const handleLogout = () => {
    localStorage.removeItem('userRole')
    router.push('/login')
  }

  const updateTaskStatus = (taskId: number, newStatus: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ))
  }

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
    }
  }

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Low': return 'bg-green-100 text-green-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="flex items-center gap-2"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Logout
        </Button>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Tasks</p>
                <p className="text-2xl font-bold">
                  {tasks.filter(t => t.status === 'Pending').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Completed Tasks</p>
                <p className="text-2xl font-bold">
                  {tasks.filter(t => t.status === 'Completed').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <XCircleIcon className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">High Priority</p>
                <p className="text-2xl font-bold">
                  {tasks.filter(t => t.priority === 'High').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks List */}
      <Card>
        <CardHeader>
          <CardTitle>My Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {tasks.map((task) => (
              <div key={task.id} className="py-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{task.title}</h3>
                    <p className="text-sm text-gray-500">{task.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <Badge className={getStatusColor(task.status)}>
                      {task.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                  <div className="space-x-2">
                    {task.status !== 'Completed' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateTaskStatus(task.id, 'In Progress')}
                      >
                        Start
                      </Button>
                    )}
                    {task.status === 'In Progress' && (
                      <Button
                        size="sm"
                        onClick={() => updateTaskStatus(task.id, 'Completed')}
                      >
                        Complete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}