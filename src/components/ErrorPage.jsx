import React from 'react'
import ErrorLeftContainer from './error/ErrorLeftContainer';
import ErrorRightContainer from './error/ErrorRightContainer';

function ErrorPage() {
    return (
        <div className='bg-#110E1F flex flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            <div class="my-auto mx-auto md:ml-[77px]">
                {/* mobile view */}
                <div className='hidden md:inline-flex space-x-[173px] items-center'>
                    {/* left container */}
                    <ErrorLeftContainer/>
                    {/* right container */}
                    <ErrorRightContainer/>
                </div>
                {/* dekstop/web view */}
                <div className='inline-table md:hidden md:space-y-[39px] justify-center'>
                    {/* right container */}
                    <ErrorRightContainer/>
                    {/* left container */}
                    <ErrorLeftContainer/>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage