import React from 'react'

function StackNumberPill({episodeNumber}) {
    return (
        <div className='bg-gradient-to-b from-#000000/60 to-#282828 opacity-85 rounded-r-20 rounded-l-20 h-[21px] w-[101px] absolute top-[3px] right-[3px] text-center'>
            <p className='text-#FFFFFF text-[12px]'>{episodeNumber} Ep</p>
        </div>
    )
}

export default StackNumberPill