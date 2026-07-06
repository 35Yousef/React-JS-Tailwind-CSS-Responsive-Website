export const newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center gap-4'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Want to grow with data? </h1>
                    <p>Sign up for our newsletter to get the latest updates and insights.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-4'>
                        <input type="email" className='p-3 w-full rounded-md text-black bg-white' placeholder='Enter your email' />
                        <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium sm:ml-4 my-2 px-6 py-3 shrink-0'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default newsletter


