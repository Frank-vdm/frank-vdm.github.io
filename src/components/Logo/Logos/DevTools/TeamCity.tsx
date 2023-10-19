import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const TeamCity = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="-20 -20 296 296"
        width={size}
        height={size}
        style={style}
      >
        <defs>
          <linearGradient
            id="logosTeamcity0"
            x1="53.143%"
            x2="46.484%"
            y1="67.329%"
            y2="39.303%"
          >
            <stop offset="0%" stop-color="#07C3F2" />
            <stop offset="100%" stop-color="#6B57FF" />
          </linearGradient>
          <linearGradient
            id="logosTeamcity1"
            x1="35.784%"
            x2="66.613%"
            y1="53.936%"
            y2="42.814%"
          >
            <stop offset="0%" stop-color="#07C3F2" />
            <stop offset="100%" stop-color="#009AE5" />
          </linearGradient>
          <linearGradient
            id="logosTeamcity2"
            x1="73.979%"
            x2="21.762%"
            y1="64.146%"
            y2="35.072%"
          >
            <stop offset="0%" stop-color="#009AE5" />
            <stop offset="100%" stop-color="#6B57FF" />
          </linearGradient>
          <linearGradient
            id="logosTeamcity3"
            x1="39.629%"
            x2="64.847%"
            y1="80.728%"
            y2="10.287%"
          >
            <stop offset="30%" stop-color="#07C3F2" />
            <stop offset="60%" stop-color="#3BEA62" />
          </linearGradient>
        </defs>
        <path
          fill="url(#logosTeamcity0)"
          d="M65.213 221.374L11.563 80.296A59.031 59.031 0 0 1 65.107.278c26.069-.669 49.486 15.853 57.596 40.636l46.958 143.424c9.466 28.93-93.835 64.98-104.448 37.036Z"
        />
        <path
          fill="url(#logosTeamcity1)"
          d="M226.19 176.606L94.706 247.718a63.6 63.6 0 0 1-88.262-29.863a63.723 63.723 0 0 1 34.238-85.325l138.66-55.993c23.588-9.52 50.627-1.678 65.462 18.984a55.352 55.352 0 0 1-18.612 81.085Z"
        />
        <path
          fill="url(#logosTeamcity2)"
          d="m176.514 177.832l-135.78-65.62a59.087 59.087 0 0 1-15.998-94.976C43.186-1.206 71.575-5.308 94.492 7.157L227.018 79.15c26.68 14.523 36.732 47.792 22.558 74.658c-13.906 26.38-46.212 37.003-73.062 24.024Z"
        />
        <path
          fill="url(#logosTeamcity3)"
          d="M37.588 250.198a64.26 64.26 0 0 1-22.878-99.376L129.583 12.01c9.186-11.129 24.684-14.733 37.838-8.799c15.227 6.863 22.657 24.248 17.092 39.996l-59.89 169.928a63.994 63.994 0 0 1-87.035 37.063Z"
        />
        <path d="M48.041 48.006h159.991v159.983H48.041z" />
        <path
          fill="#FFF"
          d="M67.987 177.752h59.996v10H67.987v-10Zm16.132-97.776H65.8V67.764h49.864v12.212h-18.32v47.968H84.12V79.976Zm36.529 18.544l.002-.652a30.556 30.556 0 0 1 31.385-31.117a31.04 31.04 0 0 1 23.732 9.252l-8.426 9.706a22.24 22.24 0 0 0-15.413-6.8c-10.02 0-17.276 8.24-17.436 18.325l-.003.527c0 10.319 7.147 18.905 17.44 18.905c6.097 0 10.1-2.095 14.236-5.616l.638-.553c.32-.282.64-.573.965-.87l8.426 8.505a30.799 30.799 0 0 1-24.692 10.666a30.372 30.372 0 0 1-30.854-30.278Z"
        />
      </svg>
    )
  },
)

TeamCity.displayName = 'TeamCity'