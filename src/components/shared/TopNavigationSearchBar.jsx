import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function TopNavigationSearchBar() {


    //! search button state
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    const onSearchButtonPressed = () => {
        console.log("search button pressed");
    }

    const searchPlaceholderText = "Search"

    return (
        <>
            <div className='hidden md:hidden lg:inline'>
                <div className='flex bg-[#1B1730] items-center md:max-w-[440px] md:max-h-[35px]  mr-[81px]'>
                    <div className='my-[6px] ml-[9px]'>
                        <input
                            type="text"
                            id="email"
                            className="bg-[#1B1730] text-#666666 text-[13px] md:w-[363px] md:h-[23px]"
                            placeholder={searchPlaceholderText}
                        />
                    </div>
                    <button>
                        <div className='text-[#FFFFFF] hover:text-[#00D2CB] h-[17.49px] w-[17.49px] ml-[20px] mr-[9.5px]'>
                            <FaSearch />
                        </div>
                    </button>
                </div>
            </div>

            <div className='inline md:inline lg:hidden'>
                <button
                    disabled={isBtnDisabled}
                    onClick={onSearchButtonPressed}>
                    <div className='text-[#FFFFFF] hover:text-[#00D2CB] h-[17.49px] w-[17.49px] ml-[20px] mr-[25px] md:mr-[25px] lg:mr-[9.5px]'>
                        <FaSearch />
                    </div>
                </button>
            </div>
        </>
    )
}

export default TopNavigationSearchBar