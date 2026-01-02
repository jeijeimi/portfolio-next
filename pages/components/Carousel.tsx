import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop
    >
      <SwiperSlide>
        <div style={{ height: 200, width: '200px', background: '#f7dcdcff' }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: 200, width: '200px', background: '#e99e9eff' }}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: 200, width: '200px', background: '#72edf1ff' }}>Slide 2</div>
      </SwiperSlide>
    </Swiper>
  )
}
