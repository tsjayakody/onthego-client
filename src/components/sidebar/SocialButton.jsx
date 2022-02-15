import React from 'react';
import SocialButtonContainer from '../shared/SocialButtonContainer';
import useRipple from "use-ripple-hook";

function SocialButton({ icon, name }) {

  let onClick = () => { console.log('social button pressed'); };
  const [ripple, event] = useRipple();

  return (
    <SocialButtonContainer>
      <button
        ref={ripple}
        onMouseDown={event}
        className='w-full h-full text-#666666 text-[12px] md:text-#C4C4C4 '
        onClick={onClick}>
          <div className='pl-[10px] flex items-center'>
            {icon}
            <p className=' md:pl-[21px]'>{name}</p>
          </div>
      </button>
    </SocialButtonContainer>
  );
}

export default SocialButton;

