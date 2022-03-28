import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import EpisodeContainer from './EpisodeContainer'
import { featuredEpisodeState } from '../../atoms/featuredEpisodeAtom'
import HorizontalScrollRevealContainer from '../shared/HorizontalScrollRevealContainer'

const fetcher = (url) => fetch(url).then((res) => res.json())

const FeaturedEpisodeHorizontalScrollContainer = () => {
  const [featuredEpisodeList, setFeaturedEpisodeList] =
    useRecoilState(featuredEpisodeState)

  //! featured episode
  const { data: featuredData, error: featuredError } = useSWR(
    `http://app.onthego.lk/api/public/v1/episodes/featured?itemsPerPage=10&page=1&term`,
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
          className="scroll-container mt-[20px] cursor-pointer space-x-[31px] flex-grow overflow-x-scroll scrollbar-hide flex"
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
                <HorizontalScrollRevealContainer path={`/episodes/featuredepisodes`} />
              )
            )}
        </ScrollContainer>
      </div>

      {/* mobile view */}
      <div className='inline-flex lg:hidden w-[250px] flex-shrink-0 overflow-x-scroll scrollbar-hide space-x-5'>
        {featuredEpisodeList
          .slice(0, 11)
          .map((item, index) =>
            index < 10 ? (
              <EpisodeContainer
                key={index}
                data={item}
              />
            ) : (
              <></>
            )
          )}
      </div>
    </>
  )
}

export default FeaturedEpisodeHorizontalScrollContainer
