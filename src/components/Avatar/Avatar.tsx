import styles from './avatar.module.scss'

export const Avatar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img
          src={require('../../assets/profile.JPG')}
          alt="Francois Van der merwe"
        />
      </div>
      <div className={styles.pulse} id="pulse1" />
      <div className={styles.pulse} id="pulse2" />
      <div className={styles.pulse} id="pulse3" />
      <div className={styles.pulse} id="pulse4" />
    </div>
  )
}
