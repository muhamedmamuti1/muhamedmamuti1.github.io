import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const THEME_COLORS = { dark: '#1a1815', light: '#f3efe6' }

function getInitialTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
    return true
  } catch {
    return false
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme])
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    saveTheme(next)
    setTheme(next)
  }

  return { theme, toggleTheme }
}
