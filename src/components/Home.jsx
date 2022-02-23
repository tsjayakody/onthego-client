import React from 'react';
import BackgroundContainer from './shared/BackgroundContainer';
import Topbar from './shared/Topbar';
import HomeLeftContainer from './home/HomeLeftContainer';
import HomeRightContainer from './home/HomeRightContainer';

/*
    Might need it later on
    -. lg:fixed top-[79px] right-0 bottom-0
*/

function Home({ isopen }) {
    return (
        <BackgroundContainer>
            {/* top bar */}
            <Topbar />
            <div className='w-full h-full flex '>
                <div className='flex-auto w-4/6 h-full'>
                    <HomeLeftContainer />
                </div>
                <div className='bg-[#110E1F] flex-auto w-1/6 h-full hidden md:hidden lg:inline'>
                    <HomeRightContainer />
                </div>
            </div>
        </BackgroundContainer>
    );
}

export default Home;
