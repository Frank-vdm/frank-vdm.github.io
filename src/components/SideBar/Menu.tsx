import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import { menuItems } from '~/router/router.config'

export const Menu = () => {
  const location = useLocation()
  return (
    <>
      {menuItems.map((item) => (
        <MenuItem
          key={item.path}
          to={item.path}
          active={location.pathname === item.path}
        >
          {item.label}
        </MenuItem>
      ))}
    </>
  )
}

type MeuItemProps = {
  active?: boolean
}

const MenuItem = styled(Link)<MeuItemProps>`
  transition: background-color 0.2s ease-in-out;
  display: block;
  padding: 1rem 1.5rem;
  text-decoration: none;
  font-size: 18px;
  color: inherit;
  background-color: ${(p) =>
    p.active ? p.theme.colors.dark[1] : 'transparent'};
  border-radius: 6px;
  &:hover {
    background-color: ${(p) => p.theme.colors.dark[4]};
  }

  @media (prefers-color-scheme: light) {
    background-color: ${(p) =>
      p.active ? p.theme.colors.light[1] : 'transparent'};

    &:hover {
      background-color: ${(p) => p.theme.colors.light[4]};
    }
  }
`
