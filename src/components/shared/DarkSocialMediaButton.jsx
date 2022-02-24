import React from 'react';
import PropTypes from 'prop-types'

function DarkSocialMediaButton({ icon, link }) {
  return (
    <div className='h-[18px] w-[18px]'>
      <a href={link} target="_blank" rel="noopener noreferrer" >
        <div className='text-[#666666] hover:text-[#00D2CB] h-full w-full'>
          {icon}
        </div>
      </a>
    </div>
  )
}

DarkSocialMediaButton.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
}

export default DarkSocialMediaButton