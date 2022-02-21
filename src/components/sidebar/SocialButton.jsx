import React from 'react';
import SocialButtonContainer from '../shared/SocialButtonContainer';
import useRipple from "use-ripple-hook";
import PropTypes from 'prop-types'

function SocialButton({ icon, name, link }) {

  const [ripple, event] = useRipple();

  return (
    <SocialButtonContainer>
      <button
        ref={ripple}
        onMouseDown={event}
        className='w-full h-full text-#666666 text-[12px] md:text-#C4C4C4 '>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className='pl-[10px] flex items-center'>
            {icon}
            <p className='hover:text-#00D2CB md:pl-[21px]'>{name}</p>
          </div>
        </a>
      </button>
    </SocialButtonContainer>
  );
}

SocialButton.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
  link: PropTypes.string,
}

export default SocialButton;

