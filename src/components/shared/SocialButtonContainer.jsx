import React from 'react';
import PropTypes from 'prop-types';

function SocialButtonContainer({children}) {
  return (
    <div className='bg-transparent h-36.58 w-149 md:bg-#282246 md:flex md:items-center'>
        {children}
    </div>
  )
}

SocialButtonContainer.propTypes = {
  children: PropTypes.any,
}

export default SocialButtonContainer