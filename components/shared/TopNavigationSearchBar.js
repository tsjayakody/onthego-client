import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import SearchResult from './SearchResult';
import { IoIosCloseCircle } from 'react-icons/io'

import './TopNavigationSearchBar.module.css';

function TopNavigationSearchBar({ data }) {
    //! search bar state
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    //! search button state
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    const onSearchButtonPressed = () => {
        console.log("search button pressed");
    }

    const searchPlaceholderText = "Search";

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <>
            <div className='hidden md:hidden lg:inline relative'>
                <div className='flex bg-[#1B1730] items-center md:max-w-[440px] md:max-h-[35px]  mr-[81px]'>
                    <div className='flex items-center my-[6px] ml-[9px] space-x-1'>
                        <input
                            type="text"
                            className="bg-transparent text-white text-[13px] md:w-[363px] md:h-[23px]"
                            placeholder={searchPlaceholderText}
                            value={wordEntered}
                            onChange={handleFilter}
                        />
                        {wordEntered.length >=1 ? <IoIosCloseCircle onClick={()=>clearInput()} className='text-white hover:text-[#00D2CB] h-[15px] w-[15px]'/> : <div className='h-[15px] w-[15px]'></div>}
                    </div>
                    <button>
                        <div className='text-[#FFFFFF] hover:text-[#00D2CB] h-[17.49px] w-[17.49px] ml-[20px] mr-[9.5px]'>
                            <FaSearch />
                        </div>
                    </button>
                </div>
                {filteredData.length !== 0 && (
                    <div className="dataResult absolute top-[60px] ">
                        {filteredData.slice(0, 15).map((value) => {
                            return (
                                <SearchResult key={value.id} title={value.title} language={value.language}/>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className='inline md:inline lg:hidden'>
                <button
                    disabled={isBtnDisabled}
                    onClick={onSearchButtonPressed}>
                    <div className='text-white hover:text-[#00D2CB] h-[17.49px] w-[17.49px] ml-[20px] mr-[25px] md:mr-[25px] lg:mr-[9.5px]'>
                        <FaSearch />
                    </div>
                </button>
            </div>
        </>
    )
}

export default TopNavigationSearchBar