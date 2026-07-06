import React from 'react'
import laptop from '../assets/laptop.jpg'


const analyitcs = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>


            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

                <img className='w-[500px] mx-auto my-4' src={laptop} alt="" />

                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold py-2'>Data and analytics</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Learn to analyze data and make</h1>
                    <p className='  py-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam porro iste distinctio quibusdam. Dolorem enim cumque sed saepe quas,
                        quisquam voluptate quod eum temporibus ipsa suscipit ratione quasi nobis ea.</p>
                    <button className="text-[#00df9a] bg-[#000000] w-[200px] rounded-md font-medium my-6 px-5 py-3 mx-auto shadow-lg shadow-green-500/50">Get Started</button>
                </div>

            </div>
        </div>
    )
}
export default analyitcs