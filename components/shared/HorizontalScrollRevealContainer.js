import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import Link from 'next/link';

function HorizontalScrollRevealContainer({path}) {
    return (
        <Link href={`${path}`}>
            <div className='bg-[#282246] h-[164px] w-[50px] flex-shrink-0 cursor-pointer hover:opacity-75 flex items-center justify-center'>
                <FiMoreHorizontal className='h-[30px] w-[30px] text-white' />
            </div>
        </Link>

    )
}

export default HorizontalScrollRevealContainer