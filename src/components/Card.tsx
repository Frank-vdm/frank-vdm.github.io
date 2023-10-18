import styled from '@emotion/styled'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Card = styled.div<Props>`
  padding: 16px;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-in-out;
  background-color: ${(p) => p.theme.colors.dark[3]};
  color: ${(p) => p.theme.colors.light[9]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (prefers-color-scheme: light) {
    background-color: ${(p) => p.theme.colors.light[0]};
    color: ${(p) => p.theme.colors.dark[9]};
  }
  tooltip: 'Card';
`
