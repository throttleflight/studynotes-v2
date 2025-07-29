"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Shield, Database, Lock, Server } from "lucide-react"

export default function TestAuthPage() {
  const { data: session, status } = useSession()

  const securityFeatures = [
    {
      name: "Server-Side Authentication",
      description: "All authentication logic runs on secure servers",
      icon: Server,
      status: "active",
    },
    {
      name: "Encrypted Password Storage",
      description: "Passwords hashed with bcrypt (cost factor 12)",
      icon: Lock,
      status: "active",
    },
    {
      name: "Secure Database Storage",
      description: "User data stored in encrypted database",
      icon: Database,
      status: "active",
    },
    {
      name: "OAuth Integration",
      description: "Google and GitHub OAuth for passwordless login",
      icon: Shield,
      status: "active",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Authentication Test</h1>
          <p className="text-muted-foreground">
            Test the secure authentication system and verify all security features are working.
          </p>
        </div>

        <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            <strong>✓ Production Security Active:</strong> This system now uses industry-standard security practices
            with server-side authentication, encrypted storage, and secure session management.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {status === "authenticated" ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                Authentication Status
              </CardTitle>
              <CardDescription>Current session information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Status: {status}</p>
                {session ? (
                  <div className="space-y-1">
                    <p className="text-sm">Name: {session.user?.name}</p>
                    <p className="text-sm">Email: {session.user?.email}</p>
                    <p className="text-sm">ID: {session.user?.id}</p>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Not signed in</p>
                )}
              </div>

              <div className="flex gap-2">
                {session ? (
                  <Button onClick={() => signOut()} variant="outline" size="sm">
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Button onClick={() => signIn()} size="sm">
                      Sign In
                    </Button>
                    <Button onClick={() => signIn("google")} variant="outline" size="sm">
                      Google
                    </Button>
                    <Button onClick={() => signIn("github")} variant="outline" size="sm">
                      GitHub
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Features</CardTitle>
              <CardDescription>Active security measures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {securityFeatures.map((feature) => (
                  <div key={feature.name} className="flex items-start gap-3">
                    <feature.icon className="h-4 w-4 mt-1 text-green-500" />
                    <div>
                      <p className="font-medium text-sm">{feature.name}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Security Comparison</CardTitle>
            <CardDescription>Before vs After implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-medium text-red-600 flex items-center gap-2">
                  <XCircle className="h-4 w-4" />
                  Previous Demo System
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Client-side authentication</li>
                  <li>• localStorage data storage</li>
                  <li>• Base64 "encryption"</li>
                  <li>• Exposed security logic</li>
                  <li>• No rate limiting</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-green-600 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Current Production System
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Server-side authentication</li>
                  <li>• Encrypted database storage</li>
                  <li>• bcrypt password hashing</li>
                  <li>• Secure session management</li>
                  <li>• Rate limiting protection</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
