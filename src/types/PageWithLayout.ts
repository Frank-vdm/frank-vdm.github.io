import type { ComponentType } from 'react'
import { ReactElement, ReactNode } from 'react'

export type PageWithLayout<P = NonNullable<unknown>> = ComponentType<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}
