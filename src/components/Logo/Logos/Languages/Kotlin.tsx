import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const Kotlin = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="-40 -40 336 336"
        width={size}
        height={size}
        style={style}
      >
        <defs>
          <linearGradient
            id="logosKotlinIcon0"
            x1="99.991%"
            x2=".01%"
            y1="-.011%"
            y2="100.01%"
          >
            <stop offset=".344%" stop-color="#E44857" />
            <stop offset="46.89%" stop-color="#C711E1" />
            <stop offset="100%" stop-color="#7F52FF" />
          </linearGradient>
        </defs>
        <path fill="url(#logosKotlinIcon0)" d="M256 256H0V0h256L128 127.949z" />{' '}
      </svg>
    )
  },
)

Kotlin.displayName = 'JavaKotlinscript'

{
  /* <svg width="128" height="128" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="logosKotlinIcon0" x1="99.991%" x2=".01%" y1="-.011%" y2="100.01%">
            <stop offset=".344%" stop-color="#E44857"/>
            <stop offset="46.89%" stop-color="#C711E1"/>
            <stop offset="100%" stop-color="#7F52FF"/>
        </linearGradient>
    </defs>
    <path fill="url(#logosKotlinIcon0)" d="M256 256H0V0h256L128 127.949z"/>
</svg> */
}
