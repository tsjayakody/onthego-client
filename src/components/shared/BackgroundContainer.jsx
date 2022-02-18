import React from 'react';
import PropTypes from 'prop-types'

function BackgroundContainer({children}) {
  return (
    <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto overflow-x-auto md:pl-[203px] mb-[80px] md:mb-[100px]'>
        {children}
    </div>
  );
}

BackgroundContainer.propTypes = {
  children: PropTypes.any,
}

export default BackgroundContainer