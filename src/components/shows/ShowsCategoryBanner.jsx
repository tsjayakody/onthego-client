import React from 'react';
import { Link } from 'react-router-dom';
import StackNumberPill from '../shared/StackNumberPill';
import sampleImage from '../assets/common-sample-image.png';
import PropTypes from 'prop-types'

function ShowsCategoryBanner({
    showCover,
    showName,
    episodeList
}) {
    return (
        <Link to='/shows/showsdetails'>
            <div className='bg-transparent h-[192px] w-[170px] md:w-[150px] md:h-[172px] mr-[38px]'>
                <img
                    src={showCover}
                    alt=""
                    height='150'
                    width='150'
                />
                <div className='bg-#282246 flex justify-center items-center h-[2.5rem] w-[9.375rem]'>
                    <p className='text-#FFFFFF text-14px'>
                        {showName}
                    </p>
                </div>
            </div>
        </Link>
    );
}

ShowsCategoryBanner.defualtProps = {
    showCover: sampleImage,
    showName: '',
}

ShowsCategoryBanner.propTypes = {
    showCover: PropTypes.string,
    showName: PropTypes.string,
}

export default ShowsCategoryBanner;
