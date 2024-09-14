import React from 'react';
import img1 from '../assets/web.jpg'
import img2 from '../assets/design.jpg'
import img3 from '../assets/developer.jpg'

const WorkDetails = () => {
    return (
        <div className='py-32 px-14 bg-black bg-opacity-50 rounded-2xl'>
            <div>
                <div>
                    <div className='w-3/5 mx-auto'>
                        <h1 className='font-bold text-xl
                    bg-gradient-to-r from-blue-400  to-rose-800 bg-clip-text text-transparent'>Our project</h1>
                        <p className='text-[44px] font-bold mt-2 mb-4'>Some of our Recent Works</p>
                        <p className='details'>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.</p>
                    </div>
                </div>


                <div className='mt-10 flex justify-center items-center gap-10'>
                    <div className="w-72 h-96 rounded-lg overflow-hidden shadow-lg relative group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            style={{ backgroundImage: `url(${img1})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end
                             items-center p-4">
                                <h2 className="text-white text-2xl font-bold">Development</h2>

                                <p className="text-white mt-2 group-hover:mb-2 group-hover:duration-300">Web Design</p>

                                <p className="hidden group-hover:inline  duration-300   mb-5">Some Lorem ipsum dolor sit amet. description goes here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 h-96 rounded-lg overflow-hidden shadow-lg relative group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            style={{ backgroundImage: `url(${img2})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end
                             items-center p-4">
                                <h2 className="text-white text-2xl font-bold">Development</h2>

                                <p className="text-white mt-2 group-hover:mb-2 duration-500">Web Design</p>

                                <p className="hidden group-hover:inline  transition-transform duration-100 ease-in-out transform  mb-5">Some Lorem ipsum dolor sit amet. description goes here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 h-96 rounded-lg overflow-hidden shadow-lg relative group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            style={{ backgroundImage: `url(${img3})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end
                             items-center p-4">
                                <h2 className="text-white text-2xl font-bold">Development</h2>

                                <p className="text-white mt-2 group-hover:mb-2 duration-500">Web Design</p>

                                <p className="hidden group-hover:inline  transition-transform duration-100 ease-in-out transform  mb-5">Some Lorem ipsum dolor sit amet. description goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;