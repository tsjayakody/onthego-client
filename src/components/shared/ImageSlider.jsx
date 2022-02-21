import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ImageSlider({ bannerList }) {
    return (
        <div className='w-full h-full'>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {bannerList.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.banner} alt="" className='h-full w-full'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ImageSlider