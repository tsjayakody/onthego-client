import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import topNavBreadcrumb from '../assets/Breadcrumb.svg';
import { Link } from 'react-router-dom';

function TopNavigationButton() {
    return (
        <div className='hidden md:inline-flex items-center'>
            <div className='text-[#FFFFFF] hover:text-[#00D2CB] cursor-pointer h-[20px] w-[20px]'>
                <Link to={'/'}>
                    <AiFillHome />
                </Link>
            </div>
            <div className=''>
                <img src={topNavBreadcrumb} alt="" className='h-[32px] w-[32px] object-contain' />
            </div>
        </div>
    )
}

export default TopNavigationButton