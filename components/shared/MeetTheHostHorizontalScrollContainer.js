import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import MeetTheHostContainer from './MeetTheHostContainer'
import { hostState } from '../../atoms/hostAtom'
import HorizontalScrollRevealContainer from '../shared/HorizontalScrollRevealContainer'


const fetcher = (url) => fetch(url).then((res) => res.json())

const MeetTheHostHorizontalScrollContainer = () => {

  const [hostList, setHostList] =
    useRecoilState(hostState)

  //! featured episode
  const { data: hostData, error: hostError } = useSWR(
    `http://app.onthego.lk/api/public/v1/hosters?itemsPerPage=10&page=1&term`,
    fetcher
  )

  if (hostData) {
    setHostList(hostData.data)
  }

  return (
    <>
      {/* desktop view*/}
      <div className='hidden lg:inline'>
        <ScrollContainer
          horizontal={true}
          vertical={false}
          hideScrollbars={true}
          className="scroll-container mt-[20px] space-x-[31px] flex-grow overflow-x-scroll scrollbar-hide flex"
        >
          {hostList.slice(0, 9).map((item, index) => (
            index < 8 ?
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
              /> :
                <HorizontalScrollRevealContainer path={`/home/viewallhosts`}/>

          ))}
        </ScrollContainer>
      </div>

      {/* mobile view */}
      <div className='inline-flex lg:hidden w-[250px] flex-shrink-0 overflow-x-scroll scrollbar-hide space-x-5'>
        {hostList.map((item, index) => (
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
    </>
  )
}

export default MeetTheHostHorizontalScrollContainer
