import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const DotNet = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        viewBox="-50 -50 606 606"
        ref={ref}
        width={size}
        height={size}
        style={style}
      >
        <rect
          transform="translate(25, 25)"
          width="456"
          height="456"
          fill="#512BD4"
        />
        <path
          transform="translate(25, 25)"
          d="M81.2738 291.333C78.0496 291.333 75.309 290.259 73.052 288.11C70.795 285.906 69.6665 283.289 69.6665 280.259C69.6665 277.173 70.795 274.529 73.052 272.325C75.309 270.121 78.0496 269.019 81.2738 269.019C84.5518 269.019 87.3193 270.121 89.5763 272.325C91.887 274.529 93.0424 277.173 93.0424 280.259C93.0424 283.289 91.887 285.906 89.5763 288.11C87.3193 290.259 84.5518 291.333 81.2738 291.333Z"
          fill="white"
        />
        <path
          transform="translate(25, 25)"
          d="M210.167 289.515H189.209L133.994 202.406C132.597 200.202 131.441 197.915 130.528 195.546H130.044C130.474 198.081 130.689 203.508 130.689 211.827V289.515H112.149V171H134.477L187.839 256.043C190.096 259.57 191.547 261.994 192.192 263.316H192.514C191.977 260.176 191.708 254.859 191.708 247.365V171H210.167V289.515Z"
          fill="white"
        />
        <path
          transform="translate(25, 25)"
          d="M300.449 289.515H235.561V171H297.87V187.695H254.746V221.249H294.485V237.861H254.746V272.903H300.449V289.515Z"
          fill="white"
        />
        <path
          transform="translate(25, 25)"
          d="M392.667 187.695H359.457V289.515H340.272V187.695H307.143V171H392.667V187.695Z"
          fill="white"
        />
      </svg>
    )
  },
)

DotNet.displayName = 'DotNet'
