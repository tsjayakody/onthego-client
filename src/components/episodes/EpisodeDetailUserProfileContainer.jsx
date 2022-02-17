import React from 'react'
import twitterDarkIcon from '../assets/twitter-dark-icon.svg';
import facebookDarkIcon from '../assets/facebook-dark-icon.svg';
import instagramDarkIcon from '../assets/instagram-dark-icon.svg';
import sampleImage from '../assets/common-sample-image.png';
import PropTypes from 'prop-types'

function EpisodeDetailUserProfileContainer({
    personSample
}) {
    return (
        <div className='flex items-center md:items-start mr-[31px] space-x-[46px] mt-[25px] md:mt-[40px]'>
            <div className='flex-col'>
                <img src={personSample} alt="" className='object-fill w-[80px] h-[80px] lg:w-[146px] lg:h-[146px] md:ml-[15px]' />
                <div className='flex mt-[4px] lg:mt-[24px] items-center space-x-[4px]'>
                    <p className='text-#666666 text-[12px] pr-[20px] w-[50px]'>Follow:</p>
                    <a href={'https://www.twitter.com'} target="_blank" rel="noopener noreferrer">
                        <img src={twitterDarkIcon} alt="" className='w-[13px] h-[18px] object-fill' />
                    </a>
                    <a href={'https://www.facebook.com'} target="_blank" rel="noopener noreferrer">
                        <img src={facebookDarkIcon} alt="" className='w-[13px] h-[18px] object-fill' />
                    </a>
                    <a href={'https://www.instagram.com'} target="_blank" rel="noopener noreferrer">
                        <img src={instagramDarkIcon} alt="" className='w-[13px] h-[18px] object-fill' />
                    </a>
                </div>
            </div>
            <div className='flex-col space-y-[5px] md:max-w-[631px] md:pl-[117px]'>
                <p className='text-[#00D2CB] text-[15px] capitalize'>Marlon Dale Ferreira</p>
                <p className='text-[#6654C5] text-[10px] uppercase'>JOURNALIST - PODCASTER (SPORTS/NEWS)</p>
                <p className='text-[#C4C4C4] text-[14px] text-justify'>Our Podcast covers global sporting events on a daily basis and also provides a weekly sport news round up, which provides our listeners the option of clicking a button, listening in and staying attuned to global sport news at their convenience.</p>
            </div>
        </div>
    )
}

EpisodeDetailUserProfileContainer.defaultProps = {
    personSample: sampleImage,
}

EpisodeDetailUserProfileContainer.propTypes = {
    personSample: PropTypes.any
}

export default EpisodeDetailUserProfileContainer