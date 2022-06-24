import React from 'react'
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'

export const Footer = () => {
  return (
    <div className="footer">
      <a className="link-icon" href="https://github.com/Frank-vdm">
        <GithubOutlined />
      </a>
      <a className="link-icon" href="https://www.linkedin.com/in/francoisvdm/">
        <LinkedinOutlined />
      </a>
      <a className="link-icon" href="mailto:francois_vd@icloud.com">
        <MailOutlined />
      </a>
    </div>
  )
}
