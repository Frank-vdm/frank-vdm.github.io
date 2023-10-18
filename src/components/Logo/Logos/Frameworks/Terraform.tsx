import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const Terraform = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        ref={ref}
        fill="none"
        viewBox="0 0 75 75"
        width={size}
        height={size}
        style={style}
      >
        <path
          transform="translate(5, 0)"
          fill="#7B42BC"
          fill-rule="evenodd"
          d="m21.2 16.55 19.1 11.03v22.06L21.2 38.61V16.55ZM42.39 27.58v22.06L61.5 38.61V16.55L42.39 27.58ZM0 4.24V26.3l19.1 11.03V15.27L0 4.24ZM21.2 63.09l19.1 11.03V52.06L21.2 41.03v22.06Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    )
  },
)
Terraform.displayName = 'Terraform'
