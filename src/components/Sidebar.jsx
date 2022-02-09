import React from 'react';
import { useState } from 'react';
import sidebarmenuicon from './assets/sidebar-menu-icon.svg';
import SidebarMenu from './sidebar/SidebarMenu';

function Sidebar() {


    const [isopen, setisopen] = useState(false);

    return (
        <>
            {!isopen ?
                (
                    <button className='fixed top-[26px] md:top-[53px] left-[26px] md:hidden inline' onClick={() => (setisopen(!isopen))} >
                        <img src={sidebarmenuicon} alt="" className='h-[12px] w-[36px] object-fill' />
                    </button>
                ) :
                (
                    <>
                        <button className='fixed top-[26px] md:top-[53px] left-[226px] md:hidden inline' onClick={() => (setisopen(!isopen))} >
                            <img src={sidebarmenuicon} alt="" className='h-[12px] w-[36px] object-fill' />
                        </button>
                        <SidebarMenu isopen={isopen} className="md:hidden inline"/>
                    </>
                )
            }
        </>
    );
}

export default Sidebar;
