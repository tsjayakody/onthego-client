import React from 'react'
import { FaPlay, FaSpotify, FaPodcast } from 'react-icons/fa'
import { SiGooglepodcasts } from 'react-icons/si'
import ScrollContainer from 'react-indiana-drag-scroll'
import relatedEpisodes from '../../../data/RelatedEpisodes'
import EpisodeContainer from '../../../components/shared/EpisodeContainer'

function EpisodeDetail() {
    return (
        <div className="flex h-screen">
            <div className="overflow-y-scroll scrollbar-hide h-screen w-full mx-[17px] lg:mx-[60px]">
                {/* episode detail content */}

                {/* header-div */}
                <div className=''>
                    {/* desktop-view */}
                    <div className='hidden lg:inline-flex space-x-[11px] items-center'>
                        <div className='space-y-[25px]'>
                            <p className='text-[#666666] text-[11px] font-[500]'>SPORTS - BATTLE OF THE BLUES - ROYAL THOMIAN CRICKET ENCOUNTER</p>
                            <h1 className='text-white text-[26px] font-[500]'>142nd “Battle of the Blues” Ends In A Watery Draw</h1>
                            <p className='text-white text-[9px] font-[400]'>OCTOBER 18,2021- EPISODE 70</p>
                            <div className='flex space-x-[12px] items-center'>
                                <button className='bg-[#453598] hover:bg-[#282246] h-[40px] w-[140px] flex items-center justify-center space-x-[10px]'>
                                    <FaPlay className='text-[#00D2CB] h-[11px] w-[11px]' />
                                    <p className='text-[#00D2CB] text-[10px] font-[500]'>LISTEN NOW</p>
                                </button>
                                <button className='bg-[#110E1F] hover:bg-[#282246] h-[40px] w-[140px] flex items-center justify-center space-x-[10px]'>
                                    <FaSpotify className='text-[#1DB954] h-[24px] w-[24px]' />
                                    <p className='text-[#1DB954] text-[10px] font-[500]'>Spotify</p>
                                </button>
                                <button className='bg-[#110E1F] hover:bg-[#282246] h-[40px] w-[140px] flex items-center justify-center space-x-[10px]'>
                                    <SiGooglepodcasts className='text-[#666666] h-[24px] w-[24px]' />
                                    <p className='text-[#666666] text-[10px] font-[500]'>Google Podcasts</p>
                                </button>
                                <button className='bg-[#110E1F] hover:bg-[#282246] h-[40px] w-[140px] flex items-center justify-center space-x-[10px]'>
                                    <FaPodcast className='text-[#872EC4] h-[24px] w-[24px]' />
                                    <p className='text-[#872EC4] text-[10px] font-[500]'>Apple Podcasts</p>
                                </button>
                            </div>
                        </div>

                        <img src="/assets/episode-cover.png" alt="" className='h-[244px] w-[268px] object-fill' />
                    </div>
                    {/* mobile-view */}
                    <div className='inilne lg:hidden  space-x-[11px] items-center'>
                        <img src="/assets/episode-cover.png" alt="" className='mx-auto h-[150px] w-[150px] object-fill' />
                        <div className='space-y-[7px] mx-auto'>
                            <p className='text-[#666666] text-[9px] font-[500]'>SPORTS - BATTLE OF THE BLUES - ROYAL THOMIAN CRICKET ENCOUNTER</p>
                            <h1 className='text-white text-[20px] font-[500]'>142nd “Battle of the Blues” Ends In A Watery Draw</h1>
                            <p className='text-white text-[9px] font-[400]'>OCTOBER 18,2021- EPISODE 70</p>
                            <div className='flex space-x-[4px] items-center'>
                                <button className='bg-[#453598] hover:bg-[#282246] h-[30px] w-[86px] flex items-center justify-center space-x-[10px]'>
                                    <FaPlay className='text-[#00D2CB] h-[11px] w-[11px]' />
                                    <p className='text-[#00D2CB] text-[9px] font-[500]'>LISTEN NOW</p>
                                </button>
                                <button className='bg-[#110E1F] hover:bg-[#282246] h-[30px] w-[86px] flex items-center justify-center space-x-[10px]'>
                                    <FaSpotify className='text-[#1DB954] h-[24px] w-[24px]' />
                                </button>
                                <button className='bg-[#110E1F] hover:bg-[#282246] h-[30px] w-[86px] flex items-center justify-center space-x-[10px]'>
                                    <SiGooglepodcasts className='text-[#666666] h-[24px] w-[24px]' />
                                </button>
                                <button className='bg-[#110E1F] hover:bg-[#282246] h-[30px] w-[86px] flex items-center justify-center space-x-[10px]'>
                                    <FaPodcast className='text-[#872EC4] h-[24px] w-[24px]' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* header description */}
                <div className='w-full lg:max-w-[600px] mt-[60px] space-y-5'>
                    <p className='text-[#C4C4C4] text-[14px] font-[400]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <div className='flex items-center justify-end space-x-3'>
                        <p className='text-[#666666] text-[12px] font-[500]'>share :</p>
                        <button className='h-[18px] w-[18px]'>
                            <img src="/assets/Twitter.png" alt="" className='w-full h-full object-fill' />
                        </button>
                        <button className='h-[18px] w-[18px]'>
                            <img src="/assets/Facebook.png" alt="" className='w-full h-full object-fill' />
                        </button>
                        <button className='h-[18px] w-[18px]'>
                            <img src="/assets/Instagram.png" alt="" className='w-full h-full object-fill' />
                        </button>
                    </div>
                </div>


                {/* host detail */}
                <div className='space-y-[40px]'>
                    <h1 className='text-white text-[14px]'> <span className='font-semibold'>Featuring :</span> Podcaster 1, Podcaster 2</h1>
                    <div className='flex lg:space-x-[100px] items-start'>
                        {/* host profile */}
                        <div className='space-y-[24px]'>
                            <img src="/assets/episode-cover.png" alt="" className='h-[80px] lg:h-[140px] rounded-full' />
                            <div className='flex space-x-3'>
                                <p className='text-[#666666] text-[11px] font-[500]'>share :</p>
                                <button className='h-[13px] w-[13px]'>
                                    <img src="/assets/Twitter.png" alt="" className='w-full h-full object-fill' />
                                </button>
                                <button className='h-[13px] w-[13px]'>
                                    <img src="/assets/Facebook.png" alt="" className='w-full h-full object-fill' />
                                </button>
                                <button className='h-[13px] w-[13px]'>
                                    <img src="/assets/Instagram.png" alt="" className='w-full h-full object-fill' />
                                </button>
                            </div>
                        </div>

                        {/* host bio */}
                        <div className='lg:max-w-[640px]'>
                            <p className='text-[#00D2CB] text-[16px] font-[400]'>Marlon Dale Ferreira</p>
                            <p className='text-[#6654C5] text-[10px] font-[400] mt-[3px]'>JOURNALIST - PODCASTER (SPORTS/NEWS)</p>
                            <p className='text-white text-[14px] font-[400] mt-[16px]'>Our Podcast covers global sporting events on a daily basis and also provides a weekly sport news round up, which provides our listeners the option of clicking a button, listening in and staying attuned to global sport news at their convenience.</p>
                        </div>
                    </div>
                </div>

                {/* host related podcast */}
                <div className='space-y-[34px] mt-[34px]'>
                    <h1 className='text-white font-semibold text-[14px]'>Related Podcasts</h1>
                    <div>
                        {/* desktop view */}
                        <div className='hidden lg:inline mx-auto'>
                            <ScrollContainer horizontal={true} vertical={false} hideScrollbars={true} className="scroll-container mt-[20px] flex overflow-x-scroll scrollbar-hide space-x-[31px] cursor-pointer">
                                {/* {relatedEpisodes.map((item, index) => (
                                    <EpisodeContainer key={index} image={'/assets/episode-cover.png'} title={item.episodeTitle} category={item.episodeCategory} />
                                ))} */}
                            </ScrollContainer>
                        </div>

                        {/* mobile view */}
                        <div>
                            <div className="inline-flex lg:hidden w-[300px] h-[200px] overflow-x-scroll scrollbar-hide space-x-5 mt-[20px]">
                                {/* {relatedEpisodes.map((item, index) => (
                                    <EpisodeContainer key={index} image={'/assets/episode-cover.png'} title={item.episodeTitle} category={item.episodeCategory} />
                                ))} */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* spacer */}
                <div className="h-[180px]"></div>
            </div>
        </div>
    )
}

export default EpisodeDetail