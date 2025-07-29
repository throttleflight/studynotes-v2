import Link from "next/link"
import { BookOpen, Users, Target, Heart, ArrowRight, Mail, Github, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Empowering Learning Through Organized Knowledge
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We believe that quality education should be accessible to everyone. Our platform provides carefully
                  curated study materials to help students excel in their academic journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Making Quality Education Accessible</h2>
                <p className="text-gray-500 md:text-lg dark:text-gray-400">
                  We're on a mission to democratize access to high-quality educational content. By organizing and
                  presenting complex topics in an easy-to-understand format, we help students master challenging
                  subjects and achieve their academic goals.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/notes">
                    <Button className="gap-1">
                      Explore Notes <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  <Card className="text-center">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-primary">1000+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Study Materials</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-primary">50+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Subject Areas</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-primary">10k+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Students Helped</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-primary">24/7</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Access Available</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Drives Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our core values guide everything we do, from content creation to community building.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Quality First</CardTitle>
                  <CardDescription>
                    Every piece of content is carefully reviewed and crafted by subject matter experts to ensure
                    accuracy and clarity.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Community Focused</CardTitle>
                  <CardDescription>
                    We believe in the power of collaborative learning and building a supportive community of learners.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle>Student Success</CardTitle>
                  <CardDescription>
                    Your academic success is our primary goal. We continuously improve our platform based on student
                    feedback.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-8 w-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span>Our Story</span>
                    </div>
                    <blockquote className="text-gray-600 dark:text-gray-300 italic">
                      "It started with a simple observation: students were struggling to find quality, organized study
                      materials. We saw brilliant minds held back not by lack of ability, but by lack of access to
                      well-structured educational content."
                    </blockquote>
                    <div className="pt-4">
                      <p className="font-medium">The Study Notes Team</p>
                      <p className="text-sm text-muted-foreground">Founded in 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Journey</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Idea to Impact</h2>
                <div className="space-y-4 text-gray-500 dark:text-gray-400">
                  <p>
                    What began as a small project to help fellow students has grown into a comprehensive platform
                    serving thousands of learners worldwide. We started by digitizing and organizing handwritten notes
                    from top-performing students.
                  </p>
                  <p>
                    Today, we work with educators, subject matter experts, and students to create the most comprehensive
                    and accessible study materials available. Our content spans multiple disciplines and difficulty
                    levels, ensuring there's something valuable for every learner.
                  </p>
                  <p>
                    We're just getting started. Our vision is to become the go-to resource for students worldwide,
                    breaking down barriers to quality education one note at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Platform Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built for Modern Learning</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform is designed with the modern student in mind, featuring cutting-edge technology and
                  user-friendly design.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">📚 Comprehensive Content</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    From basic concepts to advanced topics, our notes cover everything you need to succeed in your
                    studies.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">🔍 Smart Search</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Find exactly what you're looking for with our intelligent search system that understands context and
                    concepts.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">📱 Mobile Optimized</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Study anywhere, anytime with our fully responsive design that works perfectly on all devices.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">🧮 LaTeX Math Support</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Complex mathematical equations and formulas are rendered beautifully with full LaTeX support.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">🌙 Dark Mode</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Reduce eye strain during late-night study sessions with our elegant dark mode interface.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">📖 Free Access</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    All study materials are freely available to support your educational journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Learning?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of students who have already discovered the power of organized, high-quality study
                  materials.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/notes">
                  <Button size="lg" className="gap-1">
                    Start Learning <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">We'd Love to Hear From You</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Have questions, suggestions, or just want to say hello? We're always excited to connect with our
                  community.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Mail className="h-4 w-4" />
                  hello@studynotes.com
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Twitter className="h-4 w-4" />
                  @studynotes
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
