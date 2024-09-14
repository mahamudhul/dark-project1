// import React from 'react';
import { GoPulse } from "react-icons/go";
import { FaChromecast } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";



const Banner = () => {
    return (
        <div className='mt-10 mx-10 mb-28'>
            <div className='text-8xl font-extrabold mt-28 space-y-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 bg-clip-text text-transparent'>
                <p >Design Driven </p>
                <p>Development Your</p>
                <p>Web Products</p>
            </div>
            <div className='grid grid-cols-3 mt-20'>
                <div className='w-2/3'>
                    <GoPulse className='mx-auto text-5xl text-rose-700' />
                    <h1 className='my-4 text-2xl font-bold'>Awarded Design</h1>
                    <p className='details'>There are many variations variations of passages of Lorem Ipsum available, but the majority have suffered.</p>

                </div>
                <div className='w-2/3'>
                    <FaChromecast className='mx-auto text-5xl text-rose-700' />
                    <h1 className='my-4 text-2xl font-bold'>Design & Creative</h1>
                    <p className='details'>Passages there are many variations variations of of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div className='w-2/3'>
                    <CiMap className='mx-auto text-5xl text-rose-700' />
                    <h1 className='my-4 text-2xl font-bold'>App Development</h1>
                    <p className='details'>Variations There are many variations of passages of  Lorem Ipsum available, but  the majority have suffered.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;