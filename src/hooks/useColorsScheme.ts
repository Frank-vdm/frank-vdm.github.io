import { useEffect, useState } from 'react'

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    const updateColorScheme = (event: MediaQueryListEvent) => {
      setColorScheme(event.matches ? 'dark' : 'light')
    }

    // Add an event listener to detect changes in the color scheme
    mediaQueryList.addEventListener('change', updateColorScheme)

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQueryList.removeEventListener('change', updateColorScheme)
    }
  }, [])

  return colorScheme
}
