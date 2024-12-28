'use client'
import { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon
} from '@heroicons/react/24/outline';

const adminNavigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Employees', href: '/employees', icon: UsersIcon },
  { name: 'Tasks', href: '/tasks', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

const employeeNavigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'My Tasks', href: '/my-tasks', icon: ChartBarIcon },
  { name: 'Profile', href: '/profile', icon: UsersIcon },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAdmin = true; // Replace with actual auth logic
  const navigation = isAdmin ? adminNavigation : employeeNavigation;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-white 
        border-r border-gray-200 transform transition-transform duration-200 ease-in-out`}>
        <div className="flex items-center h-16 px-4 border-b border-gray-200">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Quantech</span>
          </Link>
        </div>

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

        <nav className="px-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-2 py-2 text-gray-600 rounded-lg hover:bg-gray-100 group"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <BellIcon className="h-6 w-6" />
            </button>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}