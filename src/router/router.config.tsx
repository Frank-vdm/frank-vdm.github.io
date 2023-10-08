import { Home } from '~/pages/home'
import { Skills } from '~/pages/skills'

type RouterConfigItem = {
  label: string
  path: string
  element: JSX.Element
  isMenuItem?: boolean
}

export const routerConfig: RouterConfigItem[] = [
  {
    label: 'Home',
    path: '/',
    element: <Home />,
    isMenuItem: true,
  },
  {
    label: 'Skills',
    path: '/skills',
    element: <Skills />,
    isMenuItem: true,
  },
  {
    label: 'Projects',
    path: '/projects',
    element: <div>Projects</div>,
    isMenuItem: false,
  },
  {
    label: 'Services',
    path: '/services',
    element: <div>Services</div>,
    isMenuItem: false,
  },
  {
    label: 'CV',
    path: '/cv',
    element: <div>CV</div>,
    isMenuItem: false,
  },
  {
    label: 'Contact',
    path: '/contact',
    element: <div>Contact</div>,
    isMenuItem: false,
  },
]

export const menuItems = routerConfig.filter((item) => item.isMenuItem)
