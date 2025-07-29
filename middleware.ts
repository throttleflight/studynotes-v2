import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default withAuth(
  function middleware(req: NextRequest) {
    // Add security headers
    const response = NextResponse.next()

    // Security headers
    response.headers.set("X-Frame-Options", "DENY")
    response.headers.set("X-Content-Type-Options", "nosniff")
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
    response.headers.set("X-XSS-Protection", "1; mode=block")
    response.headers.set(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https:; font-src 'self' data:;",
    )

    return response
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protect /notes routes
        if (req.nextUrl.pathname.startsWith("/notes")) {
          return !!token
        }

        // Protect /admin routes (admin only)
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return token?.role === "ADMIN"
        }

        return true
      },
    },
  },
)

export const config = {
  matcher: ["/notes/:path*", "/admin/:path*"],
}
