import React from 'react'
import useRipple from "use-ripple-hook";
import {Link} from 'react-router-dom';

function ErrorLeftContainer() {

    const [ripple, event] = useRipple();

    return (
        <div className='flex-col'>
            <h1 className='text-[#00D2CB] text-[40px] mb-[10px] md:mb-[29px]'>Ooops.....</h1>
            <h1 className='text-[#FFFFFF] text-[35px] mb-[10px] md:mb-[41px]'>Page not found</h1>
            <p className='text-[#FFFFFF] text-[15px] w-[245px] mb-[26px] md:mb-[46px]'>We’re unable to find the page you’re looking for.</p>
            <button ref={ripple} onMouseDown={event} className='w-[212px] h-[40px] bg-[#2F2566]'>
                <Link to='/'>
                    <p className='text-center text-[15px] text-[#00D2CB] uppercase'>back to home</p>
                </Link>
            </button>
        </div>
    )
}

export default ErrorLeftContainer