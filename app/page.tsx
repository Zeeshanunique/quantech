'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const userRole = localStorage.getItem('userRole')
    
    if (!userRole) {
      router.push('/login')
      return
    }

    if (userRole === 'admin') {
      router.push('/admin/dashboard')
    } else {
      router.push('/employee/dashboard')
    }
  }, [router])

  return null
}