import { ReactTyped } from "react-typed";
export default function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mx-auto w-full h-screen text-center flex justify-center flex-col'>
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold'>Grow With Data</h1>
                <div className="flex items-center justify-center">
                    <p className='md:text-4xl sm:text-3xl text-2xl font-bold'>Fast, flexible financing for </p>
                    <ReactTyped className='md:text-4xl sm:text-3xl text-2xl font-bold px-2' strings={['React', 'Flutter', 'Nodejs']} typeSpeed={100} backSpeed={100} loop />
                </div>
                <p className='md:text-2xl sm:text-xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>

                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-5 py-3 mx-auto shadow-lg shadow-green-500/50">Get Started</button>

            </div>

        </div>
    )
}

