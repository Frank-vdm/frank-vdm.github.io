import { forwardRef } from 'react'

import * as logos from './Logos'

type LogoName = keyof typeof logos
const LogoNames: Array<LogoName> = Object.keys(logos) as Array<LogoName>

type Props = {
  size?: number
  name: LogoName
}
export const Logo = forwardRef<SVGSVGElement, Props>(({ name, size }, ref) => {
  if (!LogoNames.includes(name)) return null
  const L = logos[name]
  return <L ref={ref} size={size} />
})

Logo.displayName = 'Logo'
