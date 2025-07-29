"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { checkAuthStatus } from "@/lib/auth"

interface AuthGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function AuthGuard({ children, fallback }: AuthGuardProps) {
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = checkAuthStatus()

      if (!authStatus.isAuthenticated) {
        // Redirect to early access page
        router.push("/early-access")
        return
      }

      setIsAuthenticated(true)
      setIsChecking(false)
    }

    // Small delay to prevent flash
    const timer = setTimeout(checkAuth, 100)

    return () => clearTimeout(timer)
  }, [router])

  if (isChecking) {
    return (
      fallback || (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Checking authentication...</p>
          </div>
        </div>
      )
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect via useEffect
  }

  return <>{children}</>
}
