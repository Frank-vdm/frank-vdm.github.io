import React from 'react'
// import ReactMarkdown from 'react-markdown'
import { ContentView } from '~/components/ContentView'
// import markdown from '~/content/cv/cv.md'
import { SideBarLayout } from '~/layouts/SideBarLayout'

export const CurriculumVitae: React.FC = () => {
  return (
    <SideBarLayout>
      <ContentView style={{ margin: 'auto', width: '900px' }}>
        {/* <ReactMarkdown children={markdown} /> */}
      </ContentView>
    </SideBarLayout>
  )
}
