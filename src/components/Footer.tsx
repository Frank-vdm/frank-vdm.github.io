import styled from '@emotion/styled'

export const Footer = () => {
  return (
    <Styled>
      Copyright © {new Date().getFullYear()}
      <Link href="https://frank-vdm.github.io/">François van der Merwe</Link>
    </Styled>
  )
}

const Styled = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 90px;
  padding: 32px 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${(p) => p.theme.colors.dark[9]};
  @media (prefers-color-scheme: light) {
    color: ${(p) => p.theme.colors.light[9]};
  }
`

const Link = styled.a`
  fill: ${(p) => p.theme.colors.light[9]};
  &:hover {
    fill: ${(p) => p.theme.colors.light[3]};
  }

  @media (prefers-color-scheme: light) {
    fill: ${(p) => p.theme.colors.dark[9]};

    &:hover {
      fill: ${(p) => p.theme.colors.dark[3]};
    }
  }
`
