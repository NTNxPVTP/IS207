"use client"
import { useEffect } from "react"

export function ChatlingEmbed() {
  useEffect(() => {
    // Gán config trước
    window.chtlConfig = {
      chatbotId: "4993716981"
    }

    const script = document.createElement("script")
    script.async = true
    script.id = "chtl-script"
    script.src = "https://chatling.ai/js/embed.js"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}
