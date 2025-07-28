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
    return true
  }

  return false
}

export function logout(): void {
  currentUser = null
}

export function getCurrentUser() {
  return currentUser
}

export function isAuthenticated(): boolean {
  return currentUser !== null
}
