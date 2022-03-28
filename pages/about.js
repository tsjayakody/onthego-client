import React, { useState, useEffect } from "react";
import ImageSlider from '../components/shared/ImageSlider'
import reviewList from "../data/Reviews";
import ScrollContainer from 'react-indiana-drag-scroll'

export default function About() {
  
  return (
    <div className="flex h-screen justify-center">
      <div className="overflow-y-scroll scrollbar-hide h-screen mx-[15px] lg:mx-[60px]">

        <div className="max-w-[800px] mx-auto space-y-[60px]">
          <ImageSlider textVisible={false}/>
          <p className="max-w-[640px] mx-auto text-center text-white text-[14px] font-[400]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <ScrollContainer horizontal={true} vertical={false} hideScrollbars={true} className="scroll-container mt-[20px] flex overflow-x-scroll scrollbar-hide space-x-[31px] cursor-pointer max-w-[1000px]">
          {reviewList.map((item, index) => (
            <div key={index} className="h-[186px] w-[310px] bg-[#282246] flex-shrink-0">
              <p className="text-white text-[14px] font-[400] mx-[15px] text-ellipsis mt-[15px]">
                {item.review}
              </p>
              <div className="flex space-x-[17px] items-center-center mx-[15px] mt-[5px]">
                <img src="/assets/episode-cover.png" alt="" className="h-[50px] rounded-full object-fill" />
                <div className="flex-col space-y-[3px]">
                  <p className="text-white text-[14px] capitalize italic">{item.name}</p>
                  <p className="text-white text-[10px] font-[300]">{item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollContainer>

        {/* spacer */}
        <div className="h-[180px]">
        </div>
      </div>
    </div>
  );
}


