import React from 'react'
import error404 from '../assets/404.svg';
import error404left from '../assets/404-left.svg';
import error404right from '../assets/404-right.svg';

function ErrorRightContainer() {
    return (
        <div className='h-[400px] w-[400px] relative'>
            <img src={error404} alt="" className='h-[398px] w-[570px] absolute top-[-40px] left-0' />
            <img src={error404left} alt="" className='h-[247px] w-[221px] absolute bottom-[-25px] left-[-130px]' />
            <img src={error404right} alt="" className='h-[247px] w-[221px] absolute bottom-[-22px] right-[-130px]' />
        </div>
    )
}

export default ErrorRightContainer