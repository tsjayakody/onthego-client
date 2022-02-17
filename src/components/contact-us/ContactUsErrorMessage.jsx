import React from 'react'

function ContactUsErrorMessage({ errorMessage }) {
    return (
        <div className='mb-[10px]'>
            <p className='text-[12px] text-[#e91e63]'>{errorMessage}</p>
        </div>
    )
}

export default ContactUsErrorMessage