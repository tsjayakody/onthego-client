import React from 'react';
import Topbar from './shared/Topbar';

function Register() {
    return (
        <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
          <div className='flex flex-col h-screen'>
            <div className='py-1'>
              <Topbar/>
            </div>
            <div className='flex-1 overflow-y-auto'>
            </div>
          </div>
        </div>
      );
}

export default Register;
