import React from 'react'
import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import HostEpisodeContainer from '../../components/shared/HostEpisodeContainer'
import latestEpisodes from '../../data/LatestEpisode'

import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import { singleHostState } from '../../atoms/hostAtom'

import { useRouter } from 'next/router'


const fetcher = (url) => fetch(url).then((res) => res.json())

function meetthehost() {

  const router = useRouter()

  const [hostDetail, setHostDetail] =
    useRecoilState(singleHostState)

  //! host detail
  const { data: hostData, error: hostError } = useSWR(
    `http://app.onthego.lk/api/public/v1/hosters/${router.query.slug}`,
    fetcher
  )

  if (hostData) {
    setHostDetail(hostData)
  }


  return (
    <div className="flex h-screen">
      <div className="overflow-y-scroll scrollbar-hide h-screen w-full mx-[60px] mt-[60px]">
        <div className='space-y-[200px]'>
          {/* header */}
          <div className='flex space-x-[200px] items-center'>
            <div className='space-y-[12px]'>
              {/* host bio */}
              <div className='space-y-3'>
                <h1 className='text-white text-[26px] font-semibold capitalize'>{hostDetail.name}</h1>
                <h1 className='text-white text-[12px] font font-semibold uppercase'>{hostDetail.designation}</h1>
              </div>
              <p className='text-[#666666] text-[15px] font-[400] max-w-[443px] capitalize'>{hostDetail.description}</p>
            </div>
            {/* host image */}
            <div className='space-y-[21px]'>
              <img src={hostDetail.hoster_image} alt="" className='h-[244px] w-[268px] object-fill' />
              <div className='flex space-x-3 text-[#666666] items-center'>
                <p className='text-[#666666] text-[11px] font-[500]'>Follow Us On :</p>

                <a href={hostDetail.twitter} target="_blank" rel="noopener noreferrer">
                  <button className='h-[13px] w-[13px]'>
                    <FaTwitter className='w-full h-full object-fill' />
                  </button>
                </a>

                <a href={hostDetail.facebook} target="_blank" rel="noopener noreferrer">
                  <button className='h-[13px] w-[13px]'>
                    <FaFacebook className='w-full h-full object-fill' />
                  </button>
                </a>

                <a href={hostDetail.instagram} target="_blank" rel="noopener noreferrer">
                  <button className='h-[13px] w-[13px]'>
                    <RiInstagramFill className='w-full h-full object-fill' />
                  </button>
                </a>

                <a href={hostDetail.youtube} target="_blank" rel="noopener noreferrer">
                  <button className='h-[13px] w-[13px]'>
                    <FaYoutube className='w-full h-full object-fill' />
                  </button>
                </a>


              </div>
            </div>
          </div>

          {/* host episodes */}
          <div className='max-w-[800px] mx-auto'>
            <div className="mt-[20px] grid grid-cols-3 gap-[20px] cursor-pointer">
              {hostDetail.media.map((item, index) => (
                <HostEpisodeContainer key={item.id} data={item} />
              ))}
            </div>
          </div>

        </div>

        {/* spacer */}
        <div className="h-[180px]"></div>
      </div>
    </div>
  )
}

export default meetthehost