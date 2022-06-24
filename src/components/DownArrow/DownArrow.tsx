import { DownOutlined } from '@ant-design/icons'
import styles from './downarrow.module.scss'

export const DownArrow = () => {
  return (
    <div className={styles.down_arrow}>
      <DownOutlined />
    </div>
  )
}
