import styles from "./aboutHotel.module.scss"

export default function AboutHotel() {
  return (
    <section className={styles.about}>
      <div className={styles.about__gradient}></div>
      <div className={styles.about__content}>
        <div className={styles.about__columnLeft}>
          <h1 className={styles.about__title}>Hilton</h1>
          <p className={styles.about__text}>
            Испытайте роскошный день в межконтинентальном курорте del Coronado.
            Проведите день, впитывая солнце на дожденском пляже Аль-Ака или погрузитесь
            в бесконечности в окружении величественных гор Аль-Хаджар.
          </p>
          <p className={styles.about__text}>
            Дети могут насладиться веселой планетой Trekkers Kids Club с запланированными
            мероприятиями в течение дня. Воспользуйтесь эксклюзивными скидками с 25%
            скидка на продукты питания и напитки в любом из ресторанов курорта и скидка
            15% на спа-процедуры в спа-салоне L'Occitane.
          </p>
          <p className={styles.about__text}>
            * Бесплатно для детей до 4 лет.
          </p>
          <div className={styles.about__servises}>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__restroom}`}></div>
              Туалет
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__accessibility}`}></div>
              Доступность
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__chaise}`}></div>
              Шезлонги
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__shower}`}></div>
              Душ
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__restaurant}`}></div>
              Ресторан
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__wifi}`}></div>
              Wi-Fi
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__buoy}`}></div>
              Буйки
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__pool}`}></div>
              Бассейн
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__playground}`}></div>
              Детская площадка
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__lifeguard}`}></div>
              Спасатели
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__umbrella}`}></div>
              Зонтики
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__bar}`}></div>
              Бар
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__spa}`}></div>
              СПА
            </div>
            <div className={styles.about__servis}>
              <div className={`${styles.about__icon} ${styles.about__jacuzzi}`}></div>
              Джакузи
            </div>
          </div>
        </div>
        <div className={styles.about__columnRight}>
          <div className={styles.about__stars}>
            <div className={styles.about__star}></div>
            <div className={styles.about__star}></div>
            <div className={styles.about__star}></div>
            <div className={styles.about__star}></div>
            <div className={styles.about__star}></div>
          </div>
          <p className={styles.about__comment}>Вежливый персонал</p>
          <p className={styles.about__comment}>Отличное место для ланча</p>
        </div>
      </div>
    </section>
  )
}
