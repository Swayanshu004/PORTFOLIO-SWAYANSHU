import React from 'react'
import { IoIosMail } from "react-icons/io";

function ContactUnit() {
  return (
    <div>
        <div className='h-screen flex flex-col gap-10 items-center justify-center'>
            <h1 
            className='text-[6vw] w-1/2 font-[myFont1] leading-tight'>
                To Talk About Your <span className='text-cyan-400'>Project</span>
            </h1>
            <div className='bg-cyan-400 h-[10vh] flex items-center justify-center rotate-3 left-28'>
              <div className='w-screen flex gap-10 items-center py-3 text-black'>
                  <div className='moveX font-bold flex items-center gap-10'>
                    <div className='text-[3vw] px-3 py-3'><IoIosMail /></div>
                    <h2 className='text-[2vw] font-bold whitespace-nowrap'>swayansahoo.pri@gmail.com</h2>
                    <div className='text-[3vw] px-3 py-3'><IoIosMail /></div>
                    <h2 className='text-[2vw] font-bold whitespace-nowrap'>swayansahoo.pri@gmail.com</h2>
                  </div>
                  <div className='moveX font-bold flex items-center gap-10'>
                    <div className='text-[3vw] px-3 py-3'><IoIosMail /></div>
                    <h2 className='text-[2vw] font-bold whitespace-nowrap'>swayansahoo.pri@gmail.com</h2>
                    <div className='text-[3vw] px-3 py-3'><IoIosMail /></div>
                    <h2 className='text-[2vw] font-bold whitespace-nowrap'>swayansahoo.pri@gmail.com</h2>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUnit