'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "@heroicons/react/24/outline"

const employees = [
  { 
    id: 1, 
    name: "John Doe", 
    email: "john@example.com",
    department: "Engineering",
    role: "Frontend Developer",
    status: "Active"
  },
  { 
    id: 2, 
    name: "Sarah Smith", 
    email: "sarah@example.com",
    department: "Design",
    role: "UI Designer",
    status: "Active"
  },
  { 
    id: 3, 
    name: "Mike Johnson", 
    email: "mike@example.com",
    department: "Engineering",
    role: "Backend Developer",
    status: "On Leave"
  }
]

export default function Employees() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Employees</h1>
          <p className="text-muted-foreground">Manage your team members</p>
        </div>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <Input 
          placeholder="Search employees..." 
          className="max-w-sm"
        />
        <Button variant="outline">Filter</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="bg-white border-b">
                    <td className="px-6 py-4 font-medium">{employee.name}</td>
                    <td className="px-6 py-4">{employee.email}</td>
                    <td className="px-6 py-4">{employee.department}</td>
                    <td className="px-6 py-4">{employee.role}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        employee.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {employee.status}
                      </span>
                    </td>
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