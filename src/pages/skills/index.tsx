import { ContentView } from '~/components/ContentView'
import { Space } from '~/components/Space'
import { Subtitle } from '~/components/Typography'
import { SkillsMatrix } from '~/content/SkillsMatrix'
import { SideBarLayout } from '~/layouts/SideBarLayout'

export const Skills = () => {
  return (
    <SideBarLayout>
      <ContentView>
        <Space />
        <Subtitle>Skils</Subtitle>
        <SkillsMatrix />
      </ContentView>
    </SideBarLayout>
  )
}
