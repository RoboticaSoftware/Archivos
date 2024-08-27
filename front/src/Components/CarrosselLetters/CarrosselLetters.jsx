import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import "./CarrosselLetters.scss"

export function CarrosselLetters({dato}) {
  return (
    <>
        <h2 className='title_general'>
              <strong>NUESTROS ALIADOS</strong>
        </h2>
        <Swiper className='container_general' 
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination = {{clickable: true}}
        autoplay = {{delay:5000}}
        slidesPerView={1}
        >
            {dato.map((item, key) => (
                <>
                    <SwiperSlide className='slide-letters-item' key={key}>
                        <div className='container_swiper'>
                            <img src={item.img} alt=""  className='swiper_img'/>
                            <h3 className='text_general swiper_h2'>{item.message}</h3>
                        </div>
                    </SwiperSlide>

                </>
            )
            )}

            
        </Swiper>
    </>
  )
}
