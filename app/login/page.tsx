"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, HelpCircle, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("counselor@school.edu")
  const [password, setPassword] = useState("password123")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // For demo purposes, accept any credentials
    // In production, this would validate against a database
    setTimeout(() => {
      setIsLoading(false)

      // Show success toast
      toast({
        title: "Login successful",
        description: "Welcome back, Ms. Thompson!",
        duration: 3000,
      })

      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-rose-50 to-white">
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="#help">
            <HelpCircle className="h-6 w-6" />
            <span className="sr-only">Help</span>
          </Link>
        </Button>
      </div>
      <div className="w-full max-w-md px-4">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
            <Lock className="h-8 w-8 text-rose-700" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to access the School Counselor Support Platform</p>
        </div>
        <Card className="mt-6">
          <form onSubmit={handleLogin}>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@school.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#reset-password" className="text-xs text-rose-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </CardContent>
          </form>
          <CardFooter className="flex flex-col">
            <div className="mt-2 text-xs text-center text-muted-foreground">
              By signing in, you agree to our{" "}
              <Link href="#terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </div>
          </CardFooter>
        </Card>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <div className="mx-auto h-5 w-5 opacity-70">
            <Lock className="h-5 w-5" />
          </div>
          <p className="mt-1 text-xs">HIPAA & FERPA Compliant | 256-bit Encryption</p>
        </div>
      </div>
    </div>
  )
}
