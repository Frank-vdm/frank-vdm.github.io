import React from 'react'
import { menuConfig } from '../navigation'
//Im leaving this here as it will probably be added
// import { Menu } from '../components'

export const Layout = () => {
  // const [selectedItem, setSelectedItem] = React.useState('home')
  // const menuItems = menuConfig.map(({ id, displayName }) => ({
  //   id,
  //   displayName,
  // }))

  return (
    <div className={'layout-container'}>
      {/* <Menu
        items={menuItems}
        selectedItem={selectedItem}
        onChange={(id) => setSelectedItem(id)}
      /> */}
      <div className={'layout-content'}>
        {menuConfig.map(({ id, component }) =>
          React.createElement(component, { id }),
        )}
      </div>
    </div>
  )
}
