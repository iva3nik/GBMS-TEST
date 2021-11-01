import styles from "./information.module.css"

export default function Information() {
  return (
    <section className={styles.information}>
      <h2 className={styles.information__title}>
        Важная информация:
      </h2>
      <div className={styles.information__content}>
        <div className={styles.information__column}>
          <h3 className={styles.information__subtitle}>
            Правила отеля:
          </h3>
          <p className={styles.information__text}>
            Громкая музыка, шум, нецензурная брань влияют на комфорт других
            пользователей отеля и запрещены.
          </p>
          <p className={styles.information__text}>
            Курение запрещено.
          </p>
          <p className={styles.information__text}>
            Мытье с мылом и шампунем в душевых запрещено.
          </p>
          <button className={styles.information__button}>
            Подробнее
            <div className={styles.information__plus}></div>
          </button>
        </div>
        <div className={styles.information__column}>
          <h3 className={styles.information__subtitle}>
            Дополнительная информация:
          </h3>
          <p className={styles.information__text}>
            Рекомендации о соблюдении пляжного этикета. Напоминания о правилах
            безопасности нахождения в воде. Информация об используемой системе флагов
            указывающих текущий статус безопасности. Информация о морских
            обитателях(медузы).
          </p>
        </div>
        <div className={styles.information__column}>
          <h3 className={styles.information__subtitle}>
            Информация о COVID-19:
          </h3>
          <p className={styles.information__text}>
            Общие рекомендации Всемирной организации здравоохранения о соблюдении
            межличностного дистанцирования, национальные рекомендации и ограничения.
          </p>
        </div>
      </div>
    </section>
  )
}
