import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertTriangle, Lock, Server, Database, Key } from "lucide-react"

export function ProductionSecurityNotice() {
  return (
    <div className="space-y-4 mb-6">
      <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
        <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
        <AlertDescription className="text-red-800 dark:text-red-200">
          <strong>⚠️ SECURITY WARNING:</strong> This demo system is NOT secure for production use. User data is stored
          client-side and can be accessed by anyone with the GitHub repository or browser access.
        </AlertDescription>
      </Alert>

      <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
        <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <strong>For Production Security, Use:</strong>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <Server className="h-3 w-3" />
              Server-side authentication (NextAuth.js, Auth0, Supabase)
            </li>
            <li className="flex items-center gap-2">
              <Database className="h-3 w-3" />
              Secure database storage (PostgreSQL, MongoDB)
            </li>
            <li className="flex items-center gap-2">
              <Lock className="h-3 w-3" />
              Proper encryption (bcrypt, Argon2)
            </li>
            <li className="flex items-center gap-2">
              <Key className="h-3 w-3" />
              Environment variables for secrets
            </li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
        <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>Current Vulnerabilities:</strong>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Passwords stored in browser localStorage (accessible to anyone)</li>
            <li>• Weak base64 "encryption" (easily decoded)</li>
            <li>• Client-side only validation (can be bypassed)</li>
            <li>• Source code exposes all security logic</li>
            <li>• No rate limiting or brute force protection</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function RecommendedSolutions() {
  const solutions = [
    {
      name: "NextAuth.js",
      description: "The most popular authentication library for Next.js",
      features: ["OAuth providers", "JWT tokens", "Session management", "TypeScript support"],
      link: "https://next-auth.js.org/",
    },
    {
      name: "Supabase Auth",
      description: "Complete authentication solution with database",
      features: ["Email/password auth", "Social logins", "Row Level Security", "Real-time subscriptions"],
      link: "https://supabase.com/auth",
    },
    {
      name: "Auth0",
      description: "Enterprise-grade authentication platform",
      features: ["Multi-factor auth", "Single sign-on", "Advanced security", "Compliance ready"],
      link: "https://auth0.com/",
    },
    {
      name: "Clerk",
      description: "Modern authentication with great developer experience",
      features: ["Pre-built components", "User management", "Organizations", "Webhooks"],
      link: "https://clerk.com/",
    },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Recommended Production Solutions:</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {solutions.map((solution) => (
          <div key={solution.name} className="border rounded-lg p-4 space-y-2">
            <h4 className="font-medium text-primary">{solution.name}</h4>
            <p className="text-sm text-muted-foreground">{solution.description}</p>
            <ul className="text-xs space-y-1">
              {solution.features.map((feature) => (
                <li key={feature} className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={solution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
