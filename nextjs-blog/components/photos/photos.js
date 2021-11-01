import styles from './photos.module.css'

export default function Photos() {
  return (
    <div className={styles.photos}>
      <div className={`${styles.photos__card} ${styles.photos__balkony}`}></div>
      <div className={`${styles.photos__card} ${styles.photos__balkony}`}></div>
    </div>
  )
}
