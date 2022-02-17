import React from 'react';
import BackgroundContainer from './shared/BackgroundContainer';
import Topbar from './shared/Topbar';
import HomeLeftContainer from './home/HomeLeftContainer';
import HomeRightContainer from './home/HomeRightContainer';

function Home({ isopen }) {
    console.log({ isopen });
    return (
        <BackgroundContainer>
            {/* top bar */}
            <Topbar/>
            <div className='w-full h-full flex'>
                <div className='flex-auto w-4/6 h-full'>
                    <HomeLeftContainer/>
                </div>
                <div className='flex-auto w-1/6 h-full hidden md:hidden lg:inline'>
                    <HomeRightContainer/>
                </div>
            </div>
        </BackgroundContainer>
    );
}

export default Home;
