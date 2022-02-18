import React from 'react'
import meetTheHosts from '../data/MeetTheHostsList'
import MeetTheHostCardLeft from './hosts/MeetTheHostCardLeft'
import BackgroundContainer from './shared/BackgroundContainer'
import Topbar from './shared/Topbar'
// import MeetTheHostCardRight from './hosts/MeetTheHostCardRight'

function MeetTheHosts() {
    return (
        <BackgroundContainer>
            <Topbar/>
            <div className='mt-[86px] md:mt-[80px] mx-[20px] md:pl-[60px] lg:w-[1100px] w-full'>
                <div className='flex'>
                    <h1 className='text-[#FFFFFF] text-[24px] capitalize inline md:hidden mx-auto text-center justify-center'>Meet Hosts</h1>
                </div>
                <div className='grid grid-cols-1 gap-[0px] md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:gap-[0px] '>
                    {
                        meetTheHosts.map((item) => (
                            <MeetTheHostCardLeft key={item.id} />
                        ))
                    }
                </div>
            </div>
        </BackgroundContainer>
    )
}

export default MeetTheHosts