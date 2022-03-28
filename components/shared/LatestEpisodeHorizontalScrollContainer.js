import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import EpisodeContainer from './EpisodeContainer'
import { featuredEpisodeState } from '../../atoms/featuredEpisodeAtom'
import { latestEpisodeState } from '../../atoms/latestEpisodeAtom'
import HorizontalScrollRevealContainer from '../shared/HorizontalScrollRevealContainer'

const fetcher = (url) => fetch(url).then((res) => res.json())

const LatestEpisodeHorizontalScrollContainer = () => {

  const [featuredEpisodeList, setFeaturedEpisodeList] =
    useRecoilState(latestEpisodeState)

  //! featured episode
  const { data: featuredData, error: featuredError } = useSWR(
    `http://app.onthego.lk/api/public/v1/episodes?itemsPerPage=10&page=1&term&latest=true`,
    fetcher
  )

  if (featuredData) {
    setFeaturedEpisodeList(featuredData.data)

  }
    return (
      <>
        {/* desktop view */}
        <div className='hidden lg:inline'>
          <ScrollContainer

            horizontal={true}
            vertical={false}
            hideScrollbars={true}
            className="scroll-container mt-[20px] space-x-[31px] overflow-x-scroll scrollbar-hide flex"
          >
            {featuredEpisodeList
              .slice(0, 9)
              .map((item, index) =>
                index < 8 ? (
                  <EpisodeContainer
                    key={index}
                    data={item}
                  />
                ) : (
                  <HorizontalScrollRevealContainer path={`/episodes/latestepisodes`}/>
                )
              )}
          </ScrollContainer>
        </div>


        {/* mobile view */}
        <div className='inline-flex lg:hidden w-[250px] flex-shrink-0 overflow-x-scroll scrollbar-hide space-x-5'>
          {featuredEpisodeList
            .slice(0, 10)
            .map((item, index) =>
              index < 9 ? (
                <EpisodeContainer
                  key={index}
                  data={item}
                />
              ) : (
                <HorizontalScrollRevealContainer />
              )
            )}
        </div>
      </>
    )


}

export default LatestEpisodeHorizontalScrollContainer
