// This is a mock early access service
// In a real app, you would connect to a database or API

// Mock waitlist and approved users
const waitlist: string[] = []
const approvedUsers = [
  {
    email: "beta@example.com",
    accessCode: "STUDY2023",
  },
  {
    email: "tester@example.com",
    accessCode: "NOTES1234",
  },
]

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
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("authStateChanged"))
    }, 100)
  }
}

export async function requestAccess(email: string): Promise<boolean> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Check if email is already in the waitlist
  if (waitlist.includes(email)) {
    return true
  }

  // Check if email is already approved
  const isApproved = approvedUsers.some((user) => user.email === email)
  if (isApproved) {
    return true
  }

  // Add to waitlist
  waitlist.push(email)
  return true
}

export async function validateAccessCode(email: string, accessCode: string): Promise<boolean> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Check if email and access code match
  const user = approvedUsers.find((user) => user.email === email && user.accessCode === accessCode)

  if (user) {
    // Set early access cookies
    if (typeof document !== "undefined") {
      const userData = JSON.stringify({ name: "Early Access User", email: email })
      document.cookie = `early-access-token=${email}; path=/; max-age=${60 * 60 * 24 * 30}` // 30 days
      document.cookie = `user-data=${encodeURIComponent(userData)}; path=/; max-age=${60 * 60 * 24 * 30}`
    }

    // Dispatch auth change event
    dispatchAuthChange()

    return true
  }

  return false
}

export function getWaitlistCount(): number {
  return waitlist.length
}
