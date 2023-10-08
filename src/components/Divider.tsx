import styled from '@emotion/styled'
import React from 'react'
import { Color, Shade } from '~/types'

type DividerProps = Partial<StyledProps> & {
  style?: React.CSSProperties
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  size = 1,
  color = 'light',
  shade = 8,
  style,
}) => {
  return (
    <Styled
      size={size}
      orientation={orientation}
      color={color}
      shade={shade}
      style={style}
    />
  )
}

type StyledProps = {
  color: Color
  shade: Shade
  size: number
  orientation: 'horizontal' | 'vertical'
}
const Styled = styled.div<StyledProps>`
  background-color: ${(p) => p.theme.colors[p.color][p.shade]};
  width: ${(p) => (p.orientation === 'horizontal' ? '100%' : `${p.size}px`)};
  height: ${(p) => (p.orientation === 'vertical' ? '100%' : `${p.size}px`)};
`
