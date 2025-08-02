"use client"

import { useEffect, useRef } from "react"

interface LatexRendererProps {
  content: string
  className?: string
}

export function LatexRenderer({ content, className = "" }: LatexRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const renderMath = async () => {
      if (typeof window !== "undefined" && containerRef.current) {
        try {
          // Load KaTeX from CDN
          if (!window.katex) {
            // Load KaTeX CSS
            const link = document.createElement("link")
            link.rel = "stylesheet"
            link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
            document.head.appendChild(link)

            // Load KaTeX JS
            const script = document.createElement("script")
            script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"
            script.onload = () => processContent()
            document.head.appendChild(script)
          } else {
            processContent()
          }
        } catch (error) {
          console.warn("Failed to load KaTeX:", error)
          // Fallback to plain text rendering
          renderPlainText()
        }
      }
    }

    const processContent = () => {
      const container = containerRef.current
      if (!container || !window.katex) return

      let processedContent = content

      // Handle display math ($$...$$)
      processedContent = processedContent.replace(/\$\$([\s\S]*?)\$\$/g, (match, math) => {
        try {
          const rendered = window.katex.renderToString(math.trim(), {
            displayMode: true,
            throwOnError: false,
          })
          return `<div class="math-display my-6 text-center">${rendered}</div>`
        } catch (error) {
          console.warn("KaTeX rendering error:", error)
          return `<div class="math-display my-6 text-center font-mono bg-gray-100 dark:bg-gray-800 p-4 rounded">${math.trim()}</div>`
        }
      })

      // Handle inline math ($...$)
      processedContent = processedContent.replace(/\$([^$\n]+?)\$/g, (match, math) => {
        try {
          const rendered = window.katex.renderToString(math.trim(), {
            displayMode: false,
            throwOnError: false,
          })
          return `<span class="math-inline">${rendered}</span>`
        } catch (error) {
          console.warn("KaTeX rendering error:", error)
          return `<code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">${math.trim()}</code>`
        }
      })

      // Handle definitions - detect patterns like "**Definition:** text" or "A **limit** is defined as..."
      processedContent = processedContent.replace(
        /(\*\*([^*]+)\*\*\s+(?:is|are|refers to|means|represents|denotes|defines?d?\s+as|can be defined as)[^.!?]*[.!?])/gi,
        (match, fullMatch, term) => {
          return `<div class="definition-block my-6 mx-auto max-w-3xl bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs font-bold">D</span>
              </div>
              <div class="definition-content">
                <p class="text-blue-900 dark:text-blue-100 font-medium leading-relaxed m-0">${fullMatch}</p>
              </div>
            </div>
          </div>`
        },
      )

      // Handle explicit definition blocks - "<strong>Definition:<strong>" at start of line
      processedContent = processedContent.replace(
        /<strong>Definition:<strong>\s*(.+?)(?=\n\n|\n\*\*|$)/gim,
        (match, definition) => {
          return `<div class="definition-block my-6 mx-auto max-w-3xl bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs font-bold">D</span>
              </div>
              <div class="definition-content">
                <h4 class="text-blue-900 dark:text-blue-100 font-semibold text-sm uppercase tracking-wide mb-2 m-0">Definition</h4>
                <p class="text-blue-900 dark:text-blue-100 font-medium leading-relaxed m-0">${definition.trim()}</p>
              </div>
            </div>
          </div>`
        },
      )

      // Handle explicit equation blocks - "<strong>Equation:<strong>" at start of line
      processedContent = processedContent.replace(
        /<strong>Equation:<strong>\s*(.+?)(?=\n\n|\n\*\*|$)/gim,
        (match, definition) => {
          return `<div class="definition-block my-6 mx-auto max-w-3xl bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs font-bold">E</span>
              </div>
              <div class="definition-content">
                <h4 class="text-blue-900 dark:text-blue-100 font-semibold text-sm uppercase tracking-wide mb-2 m-0">Equation</h4>
                <p class="text-blue-900 dark:text-blue-100 font-medium leading-relaxed m-0">${definition.trim()}</p>
              </div>
            </div>
          </div>`
        },
      )

      // Handle explicit equation blocks - "<strong>Procedure:<strong>" at start of line
      processedContent = processedContent.replace(
        /<strong>Procedures:<strong>\s*(.+?)(?=\n\n|\n\*\*|$)/gim,
        (match, definition) => {
          return `<div class="definition-block my-6 mx-auto max-w-3xl bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs font-bold">P</span>
              </div>
              <div class="definition-content">
                <h4 class="text-blue-900 dark:text-blue-100 font-semibold text-sm uppercase tracking-wide mb-2 m-0">Procedures</h4>
                <p class="text-blue-900 dark:text-blue-100 font-medium leading-relaxed m-0">${definition.trim()}</p>
              </div>
            </div>
          </div>`
        },
      )

      // Handle explicit equation blocks - "<strong>Procedure:<strong>" at start of line
      processedContent = processedContent.replace(
        /<strong>Example:<strong>\s*(.+?)(?=\n\n|\n\*\*|$)/gim,
        (match, definition) => {
          return `<div class="definition-block my-6 mx-auto max-w-3xl bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs font-bold">Ex</span>
              </div>
              <div class="definition-content">
                <h4 class="text-blue-900 dark:text-blue-100 font-semibold text-sm uppercase tracking-wide mb-2 m-0">Example</h4>
                <p class="text-blue-900 dark:text-blue-100 font-medium leading-relaxed m-0">${definition.trim()}</p>
              </div>
            </div>
          </div>`
        },
      )

      // Split content into paragraphs and render
      const paragraphs = processedContent
        .split("\n\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)

      container.innerHTML = paragraphs
        .map((paragraph) => {
          // Don't wrap definition blocks in paragraph tags
          if (paragraph.includes('class="definition-block"')) {
            return paragraph
          }
          return `<p class="mb-4 leading-relaxed">${paragraph}</p>`
        })
        .join("")
    }

    const renderPlainText = () => {
      const container = containerRef.current
      if (!container) return

      // Fallback rendering without KaTeX
      let processedContent = content

      // Convert display math to formatted blocks
      processedContent = processedContent.replace(/\$\$([\s\S]*?)\$\$/g, (match, math) => {
        return `<div class="math-display my-6 text-center font-mono bg-gray-100 dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">${math.trim()}</div>`
      })

      // Convert inline math to code spans
      processedContent = processedContent.replace(/\$([^$\n]+?)\$/g, (match, math) => {
        return `<code class="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono text-sm">${math.trim()}</code>`
      })

      // Handle definitions - detect patterns like "**Definition:** text" or "A **limit** is defined as..."
      processedContent = processedContent.replace(
        /(\*\*([^*]+)\*\*\s+(?:is|are|refers to|means|represents|denotes|defines?d?\s+as|can be defined as)[^.!?]*[.!?])/gi,
        (match, fullMatch, term) => {
          return `<div class="definition-block my-6 mx-auto max-w-3xl bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs font-bold">D</span>
              </div>
              <div class="definition-content">
                <p class="text-blue-900 dark:text-blue-100 font-medium leading-relaxed m-0">${fullMatch}</p>
              </div>
            </div>
          </div>`
        },
      )

      // Handle explicit definition blocks - "**Definition:**" at start of line
      processedContent = processedContent.replace(
        /^\*\*Definition:\*\*\s*(.+?)(?=\n\n|\n\*\*|$)/gim,
        (match, definition) => {
          return `<div class="definition-block my-6 mx-auto max-w-3xl bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span class="text-white text-xs font-bold">D</span>
              </div>
              <div class="definition-content">
                <h4 class="text-blue-900 dark:text-blue-100 font-semibold text-sm uppercase tracking-wide mb-2 m-0">Definition</h4>
                <p class="text-blue-900 dark:text-blue-100 font-medium leading-relaxed m-0">${definition.trim()}</p>
              </div>
            </div>
          </div>`
        },
      )

      const paragraphs = processedContent
        .split("\n\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)

      container.innerHTML = paragraphs
        .map((paragraph) => {
          // Don't wrap definition blocks in paragraph tags
          if (paragraph.includes('class="definition-block"')) {
            return paragraph
          }
          return `<p class="mb-4 leading-relaxed">${paragraph}</p>`
        })
        .join("")
    }

    renderMath()
  }, [content])

  return <div ref={containerRef} className={`prose dark:prose-invert max-w-none ${className}`} />
}

// Extend window type to include katex
declare global {
  interface Window {
    katex?: any
  }
}
