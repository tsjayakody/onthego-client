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
            <div className='pt-[86px] md:pt-[80px] mx-[20px] md:pl-[60px] w-[1100px]'>
                <div className='flex'>
                    <h1 className='text-[#FFFFFF] text-[24px] capitalize inline md:hidden mx-auto text-center justify-center'>Meet Hosts</h1>
                </div>
                <div className='grid grid-cols-1 gap-[0px] md:grid md:grid-cols-2 md:gap-[0px]'>
                    {
                        meetTheHosts.map((item) => (
                            <MeetTheHostCardLeft key={item.key} />
                        ))
                    }
                </div>
            </div>
        </BackgroundContainer>
    )
}

export default MeetTheHosts