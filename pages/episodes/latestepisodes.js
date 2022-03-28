import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { latestEpisodeGridState } from '../../atoms/latestEpisodeAtom'
import useSWR from "swr"
import EpisodeContainer from '../../components/shared/EpisodeContainer'
import useSWRInfinite from 'swr/infinite'

const fetcher = (url) => fetch(url).then((res) => res.json());

function Latestepisodes() {

  const [episodes, setEpisodes] = useRecoilState(latestEpisodeGridState);
  var total = 0;
  const [pageIndex, setPageIndex] = useState(1);
  const { data: paginatedEpisodes, error: paginatedError } = useSWR(`http://app.onthego.lk/api/public/v1/episodes?itemsPerPage=30&page=${pageIndex}&term&latest=true`, fetcher);

  // const { data: paginatedEpisodes, error: paginatedError } = useSWR(
  //   `http://app.onthego.lk/api/public/v1/episodes?itemsPerPage=30&page=1&term&latest=true`,
  //   fetcher
  // );

  // const getKey = (pageIndex, previousPageData) => {
  //   return `http://app.onthego.lk/api/public/v1/episodes?itemsPerPage=30&page=${pageIndex}&term&latest=true`
  // }

  // const { data: paginatedEpisodes, error:paginatedError, isValidating, mutate, size, setSize } = useSWRInfinite(getKey)


  if (paginatedEpisodes) {
    total = paginatedEpisodes.total
    setEpisodes(paginatedEpisodes.data)
  }

  return (
    <div className="flex h-screen">
      <div className="overflow-y-scroll scrollbar-hide h-screen mx-[15px] lg:mx-[60px]">
        <h1 className="text-white text-[18px] mb-5 font-semibold">Latest Episodes</h1>

        <div className="max-w-[1500px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9  grid-flow-row gap-[48px] flex-shrink-0 overflow-y-scroll scrollbar-hide">
          {episodes.map((item, index) => (
            <EpisodeContainer
              key={index}
              data={item}
            />
          ))}
        </div>

        {total >= 11 ? <div className='flex space-x-5 items-center justify-center'>
          <button onClick={() => setPageIndex(pageIndex - 1)}><p className='text-white text-[10px]'>Previous</p></button>
          <p className='text-white text-[10px]'>{pageIndex}</p>
          <button onClick={() => setPageIndex(pageIndex + 1)}><p className='text-white text-[10px]'>Next</p></button>
        </div> : <></>}


        {/* spacer */}
        <div className="h-[180px]"></div>
      </div>
    </div>
  )
}

export default Latestepisodes