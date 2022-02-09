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
                    <button className='fixed top-[53px] left-[26px]' onClick={() => (setisopen(!isopen))} >
                        <img src={sidebarmenuicon} alt="" className='h-[12px] w-[36px] object-fill' />
                        {/* <sidebarmenuicon className='h-[12px] w-[36px] object-fill hover:bg-#00D2CB'/> */}
                    </button>
                ) :
                (
                    <>
                        <button className='fixed top-[53px] left-[226px]' onClick={() => (setisopen(!isopen))} >
                            <img src={sidebarmenuicon} alt="" className='h-[12px] w-[36px] object-fill' />
                            {/* <sidebarmenuicon className='h-[12px] w-[36px] object-fill hover:bg-#00D2CB'/> */}
                        </button>
                        <SidebarMenu isopen={isopen}/>
                    </>
                )
            }
        </>
    );
}

export default Sidebar;
