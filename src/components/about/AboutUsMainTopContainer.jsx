import React from 'react'
import sampleImgeSlider from '../assets/sample-image-slider.png';

function AboutUsMainTopContainer() {

    const sampleAboutText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";

    return (
        <div className=' items-center'>
            <div className='hidden md:inline mx-auto flex-col space-y-[62px]'>
                <div className='mx-auto max-h-[269px] max-w-[432px]'>
                    <img src={sampleImgeSlider} alt="" className='object-fill' />
                </div>
                <div className='h-[205px] w-[632px] mx-auto'>
                    <p className='text-#FFFFFF text-[15px] text-justify'>
                        {sampleAboutText}
                    </p>
                </div>
            </div>
            <div>
                <div className='md:hidden mx-auto inline-flex h-[464px] w-full'>
                    <img src={sampleImgeSlider} alt="AboutImage" className='z-0 object-fill' />
                    <p className='z-1 text-#FFFFFF text-[17px] text-center h-[286px] w-[282px]'>{sampleAboutText}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsMainTopContainer
