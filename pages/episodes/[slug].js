import React, { useState, useEffect } from 'react';
import EpisodeCategoryListContainer from '../../components/shared/EpisodeCategoryListContainer'

import { episodeCategorySluglistState } from '../../atoms/episodeCategoryAtom'
import { useRecoilState } from 'recoil'

import useSWR from "swr"

import { useRouter } from 'next/router'

const fetcher = (url) => fetch(url).then((res) => res.json());

function EpisodeCategory({ categorySlug }) {

    const router = useRouter()
    // console.log(router.query)

    const [categoryListState, setCategoryListState] = useRecoilState(episodeCategorySluglistState)


    const { data, error } = useSWR(
        `http://app.onthego.lk/api/public/v1/categories/${router.query.slug}`,
        fetcher
    );

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    if (data) {
        setCategoryListState(data)
        console.log(data.name);
    }

    return (
        <div className="flex h-screen">
            <div className="overflow-y-scroll scrollbar-hide h-screen w-full">
                <div className='space-y-[26px]'>
                    {categoryListState.media.map((item, index) => (
                        <EpisodeCategoryListContainer key={index} data={item} type={data.name}/>
                    ))}
                </div>

                {/* spacer */}
                <div className="h-[180px]"></div>
            </div>
        </div>
    )
}

export default EpisodeCategory