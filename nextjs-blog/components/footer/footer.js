import styles from "./footer.module.css"

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__card}>
          <h3 className={styles.footer__title}>О компании</h3>
          <ul className={styles.footer__list}>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Кто мы
              </a>
            </li>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Что мы делаем
              </a>
            </li>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Команда
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__card}>
          <h3 className={styles.footer__title}>Для бизнеса</h3>
          <ul className={styles.footer__list}>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Добавить пляжи
              </a>
            </li>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Добавить услуги
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__card}>
          <h3 className={styles.footer__title}>Контакты</h3>
          <ul className={styles.footer__list}>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Связаться с нами
              </a>
            </li>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Публичная оферта для поставщиков
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__card}>
          <h3 className={styles.footer__title}>Карьера</h3>
          <ul className={styles.footer__list}>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Присоединиться к команде
              </a>
            </li>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Список вакансий
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__card}>
          <h3 className={styles.footer__title}>Пресс-центр</h3>
          <ul className={styles.footer__list}>
            <li className={styles.footer__text}>
              <a className={styles.footer__link} href="#" target="_blank">
                Подписка на пресс-релизы
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__footer}>
        <div className={styles.footer__copyright}>
          © 2021 Breezzor inc. All rights reserved
        </div>
        <a href="#" target="_blank" className={styles.footer__agreements}>
          Политика конфиденциальности
        </a>
        <a href="#" target="_blank" className={styles.footer__agreements}>
          Политика конфиденциальности
        </a>
        <div className={styles.footer__lang}>
          <div className={styles.footer__earth}></div>
          <div className={styles.footer__language}>Русский(RU)</div>
        </div>
        <div className={styles.footer__social}>
          <a
            href="#"
            target="_blank"
            className={`${styles.footer__network} ${styles.footer__facebook}`}
          >
          </a>
          <a
            href="#"
            target="_blank"
            className={`${styles.footer__network} ${styles.footer__instagram}`}
          >
          </a>
          <a
            href="#"
            target="_blank"
            className={`${styles.footer__network} ${styles.footer__twitter}`}
          >
          </a>
        </div>
      </div>
    </section>
  )
}
