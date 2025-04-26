"use client"

import * as React from "react"
import { Bot, Loader2, Maximize2, Minimize2, Send, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI assistant. I can help you with documentation, summarizing notes, or drafting communications. How can I help you today?",
    },
  ])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("document") || input.toLowerCase().includes("note")) {
        response =
          "I can help you draft documentation. Would you like me to create a template for student notes, a support plan, or a parent communication?"
      } else if (input.toLowerCase().includes("email") || input.toLowerCase().includes("message")) {
        response =
          "I can draft an email or message for you. Please provide some details about who it's for and what information you'd like to include."
      } else if (input.toLowerCase().includes("summary") || input.toLowerCase().includes("summarize")) {
        response =
          "I can summarize information for you. Please share the text you'd like me to summarize, or I can help summarize recent notes for a specific student."
      } else {
        response =
          "I'm here to help with administrative tasks like documentation, drafting emails, or summarizing information. What specific task would you like assistance with?"
      }

      const assistantMessage: Message = { role: "assistant", content: response }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!isOpen) {
    return (
      <Button className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0 shadow-lg" onClick={() => setIsOpen(true)}>
        <Bot className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <Card
      className={`fixed bottom-4 right-4 shadow-lg transition-all ${isExpanded ? "w-[600px] h-[500px]" : "w-80 h-96"}`}
    >
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b">
        <CardTitle className="text-sm font-medium">AI Assistant</CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3 overflow-y-auto flex-1 h-[calc(100%-110px)]">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg px-3 py-2 max-w-[80%] ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-lg px-3 py-2 bg-muted">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-3 border-t">
        <div className="flex w-full items-center space-x-2">
          <Textarea
            placeholder="Type your message..."
            className="flex-1 resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
