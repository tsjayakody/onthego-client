import React from 'react'
import Link from 'next/link'

function NotFound() {
    return (
        <div className="h-screen ">
            <div className="overflow-y-scroll scrollbar-hide h-screen mx-[15px] lg:mx-[60px] pt-[100px]">

                {/* desktop view */}
                <div className='hidden lg:inline-flex space-x-[200px]'>
                    {/* left side */}
                    <div className="flex-col">
                        <h1 className='text-[#00D2CB] text-[40px] font-medium'>Ooops.....</h1>
                        <h1 className='text-white text-[35px] font-[700] mt-[29px]'>Page not found</h1>
                        <p className='text-white text-[15px] max-w-[245px] mt-[41px]'>We’re unable to find the page you’re looking for.</p>
                        <Link href={'/'}>
                            <button className='bg-[#2F2566] text-[#00D2CB] text-[15px] h-[40px] w-[212px] hover:opacity-75 mt-[46px]'>
                                <p className='text-[15px] text-center uppercase'>back to home</p>
                            </button>
                        </Link>
                    </div>

                    {/* right side */}
                    <div className='relative'>
                        <img src="/assets/404.svg" alt="" className='h-[398px] w-[570px] '/>
                        <img src="/assets/404-sub.svg" alt="" className='h-[221px] w-[247px] absolute -bottom-[70px] -left-[115px]'/>
                        <img src="/assets/404-sub.svg" alt="" className='h-[221px] w-[247px] absolute -bottom-[70px] -right-[10px]'/>
                    </div>
                </div>

                {/* mobile view */}
                <div className='inline flex-col lg:hidden justify-center space-y-[39px]'>

                    {/* top contaier */}
                    <div className='relative'>
                        <img src="/assets/404.svg" alt="" className='h-[186px] w-[298px] '/>
                        <img src="/assets/404-sub.svg" alt="" className='h-[122px] w-[111px] absolute bottom-[0px] left-[0px]'/>
                        <img src="/assets/404-sub.svg" alt="" className='h-[122px] w-[111px] absolute bottom-[0px] right-[0px]'/>
                    </div>

                    {/* bittom container */}
                    <div className="flex-col">
                        <h1 className='text-[#00D2CB] text-[28px] font-medium'>Ooops.....</h1>
                        <h1 className='text-white text-[35px] font-[700] mt-[10px]'>Page not found</h1>
                        <p className='text-white text-[15px] max-w-[245px] mt-[10px] font-[400]'>We’re unable to find the page you’re looking for.</p>
                        <Link href={'/'}>
                            <button className='bg-[#2F2566] text-[#00D2CB] text-[15px] h-[40px] w-[212px] hover:opacity-75 mt-[26px]'>
                                <p className='text-[15px] text-center uppercase'>back to home</p>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* spacer */}
                <div className="h-[180px]"></div>
            </div>
        </div>
    )
}

export default NotFound