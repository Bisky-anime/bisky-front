"use client"

import Link from "next/link"

import { GenreBlock } from "@entities/Genre"
import { cn } from "@shared/utils/functions"
import { ArrowIcon, BackIcon } from "@shared/icons"
import { Text } from "@shared/ui/atoms"

import { IGenreBlockSliderProps } from "../types/IGenreBlockSliderProps"

import st from "./GenreBlockSlider.module.scss"
import { useGenreBlockSlider } from "./useGenreBlockSlider"

const GenreBlockSlider = (props: IGenreBlockSliderProps) => {
  const { currentSlide, sliderRef, instanceRef, items, className, otherProps } =
    useGenreBlockSlider(props)

  return (
    <div {...otherProps} className={cn(st.root, className)}>
      <div className={st.arrowWrapper}>
        <ArrowIcon
          onClick={() => instanceRef.current?.prev()}
          className={cn(st.arrow, { [st.arrow_disabled]: currentSlide === 0 })}
        />
        <ArrowIcon
          onClick={() => instanceRef.current?.next()}
          className={cn(st.arrow, {
            [st.arrow_disabled]:
              currentSlide ===
              (instanceRef.current?.track.details.slides.length ?? 0) - 6,
          })}
        />
      </div>
      <div ref={sliderRef} className={cn(st.slider, "keen-slider")}>
        {items.map((item) => (
          <GenreBlock
            key={item._id}
            genre={item}
            className={cn(st.slide, "keen-slider__slide")}
          />
        ))}
        <Link
          href={`/genres`}
          className={cn(st.catalogSlide, "keen-slider__slide")}
        >
          <BackIcon className={st.catalogIcon} />
          <Text weight="700" size="20">
            В каталог
          </Text>
        </Link>
      </div>
    </div>
  )
}

export { GenreBlockSlider }
