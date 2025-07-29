// More secure authentication implementation
// Note: This is still a mock system for demo purposes
// In production, use proper authentication services like Auth0, Supabase Auth, etc.

import { createHash } from "crypto"

interface User {
  id: string
  email: string
  passwordHash: string
  salt: string
  name: string
  createdAt: string
}

interface Session {
  token: string
  userId: string
  expiresAt: string
  createdAt: string
}

// Simulated server-side storage (in production, this would be a database)
class SecureStorage {
  private static readonly USERS_KEY = "secure_users_encrypted"
  private static readonly SESSIONS_KEY = "secure_sessions_encrypted"
  private static readonly ENCRYPTION_KEY = "demo_key_change_in_production"

  // Simple encryption (in production, use proper encryption libraries)
  private static encrypt(data: string): string {
    // This is a very basic encoding - use proper encryption in production
    return btoa(data)
  }

  private static decrypt(data: string): string {
    try {
      return atob(data)
    } catch {
      return ""
    }
  }

  static getUsers(): User[] {
    if (typeof window === "undefined") return []

    try {
      const encrypted = localStorage.getItem(this.USERS_KEY)
      if (!encrypted) return []

      const decrypted = this.decrypt(encrypted)
      return JSON.parse(decrypted)
    } catch {
      return []
    }
  }

  static saveUsers(users: User[]): void {
    if (typeof window === "undefined") return

    try {
      const encrypted = this.encrypt(JSON.stringify(users))
      localStorage.setItem(this.USERS_KEY, encrypted)
    } catch (error) {
      console.error("Failed to save users:", error)
    }
  }

  static getSessions(): Session[] {
    if (typeof window === "undefined") return []

    try {
      const encrypted = localStorage.getItem(this.SESSIONS_KEY)
      if (!encrypted) return []

      const decrypted = this.decrypt(encrypted)
      return JSON.parse(decrypted)
    } catch {
      return []
    }
  }

  static saveSessions(sessions: Session[]): void {
    if (typeof window === "undefined") return

    try {
      const encrypted = this.encrypt(JSON.stringify(sessions))
      localStorage.setItem(this.SESSIONS_KEY, encrypted)
    } catch (error) {
      console.error("Failed to save sessions:", error)
    }
  }

  static clearAllData(): void {
    if (typeof window === "undefined") return

    localStorage.removeItem(this.USERS_KEY)
    localStorage.removeItem(this.SESSIONS_KEY)
  }
}

// Password hashing utilities
class PasswordUtils {
  static generateSalt(): string {
    return Math.random().toString(36).substring(2, 15)
  }

  static hashPassword(password: string, salt: string): string {
    // Simple hash for demo - use bcrypt or similar in production
    return createHash("sha256")
      .update(password + salt)
      .digest("hex")
  }

  static verifyPassword(password: string, hash: string, salt: string): boolean {
    return this.hashPassword(password, salt) === hash
  }
}

// Session management
class SessionManager {
  static generateToken(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  static createSession(userId: string): Session {
    const token = this.generateToken()
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days

    return {
      token,
      userId,
      expiresAt,
      createdAt: new Date().toISOString(),
    }
  }

  static isSessionValid(session: Session): boolean {
    return new Date(session.expiresAt) > new Date()
  }

  static cleanExpiredSessions(): void {
    const sessions = SecureStorage.getSessions()
    const validSessions = sessions.filter(this.isSessionValid)
    SecureStorage.saveSessions(validSessions)
  }
}

// Main authentication functions
export async function signUp(
  name: string,
  email: string,
  password: string,
): Promise<{ success: boolean; error?: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  try {
    const users = SecureStorage.getUsers()

    // Check if user already exists
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: "An account with this email already exists" }
    }

    // Validate password strength
    if (password.length < 8) {
      return { success: false, error: "Password must be at least 8 characters long" }
    }

    // Create new user with hashed password
    const salt = PasswordUtils.generateSalt()
    const passwordHash = PasswordUtils.hashPassword(password, salt)

    const newUser: User = {
      id: Date.now().toString(),
      email: email.toLowerCase(),
      passwordHash,
      salt,
      name,
      createdAt: new Date().toISOString(),
    }

    // Save user
    users.push(newUser)
    SecureStorage.saveUsers(users)

    // Create session
    const session = SessionManager.createSession(newUser.id)
    const sessions = SecureStorage.getSessions()
    sessions.push(session)
    SecureStorage.saveSessions(sessions)

    // Set secure cookie
    setAuthCookie(session.token, newUser)

    return { success: true }
  } catch (error) {
    console.error("Signup error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

export async function login(email: string, password: string): Promise<boolean> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const users = SecureStorage.getUsers()
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase())

    if (!user) {
      return false
    }

    // Verify password
    if (!PasswordUtils.verifyPassword(password, user.passwordHash, user.salt)) {
      return false
    }

    // Clean expired sessions
    SessionManager.cleanExpiredSessions()

    // Create new session
    const session = SessionManager.createSession(user.id)
    const sessions = SecureStorage.getSessions()
    sessions.push(session)
    SecureStorage.saveSessions(sessions)

    // Set secure cookie
    setAuthCookie(session.token, user)

    return true
  } catch (error) {
    console.error("Login error:", error)
    return false
  }
}

export function logout(): void {
  try {
    const token = getAuthToken()
    if (token) {
      // Remove session from storage
      const sessions = SecureStorage.getSessions()
      const filteredSessions = sessions.filter((s) => s.token !== token)
      SecureStorage.saveSessions(filteredSessions)
    }

    // Clear cookies
    clearAuthCookies()
  } catch (error) {
    console.error("Logout error:", error)
  }
}

export function getCurrentUser(): { id: string; email: string; name: string } | null {
  try {
    const token = getAuthToken()
    if (!token) return null

    const sessions = SecureStorage.getSessions()
    const session = sessions.find((s) => s.token === token)

    if (!session || !SessionManager.isSessionValid(session)) {
      clearAuthCookies()
      return null
    }

    const users = SecureStorage.getUsers()
    const user = users.find((u) => u.id === session.userId)

    if (!user) {
      clearAuthCookies()
      return null
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    }
  } catch (error) {
    console.error("Get current user error:", error)
    clearAuthCookies()
    return null
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}

export function checkAuthStatus(): { isAuthenticated: boolean; method: "login" | "early-access" | null } {
  const user = getCurrentUser()
  const earlyAccessToken = getCookieValue("early-access-token")

  if (user) {
    return { isAuthenticated: true, method: "login" }
  }

  if (earlyAccessToken) {
    return { isAuthenticated: true, method: "early-access" }
  }

  return { isAuthenticated: false, method: null }
}

// Cookie utilities
function setAuthCookie(token: string, user: User): void {
  if (typeof document === "undefined") return

  const userData = JSON.stringify({ name: user.name, email: user.email })
  const maxAge = 7 * 24 * 60 * 60 // 7 days in seconds

  document.cookie = `auth-token=${token}; path=/; max-age=${maxAge}; secure; samesite=strict`
  document.cookie = `user-data=${encodeURIComponent(userData)}; path=/; max-age=${maxAge}; secure; samesite=strict`
}

function getAuthToken(): string | null {
  return getCookieValue("auth-token")
}

function getCookieValue(name: string): string | null {
  if (typeof document === "undefined") return null

  const cookies = document.cookie.split("; ")
  const cookie = cookies.find((row) => row.startsWith(`${name}=`))

  if (!cookie) return null

  const value = cookie.split("=")[1]
  return value && value !== "undefined" && value !== "" ? value : null
}

function clearAuthCookies(): void {
  if (typeof document === "undefined") return

  document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  document.cookie = "user-data=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  document.cookie = "early-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
}

// Development utilities
export function clearAllUserData(): void {
  SecureStorage.clearAllData()
  clearAuthCookies()
}

export function getAllUsers(): Omit<User, "passwordHash" | "salt">[] {
  return SecureStorage.getUsers().map(({ passwordHash, salt, ...user }) => user)
}
