import React from 'react';
import useRipple from "use-ripple-hook";

function NewsLetter() {

    const newsLetterPlaceHolderText = 'Enter Your Emaill';
    const [ripple, event] = useRipple();

    return (
        <div className='bg-#282246 pt-[30px] pb-[19px] ml-[26px] md:ml-[0px] mr-[33px] flex-col justify-start '>
            <h3 className='text-#FFFFFF text-[20px] lg:text-[26px] ml-[10px] md:ml-[15px] lg:ml-[25px]'>Sign Up for our newsletter</h3>
            <div className='lg:flex md:items-center ml-[10px] md:ml-[15px] lg:ml-[25px]'>
                <p className='text-#666666 text-[10px] md:text-[15px] lg:max-w-[454px] text-justify mr-[20px]'>Get notified about updates and be the first to get early access to new episodes.</p>
                <div className='flex lg:pl-[12px] pr-[28px] pt-[12px] pb-[19px] md:w-[504px] '>
                    <div className='w-3/4 h-[22px] md:h-[48px]'>
                        <input type="text" name='newsletter' className='bg-#282246 border border-#453598 w-full h-full text-[10px] px-[3px]' placeholder={newsLetterPlaceHolderText} />
                    </div>
                    <div className='w-1/4 h-[22px] md:h-[48px]'>
                        <button ref={ripple} onMouseDown={event} type='submit' className='h-full w-full bg-#00D2CB text-[12px] text-#282246 text-center'>Subcribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
