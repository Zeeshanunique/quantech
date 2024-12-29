'use client'

import { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

const adminNavigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Employees', href: '/employees', icon: UsersIcon },
  { name: 'Tasks', href: '/tasks', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Fixed Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r shadow-lg z-50">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-4 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Quantech</span>
            </Link>
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            {adminNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-2 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <UserCircleIcon className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="pl-64">
        {/* Fixed Header */}
        <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b flex items-center justify-between px-6 z-40">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <BellIcon className="h-6 w-6" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="pt-16 min-h-screen bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}