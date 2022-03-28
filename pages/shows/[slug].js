import React from 'react'
import { useRecoilState } from 'recoil'
import useSWR from "swr"
import { useRouter } from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json());

function ShowsSlug() {
    return (
        <div className="flex h-screen">
            <div className="overflow-y-scroll scrollbar-hide h-screen w-full">
                <div className='space-y-[26px]'>
                    
                </div>

                {/* spacer */}
                <div className="h-[180px]"></div>
            </div>
        </div>
    )
}

export default ShowsSlug