import type React from "react"
import { AuthGuardSecure } from "@/components/auth-guard-secure"

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthGuardSecure>{children}</AuthGuardSecure>
}
