import React from 'react'
import error404 from '../components/assets/404.svg';
import error404left from '../components/assets/404-left.svg';
import error404right from '../components/assets/404-right.svg';

function ErrorPage() {
    return (
        <div className='bg-#110E1F flex flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            <div class="my-auto ml-[77px] flex items-center space-x-[200px]">
                {/* left container */}
                <div className='flex-col'>
                    <h1 className='text-[#00D2CB] text-[40px] mb-[29px]'>Ooops.....</h1>
                    <h1 className='text-[#FFFFFF] text-[35px] mb-[41px]'>Page not found</h1>
                    <p className='text-[#FFFFFF] text-[15px] w-[245px] mb-[46px]'>We’re unable to find the page you’re looking for.</p>
                    <button className='w-[212px] h-[40px] bg-[#2F2566]'>
                        <p className='text-center text-[15px] text-[#00D2CB] uppercase'>back to home</p>
                    </button>
                </div>
                {/* right container */}
                <div className='h-[400px] w-[400px] relative'>
                    <img src={error404} alt="" className='h-[398px] w-[570px] absolute top-[-40px] left-0' />
                    <img src={error404left} alt="" className='h-[247px] w-[221px] absolute bottom-[-25px] left-[-130px]' />
                    <img src={error404right} alt="" className='h-[247px] w-[221px] absolute bottom-[-22px] right-[-130px]' />
                </div>
            </div>
        </div>
    )
}

export default ErrorPage