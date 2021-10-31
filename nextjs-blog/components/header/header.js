import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__logo}></div>
        <div className={styles.header__block}>
          <button className={`${styles.header__messages} ${styles.header__button}`}>
          </button>
          <button className={`${styles.header__bell} ${styles.header__button}`}>
          </button>
          <div className={styles.header__account}></div>
        </div>
      </div>
    </div>
  )
}
