import React from 'react'
import { Link } from 'react-router-dom'

function HeroFooter() {
  return (
    <div className='w-screen px-[2vw]'>
        <div className='flex gap-5 justify-center'>
            <Link to="/project">
                <h2 
                className='text-[2vw] font-extrabold border-2 border-white text-white px-5 py-3 rounded-4xl font-[myFont1] hover:bg-cyan-500 hover:shadow-2xl shadow-cyan-400 duration-500 ease-in-out'>
                    PROJECTS
                </h2>
            </Link>
            <Link to="/contact">
                <h2 
                className='text-[2vw] font-extrabold border-2 border-white text-white px-5 py-3 rounded-4xl font-[myFont1] hover:bg-cyan-500 hover:shadow-2xl shadow-cyan-400 duration-500 ease-in-out'>
                    CONTACT
                </h2>
            </Link>
        </div>
        <div className='flex flex-col md:flex-row justify-between mt-10 gap-5 md:gap-2'>
            <h1 className='text-neutral-500 text-sm hover:text-cyan-500 duration-500'>SWAYANSHU SATYAPRAGYAN SAHOO</h1>
            <h1 className='text-neutral-500 text-sm hover:text-cyan-500 duration-500'>2025</h1>
            <div className='flex flex-col md:flex-row gap-2'>
                <Link to="/" className='px-5 py-2 text-sm font-bold text-neutral-500 border-2 rounded-full hover:border-cyan-500 hover:text-white'>
                    lk
                </Link>
                <Link to="/" className='px-5 py-2 text-sm font-bold text-neutral-500 border-2 rounded-full hover:border-cyan-500 hover:text-white'>
                    ig
                </Link>
                <Link to="/" className='px-5 py-2 text-sm font-bold text-neutral-500 border-2 rounded-full hover:border-cyan-500 hover:text-white'>
                    gh
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroFooter