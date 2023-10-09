import styled from '@emotion/styled'

export const Space = styled.div<{ size?: number }>`
  height: ${(p) => p.size || 100}px;
  width: 100%;
`
