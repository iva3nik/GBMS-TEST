import styles from "./reviews.module.scss"

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.reviews__string}>
        <h2 className={styles.reviews__title}>Отзывы:</h2>
        <button className={styles.reviews__buttonPlus}>
          Читать всё
          <div className={styles.reviews__plus}></div>
        </button>
      </div>
      <div className={styles.reviews__container}>
        <div className={styles.reviews__review}>
          <div className={styles.reviews__user}>
            <div className={styles.reviews__photo}></div>
            <div className={styles.reviews__column}>
              <div className={styles.reviews__name}>Александра</div>
              <div className={styles.reviews__data}>Была здесь 18.09.2020</div>
            </div>
          </div>
          <p className={styles.reviews__text}>
            Отдыхали с детьми во второй половине июня в этом приятном месте.
            В целом отдых удался, так этому способствовала прекрасная погода,
            дивный климат, душевное море и отличное средиземноморское настроение!
            Услуги на высшем уровне, особенно СПА и услуги официанта. Кухня и бар лайк!
          </p>
        </div>
      </div>
      <button className={styles.reviews__button}>Оставить отзыв</button>
    </section>
  )
}
