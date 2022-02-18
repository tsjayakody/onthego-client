import React from 'react';
import { Link } from 'react-router-dom';
import sampleImage from '../assets/common-sample-image.png';
import PropTypes from 'prop-types';

function ShowsRecentlyUpdatedContainer({
    showsCover,
    showsTitle,
    showsDate
}) {
    return (
        <Link to='/shows/showsdetails'>
            <div className='bg-transparent md:bg-#282246 h-204 w-138 md:h-198 md:w-150 mr-[38px] mb-[41px] md:mb-[34px] '>
                {/* image banner here */}
                <img src={showsCover} alt="" className='h-138 w-138 md:h-140 md:w-150 object-fill' />
                <div className='w-138 md:w-150'>
                    <div className='w-full h-full flex-col'>
                        <div className='mx-auto max-w-[87px]'>
                            <p className='text-#FFFFFF text-[12px] text-center '>
                                {showsTitle}
                            </p>
                        </div>
                        <div className='max-full flex justify-end'>
                            <p className='text-#666666 text-[11px] md:text-[10px] text-right pr-[3px]'>
                                {showsDate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

ShowsRecentlyUpdatedContainer.defaultProps = {
    showsCover: sampleImage,
    showsTitle: '',
    showsDate: '',
}


ShowsRecentlyUpdatedContainer.propTypes = {
    showsCover: PropTypes.string,
    showsTitle: PropTypes.string,
    showsDate: PropTypes.string,
}

export default ShowsRecentlyUpdatedContainer;
