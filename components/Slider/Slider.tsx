'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Swiper.css'

import 'swiper/css'
import 'swiper/css/navigation'

import { type Movie } from '@/models/movies.model'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  data: Movie[]
  gap?: number
  view?: number
}

function Slider ({ data, gap = 5, view = 5 }: Props) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(true)
  }

  return (
    <Swiper
      modules={[Navigation]}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      loop={show}
      spaceBetween={gap}
      slidesPerView={view}
      allowTouchMove={false}
      className='h-auto'
      style={{ padding: '0 60px' }}
    >
      {
        data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Image priority src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='movie poster' width={250} height={140} />
          </SwiperSlide>
        ))
      }
      <div className='swiper-button-next' onClick={handleClick}></div>
      <div className='swiper-button-prev'></div>
    </Swiper>
  )
}

export default Slider
