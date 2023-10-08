import { useTheme } from '@emotion/react'
import { Card } from '~/components/Card'
import { ContentView } from '~/components/ContentView'
import { Divider } from '~/components/Divider'
import { Grid } from '~/components/Grid'
import { Space } from '~/components/Space'
import { Subtitle } from '~/components/Typography'
import { Heading } from '~/components/Typography/Heading'
import { Icon } from '~/components/icons'
import { SideBarLayout } from '~/layouts/SideBarLayout'

export const Skills = () => {
  const theme = useTheme()
  return (
    <SideBarLayout>
      <Space />
      <ContentView>
        <Subtitle>Skils</Subtitle>
        <Heading>Languages</Heading>
        <Grid columns={4} gutter={20}>
          <Card>
            <Icon name="typescript" size={150} color={theme.colors.blue[7]} />
          </Card>
          {/* <Card>
            <Icon name="rust" size={150} color={theme.colors.green[7]} />
          </Card> */}
          {/* <Card>
            <Icon name="swift" size={150} color={theme.colors.green[7]} />
          </Card> */}
          {/* <Card>
            <Icon name="elm" size={150} color={theme.colors.green[7]} />
          </Card> */}
          <Card>
            <Icon name="csharp" size={150} color={theme.colors.purple[7]} />
          </Card>
          <Card>
            <Icon name="java" size={150} color={theme.colors.red[6]} />
          </Card>
        </Grid>
        <Divider color={'dark'} shade={7} style={{ margin: '20px 0' }} />
        <Heading>Frameworks</Heading>
        <Grid columns={4} gutter={20}>
          <Card>
            <Icon name="nodejs" size={150} color={theme.colors.green[5]} />
          </Card>
          <Card>
            <Icon name="reactjs" size={150} color={theme.colors.blue[6]} />
          </Card>
          <Card>
            <Icon name="redux" size={150} color={theme.colors.purple[6]} />
          </Card>
          {/* <Card>
            <Icon name="reactnative" size={150} />
          </Card> */}
          {/* <Card>
            <Icon name="nextjs" size={150} />
          </Card> */}
          {/* <Card>
            <Icon name="redux" size={150} />
          </Card> */}
          {/* <Card>
            <Icon name="automerge" size={150} />
          </Card> */}
        </Grid>
        <Divider color={'dark'} shade={7} style={{ margin: '20px 0' }} />
        <Heading>Development Tools</Heading>
        <Grid columns={4} gutter={20}>
          <Card>
            <Icon name="postgres" size={150} color={theme.colors.teal[5]} />
          </Card>
          {/* <Card>
            <Icon name="mssql" size={150} />
          </Card> */}
          <Card>
            <Icon name="aws" size={150} color={theme.colors.yellow[5]} />
          </Card>
          {/* <Card>
            <Icon name="azure" size={150} />
          </Card> */}
          {/* <Card>
            <Icon name="xcode" size={150} />
          </Card>*/}
          {/* <Card>
            <Icon name="androidstudio" size={150} />
          </Card> */}
          {/* <Card>
            <Icon name="androidstudio" size={150} />
          </Card> */}
          <Card>
            <Icon name="git" size={150} color={theme.colors.orange[5]} />
          </Card>
          <Card>
            <Icon name="vscode" size={150} color={theme.colors.blue[5]} />
          </Card>
          <Card>
            <Icon name="docker" size={150} color={theme.colors.blue[6]} />
          </Card>
        </Grid>
      </ContentView>
    </SideBarLayout>
  )
}
