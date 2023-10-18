import { Card } from '~/components/Card'
import { Divider } from '~/components/Divider'
import { Grid } from '~/components/Grid'
import { Logo } from '~/components/Logo'
import { Heading } from '~/components/Typography/Heading'

export const SkillsMatrix = () => {
  return (
    <>
      <Heading>Languages</Heading>
      <Grid columns={5} gutter={20}>
        <Card>
          <Logo name="CSharp" />
        </Card>

        <Card>
          <Logo name="Elm" />
        </Card>
        <Card>
          <Logo name="Java" />
        </Card>
        <Card>
          <Logo name="Javascript" />
        </Card>
        <Card>
          <Logo name="Kotlin" />
        </Card>
        <Card>
          <Logo name="ObjectiveC" />
        </Card>
        <Card>
          <Logo name="Python" />
        </Card>
        <Card>
          <Logo name="Rust" />
        </Card>
        <Card>
          <Logo name="Swift" />
        </Card>
        <Card>
          <Logo name="Typescript" />
        </Card>
      </Grid>
      <Divider color={'dark'} shade={7} style={{ margin: '20px 0' }} />
      <Heading>Databases</Heading>
      <Grid columns={5} gutter={20}>
        <Card>
          <Logo name="CosmosDb" />
        </Card>
        <Card>
          <Logo name="MySql" />
        </Card>
        <Card>
          <Logo name="Postgresql" />
        </Card>
        <Card>
          <Logo name="Redis" />
        </Card>
        <Card>
          <Logo name="Sqlite" />
        </Card>
        <Card>
          <Logo name="SqlServer" />
        </Card>
      </Grid>
      <Divider color={'dark'} shade={7} style={{ margin: '20px 0' }} />
      <Heading>Frameworks</Heading>
      <Grid columns={5} gutter={20}>
        <Card>
          <Logo name="Angular" />
        </Card>
        <Card>
          <Logo name="Automerge" />
        </Card>
        <Card>
          <Logo name="DotNet" />
        </Card>
        <Card>
          <Logo name="NextJS" />
        </Card>
        <Card>
          <Logo name="NodeJS" />
        </Card>
        <Card>
          <Logo name="React" />
        </Card>
        <Card>
          <Logo name="ReactQuery" />
        </Card>
        <Card>
          <Logo name="ReduxJS" />
        </Card>
        <Card>
          <Logo name="Terraform" />
        </Card>
        <Card>
          <Logo name="TRPC" />
        </Card>
      </Grid>
      <Divider color={'dark'} shade={7} style={{ margin: '20px 0' }} />
      <Heading>Development Tools</Heading>
      <Grid columns={5} gutter={20}>
        <Card>
          <Logo name="Aws" />
        </Card>
        <Card>
          <Logo name="Azure" />
        </Card>
        <Card>
          <Logo name="Bitbucket" />
        </Card>
        <Card>
          <Logo name="CircleCi" />
        </Card>
        <Card>
          <Logo name="Copilot" />
        </Card>
        <Card>
          <Logo name="Datadog" />
        </Card>
        <Card>
          <Logo name="Docker" />
        </Card>
        <Card>
          <Logo name="Expo" />
        </Card>
        <Card>
          <Logo name="Figma" />
        </Card>
        <Card>
          <Logo name="Git" />
        </Card>
        <Card>
          <Logo name="GithubActions" />
        </Card>
        <Card>
          <Logo name="Jira" />
        </Card>
        <Card>
          <Logo name="Jetbrains" />
        </Card>
        <Card>
          <Logo name="Sentry" />
        </Card>
        <Card>
          <Logo name="Serverless" />
        </Card>
        <Card>
          <Logo name="TeamCity" />
        </Card>
        <Card>
          <Logo name="VScode" />
        </Card>
        <Card>
          <Logo name="Xamarin" />
        </Card>
        <Card>
          <Logo name="Xcode" />
        </Card>
        <Card>
          <Logo name="XD" />
        </Card>
      </Grid>
    </>
  )
}
