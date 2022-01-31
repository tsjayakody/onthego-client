import React from 'react';
import { Link } from 'react-router-dom';

function NavButtons({ icon, name, path }) {
    return (
        <>
            <li className="flex justify-between text-#FFFFFF hover:text-#00D2CB cursor-pointer items-center">
                <Link to={path} className='flex items-center focus:outline-none'>
                    {icon}
                    <span className="text-[14px] pl-[23.17px]">{name}</span>
                </Link>
            </li>
        </>
    );
}

export default NavButtons;
