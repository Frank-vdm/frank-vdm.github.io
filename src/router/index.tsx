import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { theme } from '~/styles/theme'
import { routerConfig } from './router.config'

const router = createBrowserRouter(routerConfig)

export const AppRouter = () => {
  return (
    <EmotionThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </EmotionThemeProvider>
  )
}
