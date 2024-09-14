import React from 'react';
import { FaChromecast } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { IoIosDesktop } from "react-icons/io";
import { IoLayersOutline } from "react-icons/io5";



const Servise = () => {
    return (
        <div className='my-28'>
            <div className='w-3/5 mx-auto'>
                <h1 className='font-bold text-xl
                    bg-gradient-to-r from-blue-400  to-rose-800 bg-clip-text text-transparent'>What we can do for you</h1>
                <p className='text-[50px] font-bold mt-2 mb-4'>Services provide for you.</p>
                <p className='details'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            </div>

            <div className='grid grid-cols-3 text-start gap-10 mt-16 p-10'>
                <div className='p-8 bg-black space-y-4 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-slate-400 duration-150'>
                    <FaChromecast className='mx-auto text-5xl text-rose-700' />
                    <h1 className='text-xl font-bold'>Business Stratagy</h1>
                    <p className='details'>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                </div>

                <div className='p-8 bg-black space-y-4 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-slate-400 duration-150'>
                    <IoPeopleSharp className='mx-auto text-5xl text-rose-700' />
                    <h1 className='text-xl font-bold'>Marketing & Reporting</h1>
                    <p className='details'>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                </div>

                <div className='p-8 bg-black space-y-4 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-slate-400 duration-150'>
                    <MdOutlineMarkEmailRead className='mx-auto text-5xl text-rose-700' />
                    <h1 className='text-xl font-bold'>Email Marketing</h1>
                    <p className='details'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.</p>
                </div>

                <div className='p-8 bg-black space-y-4 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-slate-400 duration-150'>
                    <IoCopyOutline className='mx-auto text-5xl text-rose-700' />
                    <h1 className='text-xl font-bold'>Copywriting</h1>
                    <p className='details'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for.</p>
                </div>

                <div className='p-8 bg-black space-y-4 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-slate-400 duration-150'>
                    <IoIosDesktop className='mx-auto text-5xl text-rose-700' />
                    <h1 className='text-xl font-bold'>Mobile Development</h1>
                    <p className='details'>Desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

                <div className='p-8 bg-black space-y-4 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-slate-400 duration-150'>
                    <IoLayersOutline className='mx-auto text-5xl text-rose-700' />
                    <h1 className='text-xl font-bold'>Website Development</h1>
                    <p className='details'>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                </div>
            </div>
        </div>
    );
};

export default Servise;