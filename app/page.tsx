import Link from "next/link"
import { BookOpen, ArrowRight, BookText, Users, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] 2xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Study Notes Repository
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Access organized study materials to enhance your learning experience. Share knowledge and learn
                    together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/early-access" passHref>
                    <Button className="gap-1">
                      Get Early Access <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/early-access" passHref>
                    <Button className="gap-1">
                      Request Early Access <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-full w-full">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-lg font-semibold">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span>Featured Notes</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          "Introduction to Calculus",
                          "World History: 20th Century",
                          "Organic Chemistry Fundamentals",
                          "Computer Science: Data Structures",
                          "English Literature: Modern Classics",
                        ].map((note, i) => (
                          <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
                            <BookText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/early-access"
                        className="text-primary hover:underline text-sm flex items-center gap-1"
                      >
                        Request access <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform provides all the tools you need to access, organize, and learn from comprehensive study
                  notes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Organized Notes</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Access notes organized by subject, topic, and difficulty level.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Community Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Share knowledge and learn from others in a collaborative environment.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Lock className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Secure Access</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Your notes are protected with secure authentication and access controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
