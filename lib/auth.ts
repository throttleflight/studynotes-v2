// This is a mock authentication service
// In a real app, you would use a proper authentication system

// Mock user database
const users = [
  {
    id: "1",
    email: "user@example.com",
    // In a real app, this would be hashed
    password: "password123",
    name: "Demo User",
  },
]

// Mock authentication state
let currentUser: { id: string; email: string; name: string } | null = null

export async function login(email: string, password: string): Promise<boolean> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const user = users.find((u) => u.email === email && u.password === password)

  if (user) {
    // Set the current user (in a real app, this would set a cookie or token)
    currentUser = {
      id: user.id,
      email: user.email,
      name: user.name,
    }

    // Set authentication cookie
    if (typeof document !== "undefined") {
      document.cookie = `auth-token=${user.id}; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
    }

    return true
  }

  return false
}

export function logout(): void {
  currentUser = null

  // Clear authentication cookies
  if (typeof document !== "undefined") {
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    document.cookie = "early-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  }
}

export function getCurrentUser() {
  return currentUser
}

export function isAuthenticated(): boolean {
  // Check for authentication cookie
  if (typeof document !== "undefined") {
    const authToken = document.cookie.split("; ").find((row) => row.startsWith("auth-token="))
    const earlyAccessToken = document.cookie.split("; ").find((row) => row.startsWith("early-access-token="))

    return !!(authToken || earlyAccessToken)
  }

  return currentUser !== null
}

export function checkAuthStatus(): { isAuthenticated: boolean; method: "login" | "early-access" | null } {
  if (typeof document !== "undefined") {
    const authToken = document.cookie.split("; ").find((row) => row.startsWith("auth-token="))
    const earlyAccessToken = document.cookie.split("; ").find((row) => row.startsWith("early-access-token="))

    if (authToken) {
      return { isAuthenticated: true, method: "login" }
    }
    if (earlyAccessToken) {
      return { isAuthenticated: true, method: "early-access" }
    }
  }

  return { isAuthenticated: false, method: null }
}
