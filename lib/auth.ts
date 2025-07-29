// This is a mock authentication service
// In a real app, you would use a proper authentication system

interface User {
  id: string
  email: string
  password: string
  name: string
}

// Helper function to get users from localStorage
const getUsersFromStorage = (): User[] => {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem("study-notes-users")
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.warn("Error reading users from localStorage:", error)
  }

  // Return default users if nothing in storage
  return [
    {
      id: "1",
      email: "user@example.com",
      password: "password123",
      name: "Demo User",
    },
  ]
}

// Helper function to save users to localStorage
const saveUsersToStorage = (users: User[]): void => {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem("study-notes-users", JSON.stringify(users))
  } catch (error) {
    console.warn("Error saving users to localStorage:", error)
  }
}

// Initialize users from localStorage
let users: User[] = []

// Initialize users when the module loads (client-side only)
if (typeof window !== "undefined") {
  users = getUsersFromStorage()
}

// Mock authentication state
let currentUser: { id: string; email: string; name: string } | null = null

// Helper function to safely get cookie value
const getCookieValue = (name: string): string | null => {
  if (typeof document === "undefined") return null

  const cookies = document.cookie.split("; ")
  const cookie = cookies.find((row) => row.startsWith(`${name}=`))

  if (!cookie) return null

  const value = cookie.split("=")[1]
  return value && value !== "undefined" && value !== "" ? value : null
}

// Helper function to dispatch auth state change event
const dispatchAuthChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("authStateChanged"))
  }
}

export async function signUp(
  name: string,
  email: string,
  password: string,
): Promise<{ success: boolean; error?: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Ensure users are loaded from storage
  if (users.length === 0) {
    users = getUsersFromStorage()
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
  if (existingUser) {
    return { success: false, error: "An account with this email already exists" }
  }

  // Create new user
  const newUser: User = {
    id: Date.now().toString(), // In a real app, use proper ID generation
    email: email.toLowerCase(),
    password, // In a real app, hash this password
    name,
  }

  // Add to users array and save to storage
  users.push(newUser)
  saveUsersToStorage(users)

  // Set current user
  currentUser = {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
  }

  // Set authentication cookies
  if (typeof document !== "undefined") {
    const userData = JSON.stringify({ name: newUser.name, email: newUser.email })
    document.cookie = `auth-token=${newUser.id}; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
    document.cookie = `user-data=${encodeURIComponent(userData)}; path=/; max-age=${60 * 60 * 24 * 7}`
  }

  // Dispatch auth change event
  setTimeout(dispatchAuthChange, 100)

  return { success: true }
}

export async function login(email: string, password: string): Promise<boolean> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Ensure users are loaded from storage
  if (users.length === 0) {
    users = getUsersFromStorage()
  }

  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

  if (user) {
    // Set the current user
    currentUser = {
      id: user.id,
      email: user.email,
      name: user.name,
    }

    // Set authentication cookies
    if (typeof document !== "undefined") {
      const userData = JSON.stringify({ name: user.name, email: user.email })
      document.cookie = `auth-token=${user.id}; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
      document.cookie = `user-data=${encodeURIComponent(userData)}; path=/; max-age=${60 * 60 * 24 * 7}`
    }

    // Dispatch auth change event
    setTimeout(dispatchAuthChange, 100)

    return true
  }

  return false
}

export function logout(): void {
  // Only clear current user session, don't delete the user account
  currentUser = null

  // Clear authentication cookies
  if (typeof document !== "undefined") {
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    document.cookie = "early-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    document.cookie = "user-data=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  }

  // Dispatch auth change event
  setTimeout(dispatchAuthChange, 100)
}

export function getCurrentUser(): { id: string; email: string; name: string } | null {
  // Return current user if already in memory
  if (currentUser) {
    return currentUser
  }

  // Try to get user from cookies
  if (typeof document !== "undefined") {
    const userDataCookie = getCookieValue("user-data")
    const authTokenCookie = getCookieValue("auth-token")
    const earlyAccessCookie = getCookieValue("early-access-token")

    if (userDataCookie && (authTokenCookie || earlyAccessCookie)) {
      try {
        const userData = JSON.parse(decodeURIComponent(userDataCookie))

        // Validate that userData has required fields
        if (userData && typeof userData === "object" && userData.name && userData.email) {
          currentUser = {
            id: authTokenCookie || earlyAccessCookie || "unknown",
            email: userData.email,
            name: userData.name,
          }
          return currentUser
        }
      } catch (error) {
        console.warn("Error parsing user data from cookie, clearing invalid cookies:", error)
        // Clear invalid cookies
        document.cookie = "user-data=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
        document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
        document.cookie = "early-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
      }
    }
  }

  return null
}

export function isAuthenticated(): boolean {
  // Check for authentication cookie
  if (typeof document !== "undefined") {
    const authToken = getCookieValue("auth-token")
    const earlyAccessToken = getCookieValue("early-access-token")

    return !!(authToken || earlyAccessToken)
  }

  return currentUser !== null
}

export function checkAuthStatus(): { isAuthenticated: boolean; method: "login" | "early-access" | null } {
  if (typeof document !== "undefined") {
    const authToken = getCookieValue("auth-token")
    const earlyAccessToken = getCookieValue("early-access-token")

    if (authToken) {
      return { isAuthenticated: true, method: "login" }
    }
    if (earlyAccessToken) {
      return { isAuthenticated: true, method: "early-access" }
    }
  }

  return { isAuthenticated: false, method: null }
}

// Get all users (for debugging - remove in production)
export function getAllUsers(): User[] {
  if (users.length === 0) {
    users = getUsersFromStorage()
  }
  return users
}

// Helper function to clear all user data (for testing purposes)
export function clearAllUserData(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("study-notes-users")
    users = getUsersFromStorage() // This will reset to default users
  }
}

// Initialize users on client-side
if (typeof window !== "undefined") {
  // Ensure users are loaded when the module is imported
  setTimeout(() => {
    if (users.length === 0) {
      users = getUsersFromStorage()
    }
  }, 0)
}
