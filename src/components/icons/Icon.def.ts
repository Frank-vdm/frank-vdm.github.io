export interface IconDefinition {
  svg: SvgProps
  paths: Array<IconContent>
}

export interface SvgProps {
  viewBox?: string
  transform?: string
  fill?: string
  height?: number
}

export interface IconContent {
  name: string
  attributes: IconContentAttributes
}

interface IconContentAttributes {
  d?: string
  fill?: string
  transform?: string
}

export interface IconProps {
  props: SvgProps
  paths: Array<IconContent>
}
