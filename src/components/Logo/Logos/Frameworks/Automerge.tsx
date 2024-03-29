import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const Automerge = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        viewBox="0 0 90.46 90.46"
        ref={ref}
        width={size}
        height={size}
        style={style}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              transform="translate(5,5)"
              fill="#fc3"
              fillRule="evenodd"
              d="M79.59,38.12a3,3,0,0,1,0,4.21L42.34,79.58a3,3,0,0,1-4.22,0L.88,42.33a3,3,0,0,1,0-4.2L38.12.87a3,3,0,0,1,4.22,0"
            />
            <path
              transform="translate(5,5)"
              fill="#2a1e20"
              fillRule="evenodd"
              d="M76.87,38.76,41.71,3.59a2.09,2.09,0,0,0-2.93,0L3.62,38.76a2.07,2.07,0,0,0,0,2.93L38.78,76.85a2.07,2.07,0,0,0,2.93,0L76.87,41.69a2.07,2.07,0,0,0,0-2.93m-2,.79a.93.93,0,0,1,0,1.34l-33.94,34a1,1,0,0,1-1.33,0l-34-33.95a.94.94,0,0,1,0-1.32l34-34a1,1,0,0,1,1.33,0Z"
            />
            <path
              transform="translate(5,5)"
              fill="#2a1e20"
              fillRule="evenodd"
              d="M36.25,32.85v1.71c0,6.35-5.05,11.38-9.51,16.45l4.08,4.07c2.48-2.6,4.72-5.24,5.43-6.19V60.14h7.94V32.88l4.25,1.3a1.68,1.68,0,0,0,2.25-2.24L40.27,16.7,29.75,31.94A1.68,1.68,0,0,0,32,34.18"
            />
          </g>
        </g>
      </svg>
    )
  },
)

Automerge.displayName = 'Automerge'
