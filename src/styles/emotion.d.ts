import '@emotion/react'
import type { Theme as MyTheme } from '../types'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MyTheme {}
}
