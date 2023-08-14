function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
}

document.addEventListener('DOMContentLoaded', function () {
  // Check for saved user preference
  const userPreference = localStorage.getItem('theme')

  // Check for system preference
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'

  // Set theme based on user preference, or system preference if no user preference
  const theme = userPreference || systemPreference
  document.documentElement.setAttribute('data-theme', theme)

  // Set up event listener for a button with id "themeToggle"
  document.getElementById('themeToggle').addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme) // Save user preference
  })
})

const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')

colorSchemeQuery.addListener(function (e) {
  const newTheme = e.matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', newTheme)
  // Optionally: Save user preference
  localStorage.setItem('theme', newTheme)
})
