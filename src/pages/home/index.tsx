import styled from '@emotion/styled'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { ContentView } from '~/components/ContentView'
import { Space } from '~/components/Space'
import { Subtitle, Title } from '~/components/Typography'
import { Heading } from '~/components/Typography/Heading'
import { Bio } from '~/content/Bio'
import { Strengths } from '~/content/Strengths'
import { SideBarLayout } from '~/layouts/SideBarLayout'

export const Home: React.FC = () => {
  return (
    <SideBarLayout>
      <Space />
      <ContentView>
        <Title>Hi, I'm Francois van der Merwe</Title>
        <Subtitle>Senior Software Engineer</Subtitle>
        <Bio />
        <Strengths style={{ marginBottom: '4rem' }} />
        <Heading>Github</Heading>
        <CalendarContainer>
          <GitHubCalendar username="frank-vdm" blockMargin={2} />
        </CalendarContainer>
        {/* <div>
          <Button variant="outline">LET'S CONNECT</Button>
        </div> */}
        {/* <h2>Projects</h2>
        <Card>hello</Card> */}
      </ContentView>
    </SideBarLayout>
  )
}

const CalendarContainer = styled.div`
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid ${(p) => p.theme.colors.dark[9]};
`
