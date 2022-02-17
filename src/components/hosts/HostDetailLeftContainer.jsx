import React from 'react'
import PropTypes from 'prop-types'

function HostDetailLeftContainer({
    hostName,
    hostType,
    hostDetails
}) {
    return (
        <div className="flex-col max-w-[453px] justify-center md:justify-start space-y-[10px] mr-[44px] md:mr-[0px]">
            <h1 className='text-#FFFFFF text-[26px] text-center md:text-left'>{hostName}</h1>
            <p className='text-[#FFFFFF] text-[12px] text-center md:text-left md:pb-[20px]'>{hostType}</p>
            <p className='text-[#666666] text-[15px] text-justify md:text-left'>{hostDetails}</p>
        </div>
    )
}

HostDetailLeftContainer.defaultProps = {
    hostName: '_',
    hostType: '_',
    hostDetails: '_',
}

HostDetailLeftContainer.propTypes = {
    hostName: PropTypes.string,
    hostType: PropTypes.string,
    hostDetails: PropTypes.string,
}

export default HostDetailLeftContainer