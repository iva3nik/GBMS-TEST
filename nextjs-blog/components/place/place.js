import styles from "./place.module.scss"

export default function Place() {
  return (
    <section className={styles.place}>
      <h2 className={styles.place__title}>Местоположение:</h2>
      <p className={styles.place__text}>
        Описание ка добраться до пляжа sectetur adipiscing elit. Porttitor ultricies
        non, sem aliquam, pharetra, urna. Feugiat diam cras lorem sodales risus risus,
        enim. Tempor rhoncus at massa tempor egestas tristique etiam amet.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47826.14461850597!2d2.3023890267739446!3d41.47969369899701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1635807694677!5m2!1sru!2sru"
        width="1136"
        height="400"
        loading="lazy"
        className={styles.place__map}
      >
      </iframe>
    </section>
  )
}
