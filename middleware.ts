import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Check if user is trying to access protected routes
  if (request.nextUrl.pathname.startsWith("/notes")) {
    // Check for authentication cookie/token
    const authToken = request.cookies.get("auth-token")
    const earlyAccessToken = request.cookies.get("early-access-token")

    // If no authentication tokens, redirect to early access
    if (!authToken && !earlyAccessToken) {
      return NextResponse.redirect(new URL("/early-access", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/notes/:path*"],
}
