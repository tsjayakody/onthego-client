import React from 'react';
import PropTypes from 'prop-types';

function ContactUsErrorMessage({ errorMessage }) {
    return (
        <div className='mb-[10px]'>
            <p className='text-[12px] text-[#e91e63]'>{errorMessage}</p>
        </div>
    )
}

ContactUsErrorMessage.propTypes = {
    errorMessage: PropTypes.string,
}

export default ContactUsErrorMessage