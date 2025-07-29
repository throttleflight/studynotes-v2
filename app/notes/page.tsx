"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Search, ChevronRight, Tag, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { getNotes } from "@/lib/notes"

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // In a real app, this would come from an API or database
  const notes = getNotes()

  const categories = [
    { id: "all", name: "All Notes" },
    { id: "math", name: "Mathematics" },
    { id: "science", name: "Science" },
    { id: "history", name: "History" },
    { id: "literature", name: "Literature" },
    { id: "cs", name: "Computer Science" },
  ]

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || note.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="hidden md:flex w-80 flex-col border-r bg-gray-50/50 dark:bg-gray-900/50">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>Study Notes</span>
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  Calculus
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  Physics
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  Biology
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  Chemistry
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  World War II
                </Badge>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search notes..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 p-4 md:p-6 lg:p-8 xl:p-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="all">All Notes</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>
              <div className="text-sm text-gray-500 dark:text-gray-400">{filteredNotes.length} notes</div>
            </div>

            <TabsContent value="all" className="space-y-4">
              {filteredNotes.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {filteredNotes.map((note) => (
                    <Link href={`/notes/${note.id}`} key={note.id} className="block group">
                      <Card className="h-full transition-all group-hover:shadow-md">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="line-clamp-2">{note.title}</CardTitle>
                          </div>
                          <CardDescription className="line-clamp-2">{note.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-3">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Tag className="h-3.5 w-3.5" />
                            <span>{note.categoryName}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{note.date}</span>
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                    <Search className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">No notes found</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    We couldn&apos;t find any notes matching your search.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="recent">
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">Your recently viewed notes will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="favorites">
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">Your favorite notes will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
