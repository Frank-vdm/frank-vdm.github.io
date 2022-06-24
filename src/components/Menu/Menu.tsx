import style from './menu.module.scss'

type Props = {
  selectedItem: string
  items: Array<{ id: string; displayName: string }>
  onChange: (id: string) => void
}

export const Menu = ({ selectedItem, items, onChange }: Props) => {
  return (
    <div className={style['menu-container']}>
      <nav className={style['menu']}>
        {items.map(({ id, displayName }) => (
          <a key={id} href={`#${id}`} onClick={() => onChange(id)}>
            <h3
              className={style['item']}
              style={selectedItem === id ? selected : {}}
            >
              {displayName}
            </h3>
          </a>
        ))}
        <div className={style['slider']}>
          <div className={style['bar']} />
        </div>
      </nav>
    </div>
  )
}

const selected: React.CSSProperties = {
  borderBottomColor: '#1395F0',
}
