import { SectionProps } from '../SectionProps'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Bounce } from 'src/animations/Bounce'
import { DownArrow, Bottom, Button } from 'src/components'

export const Home = ({ id }: SectionProps) => {
  return (
    <div id={id} className="home-container">
      <div className="home-content">
        <UserOutlined className="picture" />
        <div className="details">
          <div className="detail-item greeting">Hi!</div>
          <div className="detail-item greeting">
            I'm Francois, a full-stack software engineer.
          </div>
          <div className="detail-item info">
            I build beautiful, functional and responsive
          </div>
          <div className="detail-item info">
            web applications and mobile applications
          </div>
          <div className="detail-item info">
            using <a href="https://reactjs.org/">React</a> and{' '}
            <a href="https://reactnative.dev/">React-Native</a>.
          </div>
          <Button
            className="detail-item"
            variant="primary"
            ghost
            href={'mailto:francois_vd@icloud.com'}
          >
            Hire Me...
          </Button>
        </div>
      </div>
      <Bottom>
        <Bounce>
          <DownArrow />
        </Bounce>
      </Bottom>
    </div>
  )
}
