import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Divider } from '~/components/Divider'

type Props = {
  qualification: string
  institution: string
  children?: ReactNode
}
export const Education = ({ qualification, institution, children }: Props) => {
  return (
    <Container>
      <Stack>
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
          <Qualification>{qualification}</Qualification>{' '}
          <Divider orientation="vertical" style={{ margin: '0 10px' }} />{' '}
          <Institution>{institution}</Institution>
        </HeaderRow>
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
  align-items: center;
  margin-right: 2rem;
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

const Qualification = styled.strong`
  font-size: 1.2rem;
`

const Institution = styled.i`
  font-size: 1.1rem;
`
