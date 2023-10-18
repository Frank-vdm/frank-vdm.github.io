import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const Xamarin = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="-10 -10 158 158"
        width={size}
        height={size}
        style={style}
      >
        <path
          fill="#3498DB"
          d="M37.8 9c-3.4 0-6.6 1.9-8.3 4.8L3.2 59.2c-1.7 3-1.7 6.6 0 9.6l26.2 45.4c1.8 2.9 4.9 4.8 8.3 4.8h52.4c3.4 0 6.6-1.9 8.3-4.8l26.2-45.4c1.7-3 1.7-6.6 0-9.6L98.5 13.8C96.8 10.9 93.6 9 90.2 9H37.8zm.5 26.6h9.3c.4 0 .8.2 1 .6l15.3 27.3c.1.1.1.3.1.4c0-.2.1-.3.1-.4l15.3-27.3c.2-.4.6-.6 1-.6h9c.7.1 1.2.7 1.1 1.4c0 .1 0 .2-.1.4L75.6 64l15 26.7c.3.6 0 1.4-.6 1.6c-.1.1-.3.1-.4.1h-9.1c-.4 0-.8-.2-1-.6L64.1 64.5c-.1-.1-.1-.3-.1-.4c0 .2-.1.3-.1.4L48.5 91.8c-.2.4-.6.6-1 .6h-9c-.7-.1-1.2-.7-1.1-1.3c0-.1.1-.3.1-.4l15-26.7l-15-26.7c-.3-.6 0-1.3.6-1.6c0-.1.1-.1.2-.1z"
        />
      </svg>
    )
  },
)
Xamarin.displayName = 'Xamarin'
