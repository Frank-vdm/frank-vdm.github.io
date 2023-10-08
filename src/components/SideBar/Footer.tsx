import styled from '@emotion/styled'
import React from 'react'
import { Icon } from '~/components/icons/Icon'

export const Footer: React.FC = () => {
  return (
    <>
      <SocialLinks>
        {/* <a href="https://www.buymeacoffee.com/francoisvdm" target="_blank"> */}
        {/* <SocialLink name={'coffee'} /> */}
        {/* </a> */}
        <a href="https://github.com/Frank-vdm" target="_blank">
          <SocialLink name={'github'} />
        </a>
        <a href="https://gitlab.com/Frank-vdm" target="_blank">
          <SocialLink name={'gitlab'} />
        </a>
        <a href="https://www.linkedin.com/in/francoisvdm/" target="_blank">
          <SocialLink name={'linkedin'} />
        </a>
        {/* <a href="https://www.threads.net/@franc_vdm" target="_blank">
          <SocialLink name={'threads'} />
        </a> */}
        {/* <a
          href="https://stackoverflow.com/users/9956603/francois?tab=profile"
          target="_blank"
        >
          <SocialLink name={'stackoverflow'} />
        </a> */}
        {/* <a href="mailto:francois_vd@icloud.com" target="_blank">
          <SocialLink name={'email'} />
        </a> */}
      </SocialLinks>
      <Copywrite>
        &copy;{new Date().getFullYear()} Francois van der Merwe
      </Copywrite>
    </>
  )
}

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const SocialLink = styled(Icon)`
  transition: background-color, transform 0.2s ease-in-out;
  fill: ${(p) => p.theme.colors.light[9]};
  &:hover {
    fill: ${(p) => p.theme.colors.light[3]};
    transform: scale(1.2);
  }
`
const Copywrite = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: ${(p) => p.theme.colors.dark[9]};
`
