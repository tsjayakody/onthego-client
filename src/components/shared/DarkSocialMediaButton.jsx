import React from 'react'

function DarkSocialMediaButton({icon, onclick}) {
  return (
        <button className='h-[18px] w-[13px]' onclick={onclick}>
            <img src={icon} alt="" />
        </button>
  )
}

export default DarkSocialMediaButton