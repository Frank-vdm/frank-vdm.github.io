import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Divider } from '~/components/Divider'

type Props = {
  title: string
  institution: string
  location?: string
  children?: ReactNode
}
export const Section = ({ title, institution, location, children }: Props) => {
  return (
    <Container>
      <Stack style={{ marginRight: '2rem', alignItems: 'center' }}>
        <Dot />
        <Divider
          orientation="vertical"
          color="purple"
          shade={6}
          style={{ width: 2 }}
        />
      </Stack>
      <Stack>
        <HeaderRow>
          <Headline>{title}</Headline>
          <Divider orientation="vertical" style={{ margin: '0 10px' }} />{' '}
          <Institution>{institution}</Institution>
        </HeaderRow>
        {location}
        {children}
      </Stack>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const Stack = styled.div`
  display: flex;
  flex-direction: column;
`
const Dot = styled.div`
  position: absolute;
  display: flex;
  width: 20px !important;
  height: 20px !important;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.purple[7]};
`

const HeaderRow = styled.div`
  display: flex;
  height: 20px;
  overflow: hidden;
  width: 100%;
`

const Headline = styled.strong`
  font-size: 1.2rem;
`

const Institution = styled.i`
  font-size: 1.1rem;
`
