import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import "./Carrossel.scss"

export  function Carrossel({dato}) {
    
    return (
        <>
            <Swiper className='swiper-container' 
            modules={[Navigation, Pagination, Autoplay]}
            navigation 
            pagination = {{clickable: true}}
            autoplay = {{delay:3000}}
            slidesPerView={1}
            >
                {dato.map((item, key) => (
                    <SwiperSlide className='slide-item' key={key}>
                        <img src={item.img} alt="" />
                    </SwiperSlide>
                )
                )}
            </Swiper>
        </>
    )
}
