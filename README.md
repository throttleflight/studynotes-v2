# Study Notes Clone

A modern study notes application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 📚 Organized study materials by subject and topic
- 🔍 Advanced search and filtering
- 📱 Responsive design for all devices
- 🌙 Dark/light theme support
- 🧮 LaTeX math rendering with KaTeX
- 📖 Structured notes with sections and subsections
- 🎨 Modern UI with shadcn/ui components

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Math Rendering:** KaTeX
- **Icons:** Lucide React
- **Theme:** next-themes

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── notes/             # Notes pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   └── latex-renderer.tsx # Math rendering
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   └── notes.ts          # Notes data and functions
└── hooks/                # Custom React hooks
    └── use-toast.ts      # Toast notifications
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.
