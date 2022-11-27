import React from 'react'

export default function Home() {
    return (
        <section className='bg-[#fcfaff] h-screen flex justify-between px-16 md:flex-col sm:flex-col'>
            <div className="m-auto flex md:mt-20 flex-col md:text-center">
                <h1 className='font-medium rounded-md w-62 text-[#181818] font-space text-8xl md:text-4xl md:py-2 py-4'>Find <span className='text-[#8311f9] '>Great </span>Ideas</h1>
                <p className='font-normal rounded-md text-[#181818] font-space text-2xl md:text-xl md:py-2 py-4'>Subscribe to your favourite creators and thinkers. Support work that matters
                </p>
                <br />
                <a className="border px-6 text-center font-medium w-44 md:w-full text-white rounded-md font-space text-lg py-4 bg-[#8311f9] " href="/auth/signup">Join Breach</a>
            </div>
            <img className='m-auto ' src="https://breach.club/_next/image?url=%2Fassets%2Fhomepage_hero-image.png&w=750&q=100" alt="hero" />
        </section>
    )
}
