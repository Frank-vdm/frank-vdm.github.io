import React, { CSSProperties, SVGProps, forwardRef } from 'react'
import * as icons from './icons.def'

type IconName = keyof typeof icons
const IconNames: Array<IconName> = Object.keys(icons) as Array<IconName>

type Props = Omit<SVGProps<SVGSVGElement>, 'viewBox'> & {
  name: IconName
  size?: number
  color?: string
  style?: CSSProperties
}

export const Icon = forwardRef<SVGSVGElement, Props>(
  ({ name, size = 25, color, style, ...rest }, ref) => {
    if (!IconNames.includes(name)) return null
    const icon = icons[name]
    const { paths, svg } = icon
    const sx = { fill: color, ...style }
    return (
      <svg ref={ref} {...svg} height={size} style={sx} {...rest}>
        <g>
          {paths.map((p, index) =>
            React.createElement(p.name, { key: index, ...p.attributes }),
          )}
        </g>
      </svg>
    )
  },
)

Icon.displayName = 'Icon'
