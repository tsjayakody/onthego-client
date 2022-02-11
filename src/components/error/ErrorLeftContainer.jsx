import React from 'react'

function ErrorLeftContainer() {
    return (
        <div className='flex-col'>
            <h1 className='text-[#00D2CB] text-[40px] mb-[10px] md:mb-[29px]'>Ooops.....</h1>
            <h1 className='text-[#FFFFFF] text-[35px] mb-[10px] md:mb-[41px]'>Page not found</h1>
            <p className='text-[#FFFFFF] text-[15px] w-[245px] mb-[26px] md:mb-[46px]'>We’re unable to find the page you’re looking for.</p>
            <button className='w-[212px] h-[40px] bg-[#2F2566]'>
                <p className='text-center text-[15px] text-[#00D2CB] uppercase'>back to home</p>
            </button>
        </div>
    )
}

export default ErrorLeftContainer