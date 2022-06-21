import React from 'react'
import { Button, Typography, Row, Col } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import TweenOne from 'rc-tween-one'

const { Title } = Typography

export const Banner = (props: any) => {
  return (
    <div className={'banner'}>
      <div className="wrapper">
        <Row justify="center" gutter={{ xs: 0, sm: 8, md: 16, lg: 24, xl: 32 }}>
          <Col xs={14} sm={10} md={12} lg={12} xl={12}>
            <div>
              <UserOutlined className="user" />
            </div>
          </Col>
          <Col xs={14} sm={10} md={12} lg={12} xl={12}>
            <div>
              <div className="detail-item h1">Hi!</div>
              <div className="detail-item h2">
                I'm Francois, a full-stack software engineer.
              </div>
              <Button ghost shape="round" key="button" className="detail-item">
                More...
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <TweenOne
        animation={{
          y: '-=20',
          yoyo: true,
          repeat: -1,
          repeatDelay: 100,
          duration: 1000,
        }}
        className="down-arrow"
        key="icon"
      >
        <DownOutlined />
      </TweenOne>
    </div>
  )
}
