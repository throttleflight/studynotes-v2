import { ProductionSecurityNotice, RecommendedSolutions } from "@/components/production-security-notice"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Code, Database, Lock, Server, Shield, AlertTriangle } from "lucide-react"

export default function SecurityInfoPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Security Information</h1>
          <p className="text-muted-foreground">
            Understanding the security implications of this demo application and how to implement proper authentication
            in production.
          </p>
        </div>

        <ProductionSecurityNotice />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-5 w-5" />
                Demo Vulnerabilities
              </CardTitle>
              <CardDescription>What makes this system insecure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Code className="h-4 w-4 mt-1 text-red-500" />
                <div>
                  <p className="font-medium text-sm">Client-Side Storage</p>
                  <p className="text-xs text-muted-foreground">All data stored in browser localStorage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="h-4 w-4 mt-1 text-red-500" />
                <div>
                  <p className="font-medium text-sm">Weak Encryption</p>
                  <p className="text-xs text-muted-foreground">Base64 encoding, not real encryption</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Server className="h-4 w-4 mt-1 text-red-500" />
                <div>
                  <p className="font-medium text-sm">No Server Validation</p>
                  <p className="text-xs text-muted-foreground">All authentication runs in browser</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="h-4 w-4 mt-1 text-red-500" />
                <div>
                  <p className="font-medium text-sm">Exposed Logic</p>
                  <p className="text-xs text-muted-foreground">Source code reveals all security methods</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Shield className="h-5 w-5" />
                Production Requirements
              </CardTitle>
              <CardDescription>What you need for real security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Server className="h-4 w-4 mt-1 text-green-500" />
                <div>
                  <p className="font-medium text-sm">Server-Side Auth</p>
                  <p className="text-xs text-muted-foreground">Authentication handled on secure servers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="h-4 w-4 mt-1 text-green-500" />
                <div>
                  <p className="font-medium text-sm">Secure Database</p>
                  <p className="text-xs text-muted-foreground">Encrypted storage with proper access controls</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="h-4 w-4 mt-1 text-green-500" />
                <div>
                  <p className="font-medium text-sm">Strong Encryption</p>
                  <p className="text-xs text-muted-foreground">bcrypt, Argon2, or similar password hashing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-4 w-4 mt-1 text-green-500" />
                <div>
                  <p className="font-medium text-sm">Environment Secrets</p>
                  <p className="text-xs text-muted-foreground">API keys and secrets in environment variables</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <RecommendedSolutions />

        <Card>
          <CardHeader>
            <CardTitle>How Attackers Could Access Your Data</CardTitle>
            <CardDescription>Understanding the attack vectors in this demo system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium">1. Browser Console Access</h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                <div className="text-green-600"># Anyone can run this in browser console:</div>
                <div>localStorage.getItem('secure_users_encrypted')</div>
                <div>atob(result) // Decodes all user data</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">2. GitHub Repository Access</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Clone repository and run locally</li>
                <li>• See all authentication logic and methods</li>
                <li>• Modify code to bypass security checks</li>
                <li>• Extract and analyze password hashing algorithm</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">3. Network Inspection</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• All data transmitted to/from localStorage</li>
                <li>• No server-side validation to verify requests</li>
                <li>• Cookies can be inspected and modified</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            This demo is for educational purposes only. Never use client-side authentication for real applications.
          </p>
          <Link href="/">
            <Button>Return to Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
