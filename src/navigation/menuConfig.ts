import { SectionProps } from 'src/sections/SectionProps'
import * as sections from '../sections'

export type Section = 'home' | 'portfolio' | 'contact'
type SectionMap = {
  id: Section
  displayName: string
  component: ({ id }: SectionProps) => JSX.Element
}

export type Sections = Array<SectionMap>

export const menuConfig: Sections = [
  { id: 'home', displayName: 'Francois', component: sections.Home },
  // { id: 'portfolio', displayName: 'Portfolio', component: sections.Portfolio },
]
