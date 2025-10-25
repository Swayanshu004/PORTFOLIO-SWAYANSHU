import React from 'react'
import Background from './Background'

import HeroFooter from './HeroFooter'


function Hero() {

  return (
    <div>
        <Background />
        <div className='w-screen h-screen py-5 relative flex flex-col justify-between items-center'>
            <div className='flex flex-col items-center pt-36'>
                <h1 className='font-extrabold text-[5vw]'>SWAYANSHU's</h1>
                <h1 className='font-[myFont1] text-[3vw]'>PORTFOLIO</h1>
            </div>
            <HeroFooter />
        </div>
    </div>
  )
}

export default Hero