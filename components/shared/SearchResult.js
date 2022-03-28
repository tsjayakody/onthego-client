import React from 'react';

function SearchResult({ title, language }) {
    return (
        
            <div className='bg-#282246 lg:w-[363px] lg:h-[50px] text-white hover:text-[#00D2CB] hover:bg-[#282246]'>
                <div className='flex'>
                    <div className='w-[40px] h-[40px] ml-[5px]'>
                        <div class="w-full h-full rounded-full flex justify-center items-center bg-#00D2CB">
                            <img src="/assets/episode-cover.png" alt="" className='h-full w-full rounded object-fill' />
                        </div>
                    </div>
                    <div className='flex-col items-start justify-around ml-[10px]'>
                        <p className='text-[12px] truncate overflow-hidden'>{title}</p>
                        <p className='text-[10px] truncate overflow-hidden'>{language}</p>
                    </div>
                </div>
            </div>
    )
}

export default SearchResult