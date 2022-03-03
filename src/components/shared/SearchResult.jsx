import React from 'react';
import { Link } from 'react-router-dom';

import sampleImage from '../assets/common-sample-image.png';

function SearchResult({ title, language }) {
    return (
        <Link to={'/episodes/episodeslist/episodedetail'}>
            <div className='bg-#282246 lg:w-[363px] lg:h-[50px] text-#FFFFFF hover:text-[#00D2CB] hover:bg-#282246'>
                <div className='flex'>
                    <div className='w-[40px] h-[40px] ml-[5px]'>
                        <div class="w-full h-full rounded-full flex justify-center items-center bg-#00D2CB">
                            <img src={sampleImage} alt="" className='h-full w-full rounded object-fill' />
                        </div>
                    </div>
                    <div className='flex-col items-start justify-around ml-[10px]'>
                        <p className='text-[12px] truncate overflow-hidden'>{title}</p>
                        <p className='text-[10px] truncate overflow-hidden'>{language}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchResult