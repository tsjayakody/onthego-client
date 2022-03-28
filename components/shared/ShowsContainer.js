import React from 'react'
import Link from 'next/link'

function ShowsContainer({ data, slug }) {
    return (
        <Link href={{ pathname: `/shows/${slug}`, query: { name: `${slug}` } }}>
            <div className="h-[210px] w-[150px] bg-[#282246] cursor-pointer hover:opacity-75 flex-col relative">
                <img src={data.show_image} alt="" className="h-[150px] w-[150px] object-fill" />
                <div className='flex items-center justify-center h-[60px] w-full'>
                    <p className=" text-white text-[14px] font-semibold text-center mx-auto justify-center">{data.name}</p>
                </div>
                <div className='h-[21px] w-[101px] rounded-xl opacity-80 absolute top-[3px] right-[3px] bg-gradient-to-b from-[#000000] to-[#282828] text-white'>
                    <p className='text-center text-[12px] font-[700]'>{data.media.length} Ep</p>
                </div>
            </div>
        </Link>
    )
}

export default ShowsContainer