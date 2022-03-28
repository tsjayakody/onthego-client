import Link from 'next/link'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

function EpisodeCategoryListContainer({ data, type }) {

    return (
        <div className='flex lg:mx-auto w-full lg:max-w-[1000px] space-x-[20px] items-center'>
            <div className='hidden lg:inline text-[#00D2CB]'>
                <p className='text-[20px] font-[500]'>1.</p>
            </div>
            <div className="lg:mx-auto w-full flex-grow h-[90px] lg:h-[116px] bg-[#282246] flex">
                <Link href={'/episodes/episodecategory/episodedetail'}>
                    <img src={data.original_url} alt="" className='h-[90px] w-[80px] lg:h-[116px] lg:w-[110px] cursor-pointer' />
                </Link>
                <div className='flex-grow flex-col'>
                    <div className='w-full h-[30px] lg:h-[45px] bg-gradient-to-b from-[#2F2566] to-[#110E1F]'>
                        <div className='w-full h-full flex justify-start items-center mx-[17px] relative'>
                            <p className='text-[#666666] text-[10px] font-[500]'>{type}</p>
                            <div className='absolute top-[11px] right-[26px] bg-gradient-to-b from-[#000000] to-[#282828] rounded-lg flex px-[5px]'>
                                <p className='text-white text-[6px] lg:text-[8px] font-[400] mx-auto items-center'>{data.created_at.substring(0, 10)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[60px] lg:h-[69px] bg-[#282246]'>
                        <div className='flex justify-between items-center mx-[17px] h-full'>
                            <Link href={'/episodes/episodecategory/episodedetail'}>
                                <p className='text-white text-[11px] lg:text-[14px] font-[400] cursor-pointer'>{data.name}</p>
                            </Link>
                            <button onClick={console.log("Listen Now button pressed")} className='flex z-10 bg-[#453598] h-[40px] w-[50px] lg:w-[140px] hover:bg-[#282246] text-[#00D2CB] items-center justify-center rounded-full lg:rounded-none'>
                                <div className='flex space-x-[20px]'>
                                    <FaPlay className='h-[14px] w-[14px] ml-[3px] lg:ml-[0px]' />
                                    <p className='text-[#00D2CB] text-[10px] hidden lg:inline'>LISTEN NOW</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EpisodeCategoryListContainer