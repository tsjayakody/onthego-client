import React from 'react'
import PropTypes from 'prop-types'

function StackNumberPill({episodeNumber}) {
    return (
        <div className='bg-gradient-to-b from-[#000000]  to-[#282828] opacity-75 rounded-r-20 rounded-l-20 h-[21px] w-[101px] absolute top-[3px] right-[3px] text-center'>
            <p className='text-#FFFFFF text-[12px] z-10'>{episodeNumber} Ep</p>
        </div>
    )
}

StackNumberPill.defaultProps = {
    episodeNumber : 0,
}

StackNumberPill.propTypes = {
    episodeNumber: PropTypes.number,
}

export default StackNumberPill