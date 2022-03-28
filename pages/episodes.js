import EpisodeCategoryContainer from "../components/shared/EpisodeCategoryContainer";
import categories from "../data/Categories"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import pagination from 'react-js-pagination'
import Router, { withRouter } from 'next/router'
import EpisodeCategoryListContainer from '../components/shared/EpisodeCategoryListContainer'
import { useRecoilState } from 'recoil'
import { episodeState } from '../atoms/episodeAtom'

import useSWR from "swr"
import DataErrorContainer from "../components/shared/dataErrorContainer";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Episodes() {

  const [episodes, setEpisodes] = useRecoilState(episodeState);

  const { data, error } = useSWR(
    `http://app.onthego.lk/api/public/v1/categories?itemsPerPage=10&page=1&term`,
    fetcher
  );

  const [pageIndex, setPageIndex] = useState(1);
  const { data: paginatedEpisodes, error: paginatedError } = useSWR(`http://app.onthego.lk/api/public/v1/categories?itemsPerPage=10&page=${pageIndex}&term`, fetcher);

  var total = 0;

  //! error occured 
  if (error) {
    return (
      <DataErrorContainer />
    )
  }
  //! data is not available 
  if (!data) {
    return (
      <DataErrorContainer />
    )
  }

  if (paginatedEpisodes) {
    total = paginatedEpisodes.total
    setEpisodes(paginatedEpisodes.data)


    return (
      <div className="flex h-screen">
        <div className="overflow-y-scroll scrollbar-hide h-screen mx-[15px] lg:mx-[60px]">
          <h1 className="text-white text-[18px] mb-5 font-semibold">Categories</h1>
          <div className="max-w-[1500px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7  grid-flow-row gap-[48px] flex-shrink-0 overflow-y-scroll scrollbar-hide">
            {episodes && episodes.map((item, index) => (
              <EpisodeCategoryContainer key={item.id} image={item.cover_image} category={item.name} episodeNumber={item.episode_count} slug={item.slug} />
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

  //! data fetchig success
  // if (data) {
  //   total = data.total
  //   setEpisodes(data.data)
  //   return (

  //   )
  // }
}