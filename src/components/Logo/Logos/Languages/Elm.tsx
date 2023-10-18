import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const Elm = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="-400 -400 800 800"
        width={size}
        height={size}
        style={style}
      >
        <g transform="scale(1 -1)">
          <polygon
            fill="rgba(18, 147, 216, 1)"
            points="-280,-90 0,190 280,-90"
            transform="translate(0 -210) rotate(0)"
          ></polygon>
          <polygon
            fill="rgba(18, 147, 216, 1)"
            points="-280,-90 0,190 280,-90"
            transform="translate(-210 0) rotate(-90)"
          ></polygon>
          <polygon
            fill="rgba(18, 147, 216, 0.75)"
            points="-198,-66 0,132 198,-66"
            transform="translate(207 207) rotate(-45)"
          ></polygon>
          <polygon
            fill="rgba(18, 147, 216, 1)"
            points="-130,0 0,-130 130,0 0,130"
            transform="translate(150 0) rotate(0)"
          ></polygon>
          <polygon
            fill="rgba(18, 147, 216, 0.75)"
            points="-191,61 69,61 191,-61 -69,-61"
            transform="translate(-89 239) rotate(0)"
          ></polygon>
          <polygon
            fill="rgba(18, 147, 216, 0.75)"
            points="-130,-44 0,86  130,-44"
            transform="translate(0 106) rotate(-180)"
          ></polygon>
          <polygon
            fill="rgba(18, 147, 216, 0.75)"
            points="-130,-44 0,86  130,-44"
            transform="translate(256 -150) rotate(-270)"
          ></polygon>
        </g>
      </svg>
    )
  },
)

Elm.displayName = 'Elm'
