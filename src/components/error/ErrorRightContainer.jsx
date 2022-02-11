import React from 'react'
import error404 from '../assets/404.svg';
import error404left from '../assets/404-left.svg';
import error404right from '../assets/404-right.svg';

function ErrorRightContainer() {
    return (
        <div className='md:h-[400px] h-[300px] md:w-[400px] w-[300px] relative'>
            <img src={error404} alt="" className='h-[186px] md:h-[398px] w-[298px] md:w-[570px] absolute top-[0px] md:top-[-40px] left-0' />
            <img src={error404left} alt="" className='h-[122px] md:h-[247px] w-[111px] md:w-[221px] absolute bottom-[55px] md:bottom-[-25px] left-[-15px] md:left-[-130px]' />
            <img src={error404right} alt="" className='h-[122px] md:h-[247px] w-[111px] md:w-[221px] absolute bottom-[55px] md:bottom-[-21px] right-[-10px] md:right-[-118px]' />
        </div>
    )
}

export default ErrorRightContainer