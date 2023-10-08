import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { Color, Shade } from '~/types/Color'
import { Variant } from '~/types/Variant'

type ButtonProps = {
  variant: Variant
  color?: Color
  shade?: Shade
  style?: React.CSSProperties
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'dark', shade = 5, ...props }, ref) => {
    return <StyledButton ref={ref} color={color} shade={shade} {...props} />
  },
)

type StyledButtonProps = ButtonProps & {
  color: Color
  shade: Shade
}
const StyledButton = styled(motion.button)<StyledButtonProps>`
  border-color: ${(p) =>
    p.variant === 'outline' ? p.theme.colors[p.color][p.shade] : 'transparent'};
  color: inherit;

  &:hover {
    background-color: ${(p) => p.theme.colors[p.color][p.shade]};
  }
`
