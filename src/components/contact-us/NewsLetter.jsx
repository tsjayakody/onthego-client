import React from 'react';

function NewsLetter() {

    const newsLetterPlaceHolderText = 'Enter Your Emaill';

    return (
        <div className='bg-#282246 pt-[30px] pb-[19px] pl-[26px] pr-[33px] w-full flex-col justify-start'>
            <h3 className='text-#FFFFFF text-[20px]'>Sign Up for our newsletter</h3>
            <p className='text-#666666 text-[10px]'>Get notified about updates and be the first to get early access to new episodes.</p>
            <div className='flex pl-[12px] pr-[28px] pt-[12px] pb-[19px]'>
                <div className='w-3/4 h-[22px] '>
                    <input type="text" name='newsletter' className='bg-#282246 border border-#453598 w-full h-full text-[10px] px-[3px]' placeholder={newsLetterPlaceHolderText} />
                </div>
                <div className='w-1/4 h-[22px]'>
                    <button type='submit' className='h-full w-full bg-#00D2CB text-[12px] text-#282246 text-center'>Subcribe</button>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
