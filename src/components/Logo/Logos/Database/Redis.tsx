import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const Redis = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 -10 146.41 145.59"
        width={size}
        height={size}
        style={style}
      >
        <defs>
          <clipPath id="clip-path" transform="translate(0.01 0.01)">
            <rect fill="none" width="146.42" height="125.48" />
          </clipPath>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g clipPath="url(#clip-path)">
              <path
                fill="#a32422"
                d="M140.66,96.74c-7.8,4.08-48.28,20.73-57,25.3s-13.39,4.44-20.21,1.18S13.7,102.5,5.92,98.78C2,96.94,0,95.37,0,93.9V79.09S56.08,66.92,65.13,63.64,77.31,60.28,85,63.1,138.79,74.24,146.4,77V91.6c0,1.52-1.75,3-5.74,5.13Z"
                transform="translate(0.01 0.01)"
              />
              <path
                fill="#dc382c"
                d="M140.66,82c-7.8,4.06-48.28,20.71-57,25.2s-13.39,4.45-20.21,1.2S13.7,87.69,5.92,84s-7.93-6.27-.3-9.25S56.08,55,65.13,51.7,77.31,48.33,85,51.16,133,70,140.57,72.79s7.92,5.08.09,9.13Z"
                transform="translate(0.01 0.01)"
              />
              <path
                fill="#a32422"
                d="M140.66,72.62c-7.8,4.07-48.28,20.71-57,25.2S70.31,102.27,63.49,99,13.7,78.37,5.92,74.66C2,72.8,0,71.24,0,69.76V55S56.08,42.79,65.13,39.51,77.31,36.14,85,39,138.79,50.1,146.4,52.88v14.6C146.4,69,144.65,70.52,140.66,72.62Z"
                transform="translate(0.01 0.01)"
              />
              <path
                fill="#dc382c"
                d="M140.66,57.81c-7.8,4.08-48.28,20.72-57,25.21s-13.39,4.46-20.21,1.2S13.7,63.57,5.92,59.85-2,53.6,5.62,50.62s50.46-19.79,59.51-23S77.31,24.21,85,27,133,45.94,140.57,48.65s7.92,5.09.09,9.13Z"
                transform="translate(0.01 0.01)"
              />
              <path
                fill="#a32422"
                d="M140.66,47.59c-7.8,4.08-48.28,20.73-57,25.21S70.31,77.25,63.49,74,13.7,53.34,5.92,49.63C2,47.79,0,46.22,0,44.74V29.93S56.08,17.76,65.13,14.49,77.31,11.12,85,13.94s53.77,11.14,61.38,13.92v14.6C146.4,44,144.65,45.5,140.66,47.59Z"
                transform="translate(0.01 0.01)"
              />
              <path
                fill="#dc382c"
                d="M140.66,32.8c-7.8,4-48.28,20.75-57,25.2s-13.39,4.44-20.21,1.2S13.7,38.53,5.92,34.83s-7.93-6.27-.3-9.25S56.08,5.8,65.13,2.54,77.31-.82,85,2,133,20.85,140.57,23.63s7.92,5.09.09,9.14Z"
                transform="translate(0.01 0.01)"
              />
            </g>
            <polygon
              fill="#fff"
              points="75.51 11.78 85.17 8.61 82.55 14.87 92.38 18.55 79.71 19.87 76.86 26.71 72.28 19.08 57.63 17.76 68.57 13.82 65.28 7.76 75.51 11.78 75.51 11.78 75.51 11.78"
            />
            <polygon
              fill="#fff"
              points="76.12 51.71 52.44 41.88 86.36 36.67 76.12 51.71 76.12 51.71 76.12 51.71"
            />
            <path
              fill="#fff"
              d="M43.28,22.34c10,0,18.13,3.15,18.13,7s-8.15,7-18.13,7-18.14-3.15-18.14-7S33.27,22.34,43.28,22.34Z"
              transform="translate(0.01 0.01)"
            />
            <polygon
              fill="#741113"
              points="107.39 20.42 127.46 28.35 107.41 36.28 107.39 20.42 107.39 20.42 107.39 20.42"
            />
            <polygon
              fill="#ac2724"
              points="107.39 20.42 107.41 36.28 105.23 37.13 85.17 29.2 107.39 20.42 107.39 20.42 107.39 20.42"
            />
          </g>
        </g>
      </svg>
    )
  },
)

Redis.displayName = 'Redis'