import styled from '@emotion/styled'
import { Avatar } from '../Avatar'
import { Footer } from './Footer'
import { Menu } from './Menu'

type Props = {
  width: number
}

export const SideBar = ({ width }: Props) => {
  return (
    <Wrapper width={width}>
      <AvatarSection>
        <Avatar size={170} />
      </AvatarSection>
      <MenuSection>
        <Menu />
      </MenuSection>
      <FooterSection>
        <Footer />
      </FooterSection>
    </Wrapper>
  )
}

const Wrapper = styled.div<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${({ width }) => width}px;
  background-color: ${({ theme }) => theme.colors.dark[2]};
  @media (prefers-color-scheme: light) {
    background-color: ${({ theme }) => theme.colors.light[3]};
  }
`

const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 0px 0;
`

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
`
