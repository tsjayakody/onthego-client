import React from 'react'
import meetTheHosts from '../data/MeetTheHostsList'
import MeetTheHostCardLeft from './hosts/MeetTheHostCardLeft'
import MeetTheHostCardRight from './hosts/MeetTheHostCardRight'

function MeetTheHosts() {
    return (
        <div className='bg-#110E1F flex flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            <div className='pt-[201px] pl-[60px] w-[1100px]'>
                <div className='grid grid-cols-2 gap-[0px]'>
                    {
                        //! concatentae 2 elements of array to create 2 element array
                        //? test here
                        //? test ends 

                        meetTheHosts.map((item)=>(
                            <MeetTheHostCardLeft key={item.key}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MeetTheHosts