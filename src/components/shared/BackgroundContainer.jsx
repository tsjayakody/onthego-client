import React from 'react'

function BackgroundContainer({children}) {
  return (
    <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto overflow-x-auto md:pl-[203px] pb-[150px]'>
        {children}
    </div>
  );
}

export default BackgroundContainer