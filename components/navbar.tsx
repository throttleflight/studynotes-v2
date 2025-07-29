"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BookOpen, Menu, Moon, Sun, LogOut, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { checkAuthStatus, logout, getCurrentUser } from "@/lib/auth"

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [authStatus, setAuthStatus] = useState<{
    isAuthenticated: boolean
    method: "login" | "early-access" | null
    user?: { name: string; email: string } | null
  }>({
    isAuthenticated: false,
    method: null,
    user: null,
  })

  // Function to update auth status
  const updateAuthStatus = () => {
    try {
      const status = checkAuthStatus()
      const user = getCurrentUser()
      setAuthStatus({
        ...status,
        user,
      })
    } catch (error) {
      console.warn("Error updating auth status:", error)
      // Reset to unauthenticated state on error
      setAuthStatus({
        isAuthenticated: false,
        method: null,
        user: null,
      })
    }
  }

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
    updateAuthStatus()

    // Listen for auth changes (custom event)
    const handleAuthChange = () => {
      // Small delay to ensure cookies are updated
      setTimeout(updateAuthStatus, 150)
    }

    window.addEventListener("authStateChanged", handleAuthChange)

    return () => {
      window.removeEventListener("authStateChanged", handleAuthChange)
    }
  }, [])

  // Update auth status when pathname changes (after navigation)
  useEffect(() => {
    if (mounted) {
      setTimeout(updateAuthStatus, 100)
    }
  }, [pathname, mounted])

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/notes",
      label: "Notes",
      active: pathname === "/notes" || pathname.startsWith("/notes/"),
      requiresAuth: true,
    },
    {
      href: "/early-access",
      label: "Early Access",
      active: pathname === "/early-access",
      hideWhenAuthenticated: true,
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ]

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  const handleLogout = () => {
    try {
      logout()
      setAuthStatus({ isAuthenticated: false, method: null, user: null })
      router.push("/")
    } catch (error) {
      console.error("Error during logout:", error)
      // Force reset state even if logout fails
      setAuthStatus({ isAuthenticated: false, method: null, user: null })
      router.push("/")
    }
  }

  const visibleRoutes = routes.filter((route) => {
    if (route.requiresAuth && !authStatus.isAuthenticated) return false
    if (route.hideWhenAuthenticated && authStatus.isAuthenticated) return false
    return true
  })

  // Don't render the theme toggle until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-6 w-6" />
            <span>Study Notes</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 ml-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground">
              About
            </Link>
          </nav>
          <div className="flex items-center ml-auto">
            <div className="mr-2 w-10 h-10" /> {/* Placeholder for theme button */}
            <div className="w-32 h-10" /> {/* Placeholder for auth buttons */}
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span>Study Notes</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 ml-6">
          {visibleRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                route.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center ml-auto">
          <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="mr-2" onClick={toggleTheme}>
            {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {authStatus.isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
                  <User className="h-4 w-4 mr-2" />
                  {authStatus.user?.name || "Account"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {authStatus.user && (
                  <>
                    <DropdownMenuItem disabled>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{authStatus.user.name}</p>
                        <p className="text-xs text-muted-foreground">{authStatus.user.email}</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem disabled>
                  <div className="flex flex-col space-y-1">
                    <p className="text-xs text-muted-foreground">Signed in via</p>
                    <p className="text-xs font-medium">
                      {authStatus.method === "login" ? "Regular Login" : "Early Access"}
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden ml-2">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 mt-6">
                {visibleRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}

                {authStatus.isAuthenticated ? (
                  <>
                    <div className="pt-4 border-t">
                      {authStatus.user && (
                        <div className="mb-4">
                          <p className="text-sm font-medium">{authStatus.user.name}</p>
                          <p className="text-xs text-muted-foreground">{authStatus.user.email}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Signed in via {authStatus.method === "login" ? "Regular Login" : "Early Access"}
                          </p>
                        </div>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          handleLogout()
                          setIsOpen(false)
                        }}
                        className="w-full justify-start bg-transparent text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="pt-4 border-t space-y-3">
                    <Link href="/login" className="block" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" className="block" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-full justify-start">
                    {resolvedTheme === "dark" ? (
                      <>
                        <Sun className="h-4 w-4 mr-2" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4 mr-2" />
                        Dark Mode
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
