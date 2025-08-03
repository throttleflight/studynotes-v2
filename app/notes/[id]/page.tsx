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
import { LatexRenderer } from "@/components/latex-renderer"
import { getNoteById } from "@/lib/notes"

export default function NotePage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const noteId = params.id as string
  const sectionParam = searchParams.get("section")
  const subsectionParam = searchParams.get("subsection")

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

  // Find current section and subsection
  const currentSectionIndex = sectionParam ? note.sections.findIndex((section) => section.id === sectionParam) : 0
  const currentSection = note.sections[currentSectionIndex] || note.sections[0]

  let currentContent = currentSection.content
  let currentTitle = currentSection.title
  let currentSubsectionIndex = -1

  // If we have a subsection parameter, use that content instead
  if (subsectionParam && currentSection.subsections) {
    currentSubsectionIndex = currentSection.subsections.findIndex((sub) => sub.id === subsectionParam)
    if (currentSubsectionIndex !== -1) {
      const currentSubsection = currentSection.subsections[currentSubsectionIndex]
      currentContent = currentSubsection.content
      currentTitle = currentSubsection.title
    }
  }

  // Navigation helpers
  const getNextItem = () => {
    if (subsectionParam && currentSection.subsections && currentSubsectionIndex !== -1) {
      // We're in a subsection
      if (currentSubsectionIndex < currentSection.subsections.length - 1) {
        // Next subsection in same section
        return {
          type: "subsection",
          section: currentSection,
          subsection: currentSection.subsections[currentSubsectionIndex + 1],
          sectionIndex: currentSectionIndex,
          subsectionIndex: currentSubsectionIndex + 1,
        }
      } else {
        // Next section (if exists)
        if (currentSectionIndex < note.sections.length - 1) {
          return {
            type: "section",
            section: note.sections[currentSectionIndex + 1],
            sectionIndex: currentSectionIndex + 1,
          }
        }
      }
    } else {
      // We're in a main section
      if (currentSection.subsections && currentSection.subsections.length > 0) {
        // First subsection of current section
        return {
          type: "subsection",
          section: currentSection,
          subsection: currentSection.subsections[0],
          sectionIndex: currentSectionIndex,
          subsectionIndex: 0,
        }
      } else {
        // Next section (if exists)
        if (currentSectionIndex < note.sections.length - 1) {
          return {
            type: "section",
            section: note.sections[currentSectionIndex + 1],
            sectionIndex: currentSectionIndex + 1,
          }
        }
      }
    }
    return null
  }

  const getPreviousItem = () => {
    if (subsectionParam && currentSection.subsections && currentSubsectionIndex !== -1) {
      // We're in a subsection
      if (currentSubsectionIndex > 0) {
        // Previous subsection in same section
        return {
          type: "subsection",
          section: currentSection,
          subsection: currentSection.subsections[currentSubsectionIndex - 1],
          sectionIndex: currentSectionIndex,
          subsectionIndex: currentSubsectionIndex - 1,
        }
      } else {
        // Main section content
        return {
          type: "section",
          section: currentSection,
          sectionIndex: currentSectionIndex,
        }
      }
    } else {
      // We're in a main section
      if (currentSectionIndex > 0) {
        const prevSection = note.sections[currentSectionIndex - 1]
        if (prevSection.subsections && prevSection.subsections.length > 0) {
          // Last subsection of previous section
          return {
            type: "subsection",
            section: prevSection,
            subsection: prevSection.subsections[prevSection.subsections.length - 1],
            sectionIndex: currentSectionIndex - 1,
            subsectionIndex: prevSection.subsections.length - 1,
          }
        } else {
          // Previous section
          return {
            type: "section",
            section: prevSection,
            sectionIndex: currentSectionIndex - 1,
          }
        }
      }
    }
    return null
  }

  const nextItem = getNextItem()
  const previousItem = getPreviousItem()

  const TableOfContents = () => (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
      <div className="space-y-1">
        {note.sections.map((section, sectionIndex) => (
          <div key={section.id} className="space-y-1">
            <Link
              href={`/notes/${noteId}?section=${section.id}`}
              className={`block p-3 rounded-lg transition-colors ${
                section.id === currentSection.id && !subsectionParam
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => setIsTocOpen(false)}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    section.id === currentSection.id && !subsectionParam
                      ? "bg-primary-foreground text-primary"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {sectionIndex + 1}
                </div>
                <span className="text-sm font-medium">{section.title}</span>
              </div>
            </Link>

            {/* Subsections */}
            {section.subsections &&
              section.subsections.map((subsection, subsectionIndex) => (
                <Link
                  key={subsection.id}
                  href={`/notes/${noteId}?section=${section.id}&subsection=${subsection.id}`}
                  className={`block p-2 ml-6 rounded-lg transition-colors ${
                    section.id === currentSection.id && subsection.id === subsectionParam
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsTocOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium ${
                        section.id === currentSection.id && subsection.id === subsectionParam
                          ? "bg-primary-foreground text-primary"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {sectionIndex + 1}.{subsectionIndex + 1}
                    </div>
                    <span className="text-xs">{subsection.title}</span>
                  </div>
                </Link>
              ))}
          </div>
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
                    {subsectionParam
                      ? `Section ${currentSectionIndex + 1}.${currentSubsectionIndex + 1}`
                      : `Section ${currentSectionIndex + 1} of ${note.sections.length}`}
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-4">{currentTitle}</h1>

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

              {/* Content with LaTeX Support */}
              <div className="mb-12">
                <LatexRenderer content={currentContent} />
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t">
                <div className="flex-1">
                  {previousItem && (
                    <Link
                      href={
                        previousItem.type === "subsection"
                          ? `/notes/${noteId}?section=${previousItem.section.id}&subsection=${previousItem.subsection.id}`
                          : `/notes/${noteId}?section=${previousItem.section.id}`
                      }
                    >
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <ChevronLeft className="h-4 w-4" />
                            <span>Previous</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardTitle className="text-lg">
                            {previousItem.type === "subsection"
                              ? previousItem.subsection.title
                              : previousItem.section.title}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </Link>
                  )}
                </div>

                <div className="flex-1 flex justify-end">
                  {nextItem && (
                    <Link
                      href={
                        nextItem.type === "subsection"
                          ? `/notes/${noteId}?section=${nextItem.section.id}&subsection=${nextItem.subsection.id}`
                          : `/notes/${noteId}?section=${nextItem.section.id}`
                      }
                    >
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-end gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span>Next</span>
                            <ChevronRight className="h-4 w-4" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardTitle className="text-lg text-right">
                            {nextItem.type === "subsection" ? nextItem.subsection.title : nextItem.section.title}
                          </CardTitle>
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
