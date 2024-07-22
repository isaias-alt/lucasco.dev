"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Sun from "./icons/Sun"
import Moon from "./icons/Moon"

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  },  
  [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null 
  
  return (
    <button onClick={toggleTheme} className="flex items-center justify-center opacity-80 transition-opacity duration-150 hover:opacity-100 hover:scale-110 hover:rotate-12">
      { theme === "dark" ? <Sun /> : <Moon /> }
    </button>
  )
}

export default ModeToggle