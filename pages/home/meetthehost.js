import React from 'react'
import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import ScrollContainer from 'react-indiana-drag-scroll'
import EpisodeContainer from '../../components/shared/EpisodeContainer'
import latestEpisodes from '../../data/LatestEpisode'

function meetthehost() {
  return (
    <div className="flex h-screen">
      <div className="overflow-y-scroll scrollbar-hide h-screen w-full mx-[60px] mt-[60px]">
        <div className='space-y-[200px]'>
          {/* header */}
          <div className='flex space-x-[200px] items-center'>
            <div className='space-y-[12px]'>
              {/* host bio */}
              <div className='space-y-3'>
                <h1 className='text-white text-[26px] font-semibold'>Travel With Wife</h1>
                <h1 className='text-white text-[12px] font font-semibold uppercase'>TRAVEL CONTENT CREATOR</h1>
              </div>
              <p className='text-[#666666] text-[15px] font-[400] max-w-[443px]'>
                A podcast for people who love to Travel, Hosts by Sri Lankan Travel Vloggers Kasun & Chamari. This podcast is based on our travel experiences and we will be talking on Budget travel strategies, Travel tips to see the world free of charge, Life of a digital nomad, Unconventional travel based lifestyle, fun travel jobs, and how to plan an epic adventure.
              </p>
            </div>
            {/* host image */}
            <div className='space-y-[21px]'>
              <img src="/assets/episode-cover.png" alt="" className='h-[244px] w-[268px] object-fill' />
              <div className='flex space-x-3 text-[#666666] items-center'>
                <p className='text-[#666666] text-[11px] font-[500]'>Follow Us On :</p>

                <button className='h-[13px] w-[13px]'>
                  <FaTwitter className='w-full h-full object-fill' />
                </button>
                <button className='h-[13px] w-[13px]'>
                  <FaFacebook className='w-full h-full object-fill' />
                </button>
                <button className='h-[13px] w-[13px]'>
                  <RiInstagramFill className='w-full h-full object-fill' />
                </button>
                <button className='h-[13px] w-[13px]'>
                  <FaYoutube className='w-full h-full object-fill' />
                </button>

              </div>
            </div>
          </div>

          {/* host episodes */}
          <div className='max-w-[800px] mx-auto'>
            <div className="mt-[20px] grid grid-cols-3 gap-[20px] cursor-pointer">
              {latestEpisodes.map((item, index) => (
                <EpisodeContainer key={index} image={'/assets/episode-cover.png'} title={item.episodeTitle} category={item.episodeCategory} />
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