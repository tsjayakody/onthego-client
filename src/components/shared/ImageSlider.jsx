import React from 'react';
import { EffectCards, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/effect-coverflow";

function ImageSlider({ bannerList }) {
    return (
        <div className='w-full h-full'>
            <Swiper
                modules={[EffectCoverflow]}
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
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