import { forwardRef } from 'react'
import { LogoProps, defaultSize } from '../Logo.types'

export const XD = forwardRef<SVGSVGElement, LogoProps>(
  ({ size = defaultSize, style }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="-20 -23 296 296"
        width={size}
        height={size}
        style={style}
      >
        <rect width="256" height="249.6" fill="#470137" rx="42.5" />
        <path
          fill="#FF61F6"
          d="m134.578 65.64l-31.943 52.723l34.175 55.985c.22.392.281.852.172 1.288c-.053.186-.167.232-.342.239l-.194-.003l-.236-.006c-.128 0-.271.006-.43.032h-24.64l-.484-.008c-1.328-.035-2.285-.225-2.868-1.199a3291.718 3291.718 0 0 0-6.87-13.309a469.933 469.933 0 0 0-6.34-11.767l-.958-1.714a782.954 782.954 0 0 1-7.642-13.91h-.172a532.443 532.443 0 0 1-7.127 13.738c-2.463 4.58-4.896 9.132-7.299 13.653a607.72 607.72 0 0 1-7.384 13.481c-.405.91-1.078 1.1-2.015 1.131l-.39.006H38.064l-.102.003l-.336.03c-.187.011-.299-.029-.335-.311a1.725 1.725 0 0 1 .258-1.202l33.144-54.44l-32.286-54.61c-.343-.456-.4-.828-.172-1.116a1.25 1.25 0 0 1 1.031-.43H63.48a3.59 3.59 0 0 1 1.546.258c.41.233.763.556 1.03.945c2.061 4.58 4.351 9.16 6.87 13.738a736.524 736.524 0 0 0 7.642 13.567a191.963 191.963 0 0 1 7.127 13.567h.172a506.673 506.673 0 0 1 6.955-13.738c2.345-4.465 4.75-8.96 7.212-13.482a620.843 620.843 0 0 0 7.127-13.48c.132-.424.368-.808.687-1.117a2.503 2.503 0 0 1 1.374-.258h22.497a.984.984 0 0 1 .95 1.634l-.09.084Zm50.47 112.473l-1.184.013a53.208 53.208 0 0 1-22.927-4.808a36.45 36.45 0 0 1-16.057-14.512c-3.791-6.296-5.737-14.142-5.835-23.535l-.004-.765a44.844 44.844 0 0 1 5.84-22.497a42.866 42.866 0 0 1 16.412-16.166l.589-.32c7.44-4.122 16.428-6.183 26.962-6.183l.46.005l.526.017l.59.026l.656.038l1.102.078l1.248.1l.913.08V55.852c0-.8.344-1.202 1.03-1.202h21.639a.91.91 0 0 1 1.03 1.03v101.495c0 1.704.066 3.54.198 5.504l.32 4.455l.17 2.577a1.775 1.775 0 0 1-1.031 1.718a85.184 85.184 0 0 1-17.345 5.151a93.12 93.12 0 0 1-15.302 1.533Zm9.291-21.282v-46.883a17.035 17.035 0 0 0-2.833-.515a34.25 34.25 0 0 0-3.521-.172a26.52 26.52 0 0 0-12.021 2.748a23.472 23.472 0 0 0-9.016 7.9c-2.267 3.316-3.44 7.646-3.517 12.99l-.004.577a30.284 30.284 0 0 0 1.803 10.99a20.894 20.894 0 0 0 4.81 7.557a18.311 18.311 0 0 0 7.212 4.293a28.277 28.277 0 0 0 8.844 1.375c1.602 0 3.09-.058 4.465-.173a18.38 18.38 0 0 0 3.248-.54l.53-.147Z"
        />
      </svg>
    )
  },
)
XD.displayName = 'XD'
