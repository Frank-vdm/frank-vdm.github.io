import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Divider } from '~/components/Divider'
import { Group } from '~/components/Group'
import { Stack } from '~/components/Stack'
import { Swatch } from '~/components/Swatch'

type Props = {
  title: string
  institution: string
  location?: string
  startDate?: string
  endDate?: string
  children?: ReactNode
}
export const Section = ({
  title,
  institution,
  location,
  startDate,
  endDate,
  children,
}: Props) => {
  return (
    <Group>
      <Stack style={{ width: 100 }}>
        {startDate && endDate ? `${startDate} - ${endDate}` : null}
      </Stack>
      <Stack
        style={{
          width: 20,
          marginRight: '1.5rem',
          alignItems: 'center',
        }}
      >
        <Swatch color="purple" shade={7} />
        <Divider
          orientation="vertical"
          color="purple"
          shade={8}
          style={{ width: 2 }}
        />
      </Stack>
      <Stack style={{ flex: 1 }}>
        <Group style={{ height: 20 }}>
          <Headline>{title}</Headline>
          <Divider orientation="vertical" style={{ margin: '0 10px' }} />
          <Institution>{institution}</Institution>
        </Group>
        {location}
        {children}
      </Stack>
    </Group>
  )
}

const Headline = styled.strong`
  font-size: 1.2rem;
`

const Institution = styled.i`
  font-size: 1.1rem;
`
