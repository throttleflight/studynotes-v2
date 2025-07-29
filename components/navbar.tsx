"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
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
            <Link href="/notes" className="text-sm font-medium text-muted-foreground">
              Notes
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground">
              About
            </Link>
          </nav>
          <div className="flex items-center ml-auto">
            <div className="mr-2 w-10 h-10" />
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
          {routes.map((route) => (
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

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden ml-2">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 mt-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}

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
