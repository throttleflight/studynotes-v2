"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Bookmark, Share2, MoreHorizontal, Clock, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getNoteById } from "@/lib/notes"

export default function NotePage() {
  const params = useParams()
  const noteId = params.id as string

  // In a real app, this would fetch from an API or database
  const note = getNoteById(noteId)
  const [isBookmarked, setIsBookmarked] = useState(false)

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

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50/50 dark:bg-gray-900/50">
      <div className="flex items-center h-14 px-4 border-b bg-background">
        <Link
          href="/notes"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Notes</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={isBookmarked ? "text-primary" : ""}
          >
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Bookmark</span>
          </Button>
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

      <div className="container max-w-4xl py-8 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-2 text-sm text-gray-500 dark:text-gray-400">
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

          <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">{note.description}</p>

          <Separator className="my-6" />

          <div className="prose dark:prose-invert max-w-none">
            {note.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

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
  )
}
