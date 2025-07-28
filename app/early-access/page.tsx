"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, Loader2, ArrowRight, Mail, Key } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { requestAccess, validateAccessCode } from "@/lib/early-access"

export default function EarlyAccessPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [accessCode, setAccessCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [requestStatus, setRequestStatus] = useState<"idle" | "success" | "error">("idle")
  const [accessStatus, setAccessStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleRequestAccess(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setRequestStatus("idle")
    setErrorMessage("")

    try {
      // In a real app, this would send the request to a database or API
      const success = await requestAccess(email)

      if (success) {
        setRequestStatus("success")
      } else {
        setRequestStatus("error")
        setErrorMessage("There was a problem processing your request. Please try again.")
      }
    } catch (err) {
      setRequestStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again later.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleAccessCode(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setAccessStatus("idle")
    setErrorMessage("")

    try {
      // In a real app, this would validate the access code against a database
      const success = await validateAccessCode(email, accessCode)

      if (success) {
        setAccessStatus("success")
        // Redirect to the notes page after a short delay
        setTimeout(() => {
          router.push("/notes")
        }, 1500)
      } else {
        setAccessStatus("error")
        setErrorMessage("Invalid email or access code. Please check and try again.")
      }
    } catch (err) {
      setAccessStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again later.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center">Early Access</CardTitle>
          <CardDescription className="text-center">
            Request access to the study notes platform or sign in with your invitation code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="request" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="request">Request Access</TabsTrigger>
              <TabsTrigger value="access">Have a Code</TabsTrigger>
            </TabsList>
            <TabsContent value="request">
              {requestStatus === "success" ? (
                <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900">
                  <div className="flex flex-col space-y-2 items-center text-center p-2">
                    <Mail className="h-6 w-6 mb-2" />
                    <AlertDescription className="font-medium">
                      Thank you for your interest! We&apos;ve received your request.
                    </AlertDescription>
                    <p className="text-sm">
                      We&apos;ll send an invitation code to {email} when a spot becomes available.
                    </p>
                  </div>
                </Alert>
              ) : (
                <form onSubmit={handleRequestAccess} className="space-y-4">
                  {requestStatus === "error" && (
                    <Alert variant="destructive">
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="request-email">Email</Label>
                    <Input
                      id="request-email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                      </>
                    ) : (
                      <>
                        Request Early Access <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </TabsContent>
            <TabsContent value="access">
              {accessStatus === "success" ? (
                <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900">
                  <div className="flex flex-col space-y-2 items-center text-center p-2">
                    <Key className="h-6 w-6 mb-2" />
                    <AlertDescription className="font-medium">Access granted!</AlertDescription>
                    <p className="text-sm">Redirecting you to the notes dashboard...</p>
                    <Loader2 className="h-4 w-4 animate-spin mt-2" />
                  </div>
                </Alert>
              ) : (
                <form onSubmit={handleAccessCode} className="space-y-4">
                  {accessStatus === "error" && (
                    <Alert variant="destructive">
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="access-email">Email</Label>
                    <Input
                      id="access-email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="access-code">Access Code</Label>
                    <Input
                      id="access-code"
                      type="text"
                      placeholder="Enter your access code"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying
                      </>
                    ) : (
                      "Access Platform"
                    )}
                  </Button>
                </form>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:underline">
              Back to home
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
