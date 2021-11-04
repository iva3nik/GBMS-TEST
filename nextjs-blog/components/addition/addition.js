import styles from "./addition.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Addition() {
  return (
    <section className={styles.addition}>
      <h2 className={styles.addition__title}>
        Вам также может понравиться:
      </h2>
      <p className={styles.addition__text}>
        Quis exercitation deserunt aliquip Lorem non velit id ad incididunt eu.
        Eu labore eiusmod duis ad cupidatat occaecat dolor anim eiusmod fugiat labore
        sunt eu.
      </p>
      <Swiper
        modules={[Navigation,]}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={styles.addition__card}>
            <div className={`${styles.addition__visaul} ${styles.addition__diving}`}>
              <div className={`${styles.addition__string} ${styles.addition__string_offer}`}>
                <div className={styles.addition__offer}>BEST OFFER</div>
                <button className={styles.addition__button}></button>
              </div>
              <div className={styles.addition__place}>
                <div className={styles.addition__location}></div>
                Country, Region
              </div>
            </div>
            <h3 className={styles.addition__subtitle}>Your Experience</h3>
            <div className={styles.addition__block}>
              <p className={styles.addition__price}>$ 15.000 / hour</p>
              <button className={styles.addition__like}>
                <div className={styles.addition__thumb}></div>
                8
              </button>
            </div>
            <p className={styles.addition__subtext}>
              Duration: from 60 min
            </p>
            <p className={styles.addition__subtext}>
              Training and Riding Horses and Ponies
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.addition__card}>
            <div className={`${styles.addition__visaul} ${styles.addition__fishing}`}>
              <div className={styles.addition__string}>
                <div className={`${styles.addition__offer} ${styles.addition__offer_disabled}`}>
                  BEST OFFER
                </div>
                <button className={styles.addition__button}></button>
              </div>
              <div className={styles.addition__place}>
                <div className={styles.addition__location}></div>
                Country, Region
              </div>
            </div>
            <h3 className={styles.addition__subtitle}>Your Experience</h3>
            <div className={styles.addition__block}>
              <p className={styles.addition__price}>$ 15.000 / hour</p>
              <button className={styles.addition__like}>
                <div className={styles.addition__thumb}></div>
                8
              </button>
            </div>
            <p className={styles.addition__subtext}>
              Duration: from 60 min
            </p>
            <p className={styles.addition__subtext}>
              Training and Riding Horses and Ponies
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.addition__card}>
            <div className={`${styles.addition__visaul} ${styles.addition__balloon}`}>
              <div className={`${styles.addition__string} ${styles.addition__string_offer}`}>
                <div className={styles.addition__offer}>BEST OFFER</div>
                <button className={styles.addition__button}></button>
              </div>
              <div className={styles.addition__place}>
                <div className={styles.addition__location}></div>
                Country, Region
              </div>
            </div>
            <h3 className={styles.addition__subtitle}>Your Experience</h3>
            <div className={styles.addition__block}>
              <p className={styles.addition__price}>$ 15.000 / hour</p>
              <button className={styles.addition__like}>
                <div className={styles.addition__thumb}></div>
                8
              </button>
            </div>
            <p className={styles.addition__subtext}>
              Duration: from 60 min
            </p>
            <p className={styles.addition__subtext}>
              Training and Riding Horses and Ponies
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.addition__card}>
            <div className={`${styles.addition__visaul} ${styles.addition__diving}`}>
              <div className={`${styles.addition__string} ${styles.addition__string_offer}`}>
                <div className={styles.addition__offer}>BEST OFFER</div>
                <button className={styles.addition__button}></button>
              </div>
              <div className={styles.addition__place}>
                <div className={styles.addition__location}></div>
                Country, Region
              </div>
            </div>
            <h3 className={styles.addition__subtitle}>Your Experience</h3>
            <div className={styles.addition__block}>
              <p className={styles.addition__price}>$ 15.000 / hour</p>
              <button className={styles.addition__like}>
                <div className={styles.addition__thumb}></div>
                8
              </button>
            </div>
            <p className={styles.addition__subtext}>
              Duration: from 60 min
            </p>
            <p className={styles.addition__subtext}>
              Training and Riding Horses and Ponies
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.addition__card}>
            <div className={`${styles.addition__visaul} ${styles.addition__fishing}`}>
              <div className={styles.addition__string}>
                <div className={`${styles.addition__offer} ${styles.addition__offer_disabled}`}>
                  BEST OFFER
                </div>
                <button className={styles.addition__button}></button>
              </div>
              <div className={styles.addition__place}>
                <div className={styles.addition__location}></div>
                Country, Region
              </div>
            </div>
            <h3 className={styles.addition__subtitle}>Your Experience</h3>
            <div className={styles.addition__block}>
              <p className={styles.addition__price}>$ 15.000 / hour</p>
              <button className={styles.addition__like}>
                <div className={styles.addition__thumb}></div>
                8
              </button>
            </div>
            <p className={styles.addition__subtext}>
              Duration: from 60 min
            </p>
            <p className={styles.addition__subtext}>
              Training and Riding Horses and Ponies
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.addition__card}>
            <div className={`${styles.addition__visaul} ${styles.addition__balloon}`}>
              <div className={`${styles.addition__string} ${styles.addition__string_offer}`}>
                <div className={styles.addition__offer}>BEST OFFER</div>
                <button className={styles.addition__button}></button>
              </div>
              <div className={styles.addition__place}>
                <div className={styles.addition__location}></div>
                Country, Region
              </div>
            </div>
            <h3 className={styles.addition__subtitle}>Your Experience</h3>
            <div className={styles.addition__block}>
              <p className={styles.addition__price}>$ 15.000 / hour</p>
              <button className={styles.addition__like}>
                <div className={styles.addition__thumb}></div>
                8
              </button>
            </div>
            <p className={styles.addition__subtext}>
              Duration: from 60 min
            </p>
            <p className={styles.addition__subtext}>
              Training and Riding Horses and Ponies
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
