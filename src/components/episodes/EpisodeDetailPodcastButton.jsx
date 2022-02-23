import React from 'react';
import useRipple from "use-ripple-hook";

function EpisodeDetailPodcastButton({
  buttonName,
  buttonPressed,
  buttonIcon,
  isDark,
  isIconOnly,
}) {

  // ripple buton declaration
  const [ripple, event] = useRipple();

  return (
    <button ref={ripple} onMouseDown={event} className={`h-[30px] w-[86px] md:w-[140px] md:h-[40px] bg-[#453598] ${isDark && 'bg-transparent'} hover:bg-[#1B1730] flex items-center justify-center p-[3px]`} onClick={buttonPressed}>
      {buttonIcon}
      <p className={`text-[#00D2CB] text-[9px] text-center ml-[5px] md:ml-[10px] ${isIconOnly && 'hidden'}`}>{buttonName}</p>
    </button>
  )
}

export default EpisodeDetailPodcastButton