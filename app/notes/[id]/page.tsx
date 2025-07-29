"use client"

import { useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Share2, MoreHorizontal, Clock, Tag, ChevronLeft, ChevronRight, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { getNoteById } from "@/lib/notes"

export default function NotePage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const noteId = params.id as string
  const sectionParam = searchParams.get("section")

  const note = getNoteById(noteId)
  const [isTocOpen, setIsTocOpen] = useState(false)

  if (!note) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <h1 className="text-2xl font-bold mb-2">Note not found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          The note you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/notes" passHref>
          <Button>Back to Notes</Button>
        </Link>
      </div>
    )
  }

  // Find current section
  const currentSectionIndex = sectionParam ? note.sections.findIndex((section) => section.id === sectionParam) : 0
  const currentSection = note.sections[currentSectionIndex] || note.sections[0]

  // Navigation helpers
  const hasPrevious = currentSectionIndex > 0
  const hasNext = currentSectionIndex < note.sections.length - 1
  const previousSection = hasPrevious ? note.sections[currentSectionIndex - 1] : null
  const nextSection = hasNext ? note.sections[currentSectionIndex + 1] : null

  const TableOfContents = () => (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
      <div className="space-y-1">
        {note.sections.map((section, index) => (
          <Link
            key={section.id}
            href={`/notes/${noteId}?section=${section.id}`}
            className={`block p-3 rounded-lg transition-colors ${
              section.id === currentSection.id
                ? "bg-primary text-primary-foreground"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setIsTocOpen(false)}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  section.id === currentSection.id
                    ? "bg-primary-foreground text-primary"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-sm font-medium">{section.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50/50 dark:bg-gray-900/50">
      {/* Header */}
      <div className="flex items-center h-14 px-4 border-b bg-background">
        <Link
          href="/notes"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Notes</span>
        </Link>

        {/* Mobile Table of Contents */}
        <Sheet open={isTocOpen} onOpenChange={setIsTocOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="ml-4 md:hidden">
              <List className="h-4 w-4 mr-2" />
              Contents
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>{note.title}</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <TableOfContents />
            </div>
          </SheetContent>
        </Sheet>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar - Table of Contents */}
        <div className="hidden md:flex w-80 flex-col border-r bg-background">
          <div className="p-6 border-b">
            <h2 className="font-semibold text-lg mb-2">{note.title}</h2>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Tag className="h-3.5 w-3.5" />
                <span>{note.categoryName}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{note.date}</span>
              </div>
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-6">
              <TableOfContents />
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-4 md:p-6 lg:p-8 xl:p-12">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>
                    Section {currentSectionIndex + 1} of {note.sections.length}
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-4">{currentSection.title}</h1>

                {/* Mobile metadata */}
                <div className="md:hidden flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" />
                    <span>{note.categoryName}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{note.date}</span>
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="prose dark:prose-invert max-w-none mb-12">
                {currentSection.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t">
                <div className="flex-1">
                  {hasPrevious && previousSection && (
                    <Link href={`/notes/${noteId}?section=${previousSection.id}`}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <ChevronLeft className="h-4 w-4" />
                            <span>Previous</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardTitle className="text-lg">{previousSection.title}</CardTitle>
                        </CardContent>
                      </Card>
                    </Link>
                  )}
                </div>

                <div className="flex-1 flex justify-end">
                  {hasNext && nextSection && (
                    <Link href={`/notes/${noteId}?section=${nextSection.id}`}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-end gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span>Next</span>
                            <ChevronRight className="h-4 w-4" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardTitle className="text-lg text-right">{nextSection.title}</CardTitle>
                        </CardContent>
                      </Card>
                    </Link>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
