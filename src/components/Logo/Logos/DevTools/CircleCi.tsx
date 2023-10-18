import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const CircleCi = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="-20 -20 296 299"
        width={size}
        height={size}
        style={style}
      >
        <circle fill="white" cx="126.157" cy="129.008" r="145.593" />
        <g fill="#343434">
          <circle cx="126.157" cy="129.008" r="30.593" />
          <path d="M1.204 96.572c0 .368-.369 1.105-.369 1.474c0 3.317 2.58 6.266 6.266 6.266h51.972c2.58 0 4.423-1.474 5.529-3.686c10.69-23.59 34.28-39.44 61.186-39.44c37.228 0 67.453 30.225 67.453 67.453s-30.225 67.453-67.453 67.453c-27.276 0-50.497-16.218-61.186-39.071c-1.106-2.58-2.949-4.055-5.53-4.055H7.103c-3.318 0-6.267 2.58-6.267 6.267c0 .368 0 1.105.369 1.474c14.375 56.026 64.872 97.309 124.953 97.309c71.139 0 129.008-57.87 129.008-129.008C255.165 57.869 197.295 0 126.157 0C66.077 0 15.579 41.283 1.204 96.572Z" />
        </g>
      </svg>
    )
  },
)
CircleCi.displayName = 'CircleCi'
