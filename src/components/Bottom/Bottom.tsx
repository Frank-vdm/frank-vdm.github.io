import styles from './bottom.module.scss'

type props = {
  children?: React.ReactNode
}

export const Bottom = ({ children }: props) => {
  return <div className={styles.bottom}>{children}</div>
}
