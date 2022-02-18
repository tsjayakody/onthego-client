import React from 'react';
import { useState } from 'react';
import sidebarmenuicon from './assets/sidebar-menu-icon.svg';
import SidebarMenu from './sidebar/SidebarMenu';

function Sidebar({boxRefs}) {


    const [isopen, setisopen] = useState(true);

    return (
        //TODO : implement conditional style to show and hide navbar here
        <div>
            {!isopen ?
                (
                    <button className='md:hidden inline fixed top-[26px] md:top-[53px] left-[26px] z-10' onClick={() => (setisopen(!isopen))} >
                        <img src={sidebarmenuicon} alt="" className='h-[12px] w-[36px] object-fill' />
                    </button>
                ) :
                (
                    <>
                        <button className='md:hidden inline fixed top-[26px] md:top-[53px] left-[226px] z-10' onClick={() => (setisopen(!isopen))} >
                            <img src={sidebarmenuicon} alt="" className='h-[12px] w-[36px] object-fill' />
                        </button>
                        <SidebarMenu isopen={isopen}/>
                    </>
                )
            }
        </div>
    );
}

export default Sidebar;
