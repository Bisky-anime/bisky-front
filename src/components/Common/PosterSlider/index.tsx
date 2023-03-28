import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { Navigation } from 'swiper'

import { IPosterAnime } from '@/supportingTool/types'
import Poster from '@/components/Common/Poster'
import { ARROW_RIGHT, LOADING_ICON } from '@/theme/sources'
import 'swiper/css'
import 'swiper/css/navigation'

import AmyImage from '../AmyImage'

import styles from './index.module.scss'
import usePosterSlider from './index.use'

interface IPosterSlider {
  data?: IPosterAnime[];
  options: {
    path?: string;
    column?: boolean;
    goToFull?: string;
  };
}

const a = () => {
  return <div>2</div>
}

const PosterSlider = ({ data, options }: IPosterSlider) => {
  const { getAnimes, onBeforeInit, onSlideChange, firstAnimes, secondAnimes } =
    usePosterSlider(options, data)

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={30}
      grabCursor
      onBeforeInit={onBeforeInit}
      onSlideChange={onSlideChange}
      className={styles.posterSlider}
      navigation
      modules={[Navigation]}
    >
      {(options && options.column ? firstAnimes : getAnimes).map(
        (el, index) => (
          <SwiperSlide key={el.shiki_id} className={styles.posterSlider__slide}>
            <Poster el={el} offBack={!options.column} />
            {options.column && (
              <Poster el={secondAnimes[index]} offBack={!options.column} />
            )}
          </SwiperSlide>
        ),
      )}
      <SwiperSlide className={styles.posterSlider__slide}>
        {options && options.goToFull && 12 <= getAnimes.length ? (
          <Link
            href={options.goToFull}
            className={styles.posterSlider__slide_arrow}
          >
            <AmyImage
              src={ARROW_RIGHT}
              height={60}
              width={70}
              className={styles.posterSlider__slide_arrow_img}
            />
            <span className={styles.posterSlider__slide_arrow_label}>
              Показать все
            </span>
          </Link>
        ) : (
          <div
            className={`${styles.posterSlider__slide_load} ${
              options &&
              options.column &&
              styles.posterSlider__slide_load_column
            }`}
          >
            <AmyImage
              src={LOADING_ICON}
              width={70}
              height={70}
              className={styles.posterSlider__slide_load_img}
            />
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  )
}

export default PosterSlider