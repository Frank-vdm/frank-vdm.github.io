import styled from '@emotion/styled'
import React from 'react'
import { Footer } from '~/components/Footer'
import { SideBar } from '~/components/SideBar'

interface SideBarLayoutProps {
  children: React.ReactNode
}

const sbWidth = 300

export const SideBarLayout: React.FC<SideBarLayoutProps> = ({ children }) => {
  return (
    <Container>
      <SideBar width={sbWidth} />
      <Content>
        {children}
        <Footer />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  flex-direction: row;
`

const Content = styled.div`
  margin-left: ${sbWidth}px;
  display: flex;
  flex: 1;
  flex-direction: column;
`
