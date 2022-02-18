import React from 'react'
import PropTypes from 'prop-types';

function ShowsDetailLeftContainer({
    showsTitle,
    noOfEpisodes,
    showsDescription
}) {
    return (
        <div className="flex-col max-w-[453px] justify-start space-y-[10px]">
            <h1 className='text-#FFFFFF text-[20px] md:text-[26px] mr-[44px] md:mr-[0px] text-center md:text-left'>
                {showsTitle}
            </h1>
            <p className='text-[#FFFFFF] text-[10px] text-center md:text-left mr-[44px] md:mr-[0px]'>
                {noOfEpisodes}
            </p>
            <p className='text-[#666666] text-[12px] text-center md:text-left mr-[44px] md:mr-[0px]'>
                {showsDescription}
            </p>
        </div>
    )
}

ShowsDetailLeftContainer.defaultProps = {
    showsTitle: '',
    noOfEpisodes: 0,
    showsDescription: '',
}

ShowsDetailLeftContainer.propTypes = {
    showsTitle: PropTypes.string,
    noOfEpisodes: PropTypes.number,
    showsDescription: PropTypes.string,
}

export default ShowsDetailLeftContainer