import React from 'react'
import useSWR from "swr"
import { hostState } from '../../atoms/hostAtom'
import { useRecoilState } from 'recoil'
import MeetTheHostContainer from '../../components/shared/MeetTheHostContainer'


const fetcher = (url) => fetch(url).then((res) => res.json());

function ViewAllHosts() {

  const [hostList, setHostList] =
    useRecoilState(hostState)

  const { data: hostData, error: hostError } = useSWR(
    `http://app.onthego.lk/api/public/v1/hosters?itemsPerPage=10&page=1&term`,
    fetcher
  );

    if(hostData){
      setHostList(hostData.data)
    }
    
  return (
    <div className="flex h-screen">
    <div className="overflow-y-scroll scrollbar-hide h-screen mx-[15px] lg:mx-[60px]">
      <h1 className="text-white text-[18px] mb-5 font-semibold">Categories</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9  grid-flow-row gap-[48px] flex-shrink-0 overflow-y-scroll scrollbar-hide">
        {hostList && hostList.map((item, index) => (
          <MeetTheHostContainer
          key={index}
          image={item.hoster_image}
          hostName={item.name}
          hostType={item.designation}
          twitterLink={item.twitter}
          facebookLink={item.facebook}
          pinterestLink={item.linkedin}
          instagramlink={item.instagram}
          slug={item.slug}
        />
        ))}
      </div>

      {/* spacer */}
      <div className="h-[180px]"></div>
    </div>
  </div>
  )
}

export default ViewAllHosts