import React from 'react';

function NewsLetter() {

    const newsLetterPlaceHolderText = 'Enter Your Emaill';

    return (
        <div className='bg-#282246 pt-[30px] pb-[19px] pl-[26px] pr-[33px] w-full flex-col justify-start'>
            <h3 className='text-#FFFFFF text-[20px] md:text-[26px]'>Sign Up for our newsletter</h3>
            <div className='md:flex md:items-center'>
                <p className='text-#666666 text-[10px] md:text-[15px] md:w-[454px] text-justify'>Get notified about updates and be the first to get early access to new episodes.</p>
                <div className='flex pl-[12px] pr-[28px] pt-[12px] pb-[19px] md:w-[504px] '>
                    <div className='w-3/4 h-[22px] md:h-[48px]'>
                        <input type="text" name='newsletter' className='bg-#282246 border border-#453598 w-full h-full text-[10px] px-[3px]' placeholder={newsLetterPlaceHolderText} />
                    </div>
                    <div className='w-1/4 h-[22px] md:h-[48px]'>
                        <button type='submit' className='h-full w-full bg-#00D2CB text-[12px] text-#282246 text-center'>Subcribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
