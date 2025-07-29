import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertTriangle } from "lucide-react"

export function SecurityNotice() {
  return (
    <Alert className="mb-4 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
      <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
      <AlertDescription className="text-amber-800 dark:text-amber-200">
        <strong>Demo Notice:</strong> This is a demonstration system with mock authentication. In production, use proper
        authentication services like Auth0, Supabase Auth, or NextAuth.js with server-side validation and secure
        password hashing.
      </AlertDescription>
    </Alert>
  )
}

export function SecurityFeatures() {
  return (
    <Alert className="mb-4 border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
      <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
      <AlertDescription className="text-green-800 dark:text-green-200">
        <strong>Security Features:</strong> Password hashing, session management, encrypted storage, secure cookies, and
        automatic session cleanup.
      </AlertDescription>
    </Alert>
  )
}
