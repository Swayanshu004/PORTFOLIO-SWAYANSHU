import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import ContactFooter from '../components/ContactFooter';

function Contact() {
  return (
    <div>
      <div className='pt-20'>
          <div className='h-[80vh] flex flex-col gap-10 items-center justify-around'>
              <h1 
              className='text-[4vw] w-1/2 font-[myFont1] leading-tight'>
                  To Talk About Your <span className='text-cyan-400'>Project</span>
              </h1>
              <div className='bg-cyan-400 h-[10vh] flex items-center justify-center rotate-3 '>
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
          <div className='h-[80vh] flex flex-col gap-10 items-center justify-around'>
              <h1 
              className='text-[4vw] w-1/2 font-[myFont1] leading-tight'>
                  To <span className='text-cyan-400'>Connect</span> With Me
              </h1>
              <div className='bg-cyan-400 h-[10vh] flex items-center justify-center -rotate-3 '>
                <div className='w-screen flex gap-10 items-center py-3 text-black'>
                    <div className='moveX font-bold flex items-center gap-10'>
                      <div className='text-[3vw] px-3 py-3'><FaLinkedinIn/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>swayanshusatyapragyansahoo</h2>
                      <div className='text-[3vw] px-3 py-3'><FaLinkedinIn/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>swayanshusatyapragyansahoo</h2>
                    </div>
                    <div className='moveX font-bold flex items-center gap-10'>
                      <div className='text-[3vw] px-3 py-3'><FaLinkedinIn/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>swayanshusatyapragyansahoo</h2>
                      <div className='text-[3vw] px-3 py-3'><FaLinkedinIn/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>swayanshusatyapragyansahoo</h2>
                    </div>
                </div>
              </div>
          </div>
          <div className='h-[80vh] flex flex-col gap-10 items-center justify-around'>
              <h1 
              className='text-[4vw] w-1/2 font-[myFont1] leading-tight'>
                  To See My <span className='text-cyan-400'>Work</span>
              </h1>
              <div className='bg-cyan-400 h-[10vh] flex items-center justify-center rotate-3 '>
                <div className='w-screen flex gap-10 items-center py-3 text-black'>
                    <div className='moveX font-bold flex items-center gap-10'>
                      <div className='text-[3vw] px-3 py-3'><FaGithub/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>Swayanshu004</h2>
                      <div className='text-[3vw] px-3 py-3'><FaGithub/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>Swayanshu004</h2>
                    </div>
                    <div className='moveX font-bold flex items-center gap-10'>
                      <div className='text-[3vw] px-3 py-3'><FaGithub/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>Swayanshu004</h2>
                      <div className='text-[3vw] px-3 py-3'><FaGithub/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>Swayanshu004</h2>
                    </div>
                    <div className='moveX font-bold flex items-center gap-10'>
                      <div className='text-[3vw] px-3 py-3'><FaGithub/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>Swayanshu004</h2>
                      <div className='text-[3vw] px-3 py-3'><FaGithub/></div>
                      <h2 className='text-[2vw] font-bold whitespace-nowrap'>Swayanshu004</h2>
                    </div>
                </div>
              </div>
          </div>
          <ContactFooter />
      </div>
    </div>
  )
}

export default Contact