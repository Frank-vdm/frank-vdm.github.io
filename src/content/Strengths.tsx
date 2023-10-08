import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { Heading } from '~/components/Typography/Heading'
import { Icon } from '~/components/icons/Icon'

type Props = {
  style?: CSSProperties
}

export const Strengths = (props: Props) => {
  const theme = useTheme()
  return (
    <Container {...props}>
      <Heading>Gallup StrengthsFinder Profile:</Heading>
      <List>
        <ListItem>
          <Icon name="helping" size={20} color={theme.colors.light[9]} />
          <S>Responsibility:</S> Committed to completing all tasks responsibly.
        </ListItem>
        <ListItem>
          <Icon name="trophy" size={20} color={theme.colors.light[9]} />
          <S>Achiever:</S> Consistently driven by a need for accomplishment.
        </ListItem>
        <ListItem>
          <Icon name="drop" size={20} color={theme.colors.light[9]} />
          <S>Adaptability:</S> Fluid in responding to the present and crafting
          the future.
        </ListItem>
        <ListItem>
          <Icon name="arrange" size={20} color={theme.colors.light[9]} />
          <S>Arranger:</S> Skillful in aligning multiple variables for optimal
          results.
        </ListItem>
        <ListItem>
          <Icon name="graduation" size={20} color={theme.colors.light[9]} />
          <S>Learner:</S> Intrinsically motivated by the process of learning.
        </ListItem>
      </List>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const List = styled.ul`
  list-style: none;
  padding-left: 1.5rem;
  margin: 0;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  font-weight: 200;
`
const S = styled.strong`
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  font-weight: 600;
`
