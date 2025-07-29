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
import { checkAuthStatus, logout } from "@/lib/auth"

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [authStatus, setAuthStatus] = useState<{ isAuthenticated: boolean; method: "login" | "early-access" | null }>({
    isAuthenticated: false,
    method: null,
  })

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
    // Check authentication status
    const status = checkAuthStatus()
    setAuthStatus(status)
  }, [])

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
    logout()
    setAuthStatus({ isAuthenticated: false, method: null })
    router.push("/")
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
            <div className="mr-2 w-10 h-10" /> {/* Placeholder for theme button */}
            <div className="w-20 h-10" /> {/* Placeholder for auth button */}
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
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem disabled>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Signed in via</p>
                    <p className="text-xs text-muted-foreground">
                      {authStatus.method === "login" ? "Regular Login" : "Early Access"}
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" className="hidden md:block">
              <Button variant="outline">Sign In</Button>
            </Link>
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
                      <p className="text-sm text-muted-foreground mb-2">
                        Signed in via {authStatus.method === "login" ? "Regular Login" : "Early Access"}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLogout}
                        className="w-full justify-start bg-transparent"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  </>
                ) : (
                  <Link href="/login" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Sign In
                  </Link>
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
