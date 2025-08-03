import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Study Notes",
  description: "Access organized study materials to enhance your learning experience.",
    generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload KaTeX for better performance */}
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" as="style" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" as="script" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
