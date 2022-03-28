import Link from 'next/link'
import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaInstagramSquare,
} from 'react-icons/fa'

function MeetTheHostContainer({
  image,
  hostName,
  hostType,
  twitterLink,
  facebookLink,
  pinterestLink,
  instagramlink,
  slug
}) {

  return (
    //<Link href={'/home/'+slug}>
    <Link href={{ pathname: `/hosts/${slug}`, query: { name: `${slug}` } }}>
      <div className="h-[180px] w-[120px] flex-shrink-0 cursor-pointer hover:opacity-75">
        <img src={image} alt="" className="h-[120px] rounded-full" />
        <div className="space-y-[1px]">
          <p className="text-center text-[14px] font-[400] capitalize text-white">
            {hostName}
          </p>
          <p className="text-center text-[10px] font-[500] uppercase text-[#666666]">
            {hostType}
          </p>
        </div>
        <div className="mx-[3px] flex space-x-[12px] text-[#666666] hover:text-[#00D2CB]">
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-[10px]" />
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="h-[10px]" />
          </a>

          <a href={pinterestLink} target="_blank" rel="noopener noreferrer">
            <FaPinterest className="h-[10px]" />
          </a>

          <a href={instagramlink} target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className="h-[10px]" />
          </a>
        </div>
      </div>
    </Link>
  )
}

export default MeetTheHostContainer
