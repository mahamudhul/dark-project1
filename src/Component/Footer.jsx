import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='mt-28'>
            <div className='grid grid-cols-7 gap-5'>

                <div className='col-span-2'>
                    <div className='h-3/4'>
                        <h1 className=' font-extrabold text-4xl mb-5'><span className='text-zinc-800'>Car</span><span className='text-green-700'>Volt</span></h1>
                        <p className='foDetails my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis voluptatibus expedita amet, placeat libero porro id provident pariatur quia?</p>
                    </div>

                    {/* btn */}
                    <div >
                        <button className='bg-zinc-900 text-white px-4 py-2 rounded-xl mr-3'>Google play</button>
                        <button className='bg-zinc-900 text-white px-4 py-2 rounded-xl mr-3'>App store</button>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-bold mb-7'>Category</h1>
                    <div className='foDetails space-y-2'>
                        <p>Cars</p>
                        <p>Parts</p>
                        <p>Accessories</p>
                        <p>Shop</p>
                        <p>Letails</p>
                        <p>Service</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-bold mb-7'>Company</h1>
                    <div className='foDetails mt-3 space-y-2'>
                        <p href="">About Us</p>
                        <p href="">Delivery</p>
                        <p href="">Legal Notice</p>
                        <p href="">Terms & Conditions</p>
                        <p href="">Secure Payment</p>
                        <p href="">Contact Us</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-bold mb-7'>Account</h1>
                    <div className='foDetails mt-3 space-y-2'>
                        <p href="">Sign in</p>
                        <p href="">View cart</p>
                        <p href="">Return Policy</p>
                        <p href="">Terms & Conditions</p>
                        <p href="">Secure Payment</p>
                        <p href="">Vendor</p>
                    </div>
                </div>

                <div className='col-span-2'>
                    <h1 className='text-xl font-bold mb-7'>Contact</h1>
                    <div className='foDetails text-start mt-3 space-y-3'>
                        <p>971 Lajamni, Motavarachhap Surat, Gujarat, Bharat 394101.</p>
                        <p >+00 9876543210</p>
                        <p >example@email.com</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-10 mt-10">
                <CiFacebook className="text-4xl text-rose-900 hover:scale-150 duration-200" />
                <FaInstagram className="text-3xl text-rose-900 hover:scale-150 duration-200" />
                <CiTwitter className="text-4xl text-rose-900 hover:scale-150 duration-200" />
                <BsWhatsapp className="text-3xl text-rose-900 hover:scale-150 duration-200" />
            </div>

            <p className="text-center my-5 ">2024 © Dina . Designed by <span className="text-orange-500">MAHAMUDHUL HASAN</span></p>
        </div>
    );
};

export default Footer;