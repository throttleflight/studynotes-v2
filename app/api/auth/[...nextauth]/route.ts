// NextAuth.js API route
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth-production"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
