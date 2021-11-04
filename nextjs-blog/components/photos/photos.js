import styles from './photos.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';


export default function Photos() {
  return (
      <div className={styles.photos}>
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
            <Image
              className={styles.photos__image}
              src="/images/bb_3.png"
              alt="Balkony"
              height={352}
              width={520}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={styles.photos__image}
              src="/images/bb_1.png"
              alt="Balkony"
              height={352}
              width={520}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={styles.photos__image}
              src="/images/bb_2.png"
              alt="Balkony"
              height={352}
              width={520}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={styles.photos__image}
              src="/images/bb_3.png"
              alt="Balkony"
              height={352}
              width={520}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={styles.photos__image}
              src="/images/bb_1.png"
              alt="Balkony"
              height={352}
              width={520}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={styles.photos__image}
              src="/images/bb_2.png"
              alt="Balkony"
              height={352}
              width={520}
            />
          </SwiperSlide>
        </Swiper>
      </div>
  )
}
