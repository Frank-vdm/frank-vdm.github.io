import { Color } from './Color'

export type Shades = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]
export type ThemeColors = Record<Color, Shades>

export type Theme = {
  colors: ThemeColors
}
