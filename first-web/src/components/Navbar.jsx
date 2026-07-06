import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(true);


    const handleNav = () => {
        setNav(!nav);  // true 
    }

    return (
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>

            <ul className='hidden sm:flex'>
                <li className='p-4' >Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Skills</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='sm:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>


            <div className={!nav ? 'sm:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] mt-4 ml-4 '>React.</h1>

                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Skills</li>
                    <li className='p-4 border-b border-gray-600'>Projects</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar