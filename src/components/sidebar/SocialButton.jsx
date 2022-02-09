import React from 'react';
import SocialButtonContainer from '../shared/SocialButtonContainer';

function SocialButton({icon, name}) {

  let onClick = ()=>{console.log('social button pressed');};

  return (
  <SocialButtonContainer>
    <button className='text-#666666 text-[12px] flex items-center md:text-#C4C4C4 md:pl-[8px]' onClick={onClick}>
      {/* icon */}
      {icon}
      {/* text */}
      <p className=' md:pl-[21px]'>{name}</p>
    </button>
  </SocialButtonContainer>
  );
}

export default SocialButton;

