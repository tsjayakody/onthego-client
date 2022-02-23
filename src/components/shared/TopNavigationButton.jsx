import React from 'react';
import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import topNavBreadcrumb from '../assets/Breadcrumb.svg';
import { Link } from 'react-router-dom';

function TopNavigationButton() {

    const location = useLocation();

    const [routerLocation, setRouterLocation] = useState(location.pathname);

    const shedString = (string, separator) => {
        //we split the string and make it free of separator
        const separatedArray = string.split(separator);
        //we join the separatedArray with empty string
        const separatedString = separatedArray.join("");
        return separatedString;
     }

     let newPath = shedString(`${routerLocation}`, '/');

    return (
        <div className='hidden md:inline-flex items-center'>
            <div className='flex items-center'>
                <div className='text-[#FFFFFF] hover:text-[#00D2CB] cursor-pointer h-[20px] w-[20px]'>
                    <Link to={'/'}>
                        <AiFillHome />
                    </Link>
                </div>
                <div className=''>
                    <img src={topNavBreadcrumb} alt="" className='h-[32px] w-[32px] object-contain' />
                </div>
            </div>
            <div className='flex items-center'>
                <span className='text-[15px] text-[#FFFFFF] flex items-center'>
                    {routerLocation.replace(/[^a-z0-9-]/g, `-`)}
                </span>
            </div>
        </div>
    )
}

export default TopNavigationButton