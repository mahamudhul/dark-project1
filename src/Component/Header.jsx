import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center gap-3'>
                <div className=''>
                    <h1 className='text-3xl'>MOLLY PARADISE</h1>
                </div>
                <div className='space-x-5'>
                    <a href="">HOME</a>
                    <a href="">SERVICE</a>
                    <a href="">ABOUT</a>
                    <a href="">PAGES</a>
                    <a href="">CONTACT</a>
                    <button className='py-3 px-6 border  border-gray-700 rounded-xl hover:bg-emerald-900 '>BUY NOW</button>

                </div>
            </div>
        </div>
    );
};

export default Header;