import React from 'react'

function EpisodeDetailUserProfileContainer({
    personSample,
    twitterButtonPressed,
    twitterDarkIcon,
    facebookButtonPressed,
    facebookDarkIcon,
    instagramButtonPressed,
    instagramDarkIcon
}) {
    return (
        <div className='flex items-center mr-[31px] space-x-[46px]'>
            <div className='flex-col'>
                <img src={personSample} alt="" className='object-fill w-[80px] h-[80px]' />
                <div className='flex pt-[4px] items-center space-x-[4px] w-[80px]'>
                    <p className='text-#666666 text-[12px] pr-[20px] w-[50px]'>Follow:</p>
                    <button onClick={twitterButtonPressed}>
                        <img src={twitterDarkIcon} alt="" className='w-[13px] h-[18px] object-fill' />
                    </button>]
                    <button onClick={facebookButtonPressed}>
                        <img src={facebookDarkIcon} alt="" className='w-[13px] h-[18px] object-fill' />
                    </button>
                    <button onClick={instagramButtonPressed}>
                        <img src={instagramDarkIcon} alt="" className='w-[13px] h-[18px] object-fill' />
                    </button>
                </div>
            </div>
            <div className='flex-col space-y-[5px]'>
                <p className='text-[#00D2CB] text-[15px] capitalize'>Marlon Dale Ferreira</p>
                <p className='text-[#6654C5] text-[10px] uppercase'>JOURNALIST - PODCASTER (SPORTS/NEWS)</p>
                <p className='text-[#C4C4C4] text-[14px] text-justify'>Our Podcast covers global sporting events on a daily basis and also provides a weekly sport news round up, which provides our listeners the option of clicking a button, listening in and staying attuned to global sport news at their convenience.</p>
            </div>
        </div>
    )
}

export default EpisodeDetailUserProfileContainer