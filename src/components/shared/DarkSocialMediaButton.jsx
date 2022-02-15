import React from 'react'

function DarkSocialMediaButton({ icon, link }) {
  return (
    <div className='h-[18px] w-[18px]'>
      <a href={link} target="_blank" rel="noopener noreferrer" >
        <img src={icon} alt="" className='object-fill'/>
      </a>
    </div>
  )
}

export default DarkSocialMediaButton