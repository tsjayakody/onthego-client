import React from 'react'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import { popularEpisodeState } from '../../atoms/popularEpisodeAtom'
import PopularEpisodeContainer from '../shared/PopularEpisodeContainer'

const fetcher = (url) => fetch(url).then((res) => res.json())

const PopularEpisodeVerticalScrollContainer = () => {

  const [popularEpisodeList, setPopularEpisodeList] =
    useRecoilState(popularEpisodeState)

  //! popular episode
  const { data: popularData, error: popularError } = useSWR(
    `http://app.onthego.lk/api/public/v1/episodes/popular?itemsPerPage=10&page=1&term`,
    fetcher
  )

  if (popularData) {
    setPopularEpisodeList(popularData.data)
  }

  return (
    <>
      {popularEpisodeList.map((item, index) => (
        <PopularEpisodeContainer key={index} data={item}/>
      ))}
    </>
  )
}

export default PopularEpisodeVerticalScrollContainer
