'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

import {employeesList,adminCredentials} from "./credentials"


export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleLogin = (role: 'admin' | 'employee') => {
    if (role === 'admin') {
      if (formData.username === adminCredentials.username && 
          formData.password === adminCredentials.password) {
        localStorage.setItem('userRole', 'admin')
        localStorage.setItem('userName', 'Administrator')
        router.push('/admin/dashboard')
      } else {
        toast.error('Invalid admin credentials')
      }
    } else {
      const employee = employeesList.find(emp => 
        emp.username === formData.username && 
        emp.password === formData.password
      )

      if (employee) {
        localStorage.setItem('userRole', 'employee')
        localStorage.setItem('userName', employee.name)
        localStorage.setItem('employeeId', employee.id.toString())
        router.push('/employee/dashboard')
      } else {
        toast.error('Invalid employee credentials')
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="employee" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="employee">Employee Login</TabsTrigger>
              <TabsTrigger value="admin">Admin Login</TabsTrigger>
            </TabsList>

            <TabsContent value="employee">
              <form onSubmit={(e) => { e.preventDefault(); handleLogin('employee'); }} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Username</label>
                  <Input 
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input 
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Login as Employee</Button>
              </form>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium mb-2">Demo Employee Accounts:</p>
                {employeesList.map(emp => (
                  <div key={emp.id} className="text-xs text-gray-600 mb-1">
                    Username: {emp.username} | Password: {emp.password}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="admin">
              <form onSubmit={(e) => { e.preventDefault(); handleLogin('admin'); }} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Admin Username</label>
                  <Input 
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Admin Password</label>
                  <Input 
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Login as Admin</Button>
              </form>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium mb-2">Demo Admin Account:</p>
                <div className="text-xs text-gray-600">
                  Username: {adminCredentials.username} | Password: {adminCredentials.password}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}  