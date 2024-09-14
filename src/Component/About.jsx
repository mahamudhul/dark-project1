import React from 'react';
import img1 from '../assets/about.jpg'
import img2 from '../assets/about2.jpg'

const About = () => {
    return (
        <div className='py-32 px-14 bg-black bg-opacity-50 rounded-2xl'>
            <div className='flex justify-center gap-16 items-center text-start'>
                <div className='relative mr-10'>

                    <img className='rounded-2xl w-80 h-[350px] absolute top-14 left-14 shadow-2xl shadow-slate-500' src={img1} alt="" />

                    <img className='rounded-2xl w-80 h-[350px] ' src={img2} alt="" />

                </div>
                <div className='w-3/4'>
                    <h1 className='text-[50px] font-bold mt-10'>Refreshingly Unique</h1>
                    <h1 className='text-[50px] font-bold mb-10'>Company About</h1>

                    <p className='details'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p className='details my-10'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences</p>

                    <button className='font-bold
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 bg-clip-text text-transparent'>PURCHASE IMROZ</button>
                </div>
            </div>
        </div>
    );
};

export default About;