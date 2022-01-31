import React from 'react';

function SocialButton({icon, name}) {

  let onClick = ()=>{console.log('social button pressed');};

  return (
  <div className='bg-transparent h-36.58 w-149 md:bg-#282246 md:flex md:items-center sm:pl-[13px]'>
    <button className='text-#666666 text-[12px] flex items-center md:text-#C4C4C4 md:pl-[8px]' onClick={onClick}>
    {/* icon */}
    {icon}
    {/* text */}
    <p className=' md:pl-[21px]'>{name}</p>
    </button>
  </div>
  );
}

export default SocialButton;

