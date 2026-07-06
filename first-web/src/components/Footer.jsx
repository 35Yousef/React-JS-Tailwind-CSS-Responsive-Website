import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-30 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
                <p className='py-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                    voluptates accusantium voluptatum, voluptatibus rerum odit
                    itaque quia. Odit, eius officia.
                </p>
                <div className='flex justify-between md-w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-10'>
                <div>
                    <h6 className='font-medium text-gray-400'>solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>

                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>

                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Careers</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Partners</li>
                    </ul>

                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Privacy</li>
                        <li className='py-2 text-sm'>Terms</li>
                        <li className='py-2 text-sm'>Claim</li>

                    </ul>

                </div>

            </div>
        </div>


    )


}
