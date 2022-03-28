import React from 'react'

function DataErrorContainer() {
    return (
        <div className="h-screen">
            <div className="overflow-y-scroll scrollbar-hide h-screen mx-[60px]">
                <h1 className="text-white text-[18px] mb-5 font-semibold">Categories</h1>
                <div className="overflow-y-scroll scrollbar-hide">
                    <img src="/assets/data-error.svg" alt="" className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] md:mx-auto my-[50px]" />
                </div>

                {/* spacer */}
                <div className="h-[180px]"></div>
            </div>
        </div>
    )
}

export default DataErrorContainer