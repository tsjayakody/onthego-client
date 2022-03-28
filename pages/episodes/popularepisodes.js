import React, { useEffect, useState } from "react"
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import { popularEpisodeGridState } from '../../atoms/popularEpisodeAtom'
import PopularEpisodeContainer from "../../components/shared/PopularEpisodeContainer"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Episodes() {

  // const [popularEpisodeList, setPopularEpisodeList] =
  //   useRecoilState(popularEpisodeGridState)

  const [episodes, setEpisodes] = useRecoilState(popularEpisodeGridState);
  const [pageIndex, setPageIndex] = useState(1);
  const { data: paginatedEpisodes, error: paginatedError } = useSWR(`http://app.onthego.lk/api/public/v1/episodes/popular?itemsPerPage=10&page=${pageIndex}&term`, fetcher);

  if (paginatedEpisodes) {
    setEpisodes(paginatedEpisodes.data)
    console.log({ episodes });
  }

  //! popular episode
  // const { data: popularData, error: popularError } = useSWR(
  //   'http://app.onthego.lk/api/public/v1/episodes/popular?itemsPerPage=10&page=1&term',
  //   fetcher
  // )

  // const setSong = () => {
  //   if (popularData) {
  //     setPopularEpisodeList(popularData.data)
  //   }
  // }


  return (
    <div className="flex h-screen">
      <div className="overflow-y-scroll scrollbar-hide h-screen mx-[60px]">
        <h1 className="text-white text-[18px] mb-5 font-semibold">Popular Episodes</h1>
        <div className="max-w-[1500px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7  grid-flow-row gap-[48px] flex-shrink-0 overflow-y-scroll scrollbar-hide">
          {episodes.map((item, index) => (
            <PopularEpisodeContainer key={index} data={item} />
          ))}
        </div>

        <div className='flex space-x-5 items-center justify-center'>
          <button onClick={() => setPageIndex(pageIndex - 1)}><p className='text-white text-[10px]'>Previous</p></button>
          <p className='text-white text-[10px]'>{pageIndex}</p>
          <button onClick={() => setPageIndex(pageIndex + 1)}><p className='text-white text-[10px]'>Next</p></button>
        </div>

        {/* spacer */}
        <div className="h-[180px]"></div>
      </div>
    </div>
  );
}