"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { BookOpen, Menu, Moon, Sun, LogOut, User, Shield } from "lucide-react"

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

export function NavbarSecure() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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
      href: "/security-info",
      label: "Security Info",
      active: pathname === "/security-info",
      icon: Shield,
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

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" })
    } catch (error) {
      console.error("Error during logout:", error)
      router.push("/")
    }
  }

  const visibleRoutes = routes.filter((route) => {
    if (route.requiresAuth && !session) return false
    if (route.hideWhenAuthenticated && session) return false
    return true
  })

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
            <Link href="/security-info" className="text-sm font-medium text-muted-foreground">
              Security Info
            </Link>
          </nav>
          <div className="flex items-center ml-auto">
            <div className="mr-2 w-10 h-10" />
            <div className="w-32 h-10" />
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
              className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                route.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {route.icon && <route.icon className="h-4 w-4" />}
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center ml-auto">
          <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="mr-2" onClick={toggleTheme}>
            {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {status === "loading" ? (
            <div className="w-32 h-10 bg-muted animate-pulse rounded" />
          ) : session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
                  <User className="h-4 w-4 mr-2" />
                  {session.user?.name || "Account"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem disabled>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{session.user?.name}</p>
                    <p className="text-xs text-muted-foreground">{session.user?.email}</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>
                  <div className="flex flex-col space-y-1">
                    <p className="text-xs text-muted-foreground">Early Access User</p>
                    <p className="text-xs font-medium text-green-600">✓ Authenticated</p>
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
              <Link href="/early-access">
                <Button>Get Early Access</Button>
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
                    className="text-lg font-medium flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.icon && <route.icon className="h-5 w-5" />}
                    {route.label}
                  </Link>
                ))}

                {session ? (
                  <div className="pt-4 border-t">
                    <div className="mb-4">
                      <p className="text-sm font-medium">{session.user?.name}</p>
                      <p className="text-xs text-muted-foreground">{session.user?.email}</p>
                      <p className="text-xs text-green-600 mt-1">✓ Early Access User</p>
                    </div>
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
                ) : (
                  <div className="pt-4 border-t space-y-3">
                    <Link href="/early-access" className="block" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Get Early Access</Button>
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
