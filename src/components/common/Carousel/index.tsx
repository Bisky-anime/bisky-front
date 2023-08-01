"use client"

import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Fragment, ReactNode, useCallback, useMemo, useRef } from "react"
import { Autoplay } from "swiper"

import { ArrowIcon } from "@/components/icons"
import { cl } from "@/utils"

import IconButton from "../IconButton"

import styles from "./index.module.scss"

interface ICarousel extends SwiperProps {
  slides: ReactNode[]
  keys: string[]

  label?: string
  labelButtons?: boolean
  doubleRow?: boolean
  className?: string
}

const Carousel = ({
  slides,
  keys,
  label,
  labelButtons,
  doubleRow,
  className,
  ...props
}: ICarousel) => {
  const sliderRef = useRef<SwiperRef>(null)

  const handlePrev = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slideNext()
  }, [])

  const modules = useMemo(() => {
    const moduleArray = []
    if (props.autoplay) moduleArray.push(Autoplay)

    return moduleArray
  }, [props])

  return (
    <div className={cl(styles.carousel, className)}>
      <div className={styles.carousel__header}>
        {(label || labelButtons) && (
          <div className={styles.carousel__header__label}>{label ?? ""}</div>
        )}
        {labelButtons && (
          <div className={styles.carousel__header__buttons}>
            <IconButton
              variant="filled"
              icon={<ArrowIcon />}
              onClick={handlePrev}
              className={styles.carousel__header__buttons__left}
            />
            <IconButton
              variant="filled"
              icon={<ArrowIcon />}
              onClick={handleNext}
            />
          </div>
        )}
      </div>
      <Swiper
        ref={sliderRef}
        slidesPerView={"auto"}
        grabCursor
        modules={modules}
        className={styles.carousel__swiper}
        {...props}
      >
        {doubleRow
          ? slides.map((el, index) => (
              <Fragment key={keys[index]}>
                {index % 2 === 0 && (
                  <SwiperSlide
                    className={cl(
                      styles.carousel__swiper__slide,
                      styles.carousel__swiper__slide_double,
                    )}
                    key={keys[index]}
                  >
                    {el}
                    {slides[index + 1]}
                  </SwiperSlide>
                )}
              </Fragment>
            ))
          : slides.map((el, index) => (
              <SwiperSlide
                className={styles.carousel__swiper__slide}
                key={keys[index]}
              >
                {el}
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default Carousel