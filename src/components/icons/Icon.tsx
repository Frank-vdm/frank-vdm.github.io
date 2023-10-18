import React, { CSSProperties, SVGProps, forwardRef } from 'react'
import * as icons from './icon.defs'

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

    const sx = { fill: color, ...style }

    const { paths, svg } = icon
    return (
      <svg ref={ref} height={size} style={sx} {...rest} {...svg}>
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
