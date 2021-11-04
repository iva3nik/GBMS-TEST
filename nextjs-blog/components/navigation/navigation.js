import styles from './navigation.module.scss'

export default function Navigation() {
  return (
    <section className={styles.navigation}>
      <div className={styles.navigation__string}>
        <nav className={styles.navigation__nav}>
          <a href="#" className={styles.navigation__path}>Главная</a>
          <a href="#" className={styles.navigation__path}>
            <div className={styles.navigation__arrow}></div>
            Breeezzor Pass
          </a>
          <a href="#" className={styles.navigation__path}>
            <div className={styles.navigation__arrow}></div>
            Испания
          </a>
          <a href="#" className={`${styles.navigation__path} ${styles.navigation__path_active}`}>
            <div className={styles.navigation__arrow}></div>
            Breeezzor Pass by Hilton
          </a>
        </nav>
        <div className={styles.navigation__buttons}>
          <button className={styles.navigation__button}>
            <div className={styles.navigation__plus}></div>
            В избранное
          </button>
          <button className={styles.navigation__button}>
            <div className={styles.navigation__plus}></div>
            Поделиться
          </button>
        </div>
      </div>
      <ul className={styles.navigation__menu}>
        <a href="#" className={`${styles.navigation__link} ${styles.navigation__link_active}`}>
          <div className={`${styles.navigation__icon} ${styles.navigation__hotel}`}></div>
          Отель
        </a>
        <a href="#" className={styles.navigation__link}>
          <div className={`${styles.navigation__icon} ${styles.navigation__breeezzor}`}></div>
          Breeezzor Pass
        </a>
        <a href="#" className={styles.navigation__link}>
          <div className={`${styles.navigation__icon} ${styles.navigation__servis}`}></div>
          Услуги
        </a>
        <a href="#" className={styles.navigation__link}>
          <div className={`${styles.navigation__icon} ${styles.navigation__restaurant}`}></div>
          Ресторан
        </a>
        <a href="#" className={styles.navigation__link}>
          <div className={`${styles.navigation__icon} ${styles.navigation__events}`}></div>
          События
        </a>
      </ul>
    </section>
  )
}
