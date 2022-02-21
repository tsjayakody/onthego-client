import React from 'react';
import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../custom/sliderstyles.css';

import 'swiper/css';
import "swiper/css/effect-coverflow";

function ImageSlider({ bannerList }) {
    return (
        <div className='z-0 w-full h-full'>
            <Swiper
                modules={[EffectCoverflow]}
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {bannerList.map((item) => (
                    <SwiperSlide className='swiper-slide swiper-slide-active' key={item.id}>
                        <img src={item.banner} alt="" className='w-[432px] h-[270px] object-fill' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ImageSlider