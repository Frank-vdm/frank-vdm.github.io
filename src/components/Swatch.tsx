import styled from '@emotion/styled'
import { Color, Shade } from '~/types'

type Props = {
  color: Color
  shade?: Shade
  size?: string
  radius?: string
}

export const Swatch = styled.div<Props>`
  position: absolute;
  display: flex;
  width: ${(p) => p.size || 20}px !important;
  height: ${(p) => p.size || 20}px !important;
  border-radius: ${(p) => p.radius || '50%'};
  background-color: ${(p) => p.theme.colors[p.color][p.shade || 6]};
`
