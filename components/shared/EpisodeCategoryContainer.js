import React from 'react'
import Link from 'next/link';

function EpisodeCategoryContainer({ image, category, episodeNumber, slug }) {
    return (
        // <Link href={'/episodes/episodecategory'}>
        <Link href={{ pathname: `/episodes/${slug}`, query: { name: `${slug}` } }}>
            <div className="h-[179px] w-[150px] bg-[#282246] cursor-pointer relative hover:opacity-75">
                <img src={image} alt="" className="h-[150px] w-[150px] object-fill" />
                <p className="text-white text-[14px] font-semibold text-center">{category}</p>
                <div className='h-[21px] w-[101px] rounded-xl opacity-80 absolute top-[3px] right-[3px] bg-gradient-to-b from-[#000000] to-[#282828] text-white'>
                    <p className='text-center text-[12px] font-[700]'>{episodeNumber} Ep</p>
                </div>
            </div>
        </Link>
    )
}

export default EpisodeCategoryContainer