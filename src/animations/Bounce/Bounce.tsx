import styles from './bounce.module.scss'
type props = {
  children?: React.ReactNode
}
export const Bounce = ({ children }: props) => {
  return <div className={styles.bouncer}>{children}</div>
}
