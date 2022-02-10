import React from 'react'
import ErrorLeftContainer from './error/ErrorLeftContainer';
import ErrorRightContainer from './error/ErrorRightContainer';

function ErrorPage() {
    return (
        <div className='bg-#110E1F flex flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            <div class="my-auto ml-[77px] flex items-center space-x-[200px]">
                {/* left container */}
                <ErrorLeftContainer/>
                {/* right container */}
                <ErrorRightContainer/>
            </div>
        </div>
    )
}

export default ErrorPage