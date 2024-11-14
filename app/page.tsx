'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, GraduationCap, Calendar, Clock, User } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center max-w-screen-l mx-auto">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6" />
          <span className="sr-only">LLM Business Course</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#overview">
            Overview
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#topics">
            Topics
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#instructor">
            Instructor
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#enroll">
            Enroll
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master LLM Agents in Business
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Learn to leverage Large Language Models for real-world business applications in just 6 weeks.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline" className="bg-white text-foreground hover:bg-gray-200">
                  Enroll Now
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Course Overview</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
              Dive deep into the world of Large Language Models and their practical applications in business. This 6-week
              course combines theory with hands-on projects to give you a comprehensive understanding of LLM agents.
            </p>
            <div className="grid gap-6 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Duration</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>6 Weeks</span>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Time Commitment</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span>10 hours of lectures + assignments</span>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span>Basic understanding of business processes</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="topics" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Key Topics Covered</h2>
            <div className="grid gap-6 lg:grid-cols-2 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Week 1-2</CardTitle>
                  <CardDescription>Foundations and Multi-Agent Systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Introduction to Large Language Models</li>
                    <li>Parsing Corporate Annual Reports</li>
                    <li>Multi-Agent LLMs for E-commerce Image Analysis</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Week 3-4</CardTitle>
                  <CardDescription>Advanced Applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Building an Automated Coding Bot from GitHub Issues</li>
                    <li>Enhancing LLMs with Retrieval-Augmented Generation (RAG)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Week 5</CardTitle>
                  <CardDescription>Evaluation and Use Cases</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Evaluating Use Cases for LLMs vs. Other Solutions</li>
                    <li>Cost-Benefit Analysis of LLM Implementation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Week 6</CardTitle>
                  <CardDescription>Final Project and Review</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Capstone Project Presentation</li>
                    <li>Course Wrap-Up and Future of LLM Technology</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="instructor" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Instructor"
                  className="rounded-full"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Meet Your Instructor</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-4">
                  [Instructor Name] is a renowned expert in the field of Large Language Models and their applications in
                  business. With over [X] years of experience in AI and machine learning, [he/she] has helped numerous
                  companies implement LLM solutions to drive innovation and efficiency.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  [Instructor Name]&apos;s practical approach to teaching ensures that you&apos;ll not only understand the theory
                  behind LLMs but also gain hands-on experience in applying them to real-world business challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Course Benefits</h2>
            <div className="grid gap-6 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Practical Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Gain hands-on experience with real-world LLM applications through case studies and projects.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Industry Insights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Learn from actual business scenarios and understand how LLMs are transforming various industries.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Career Advancement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Equip yourself with in-demand skills that can boost your career in AI and business technology.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">What Our Students Say</h2>
            <div className="grid gap-6 lg:grid-cols-3 mt-8">
              <Card>
                <CardContent className="mt-4">
                  <p className="text-muted-foreground italic">
                    &quot;This course opened my eyes to the potential of LLMs in business. The hands-on projects were
                    invaluable.&quot;
                  </p>
                  <p className="mt-2 font-semibold">- Jane D., Marketing Manager</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-muted-foreground italic">
                    &quot;The instructor&apos;s expertise and real-world examples made complex concepts easy to understand and
                    apply.&quot;
                  </p>
                  <p className="mt-2 font-semibold">- John S., Data Scientist</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-muted-foreground italic">
                    &quot;I&apos;ve already implemented some of the techniques learned in this course at my company with great
                    results.&quot;
                  </p>
                  <p className="mt-2 font-semibold">- Emily R., Tech Entrepreneur</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="enroll" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Business with LLMs?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enroll now and start your journey towards mastering Large Language Models in business applications.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-white text-foreground hover:bg-gray-200" type="submit">
                    Enroll Now
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By enrolling, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 LLM Business Course. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}