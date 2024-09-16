import React from 'react';


const Slider = () => {


    return (
        <div className='relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-8 rounded-t-xl h-[222px] max-w-[400px] md:h-[294px] md:max-w-[512px] mt-28'>

            <div className='rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800'>
                <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" alt="" className='dark:hidden h-[156px] md:h-[278px] w-full rounded-lg' />

                <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" alt="" className='hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg' />
            </div>

            <div className='relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]'>
                <div className='absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800'>

                </div>
            </div>
        </div>
    );
};

export default Slider;