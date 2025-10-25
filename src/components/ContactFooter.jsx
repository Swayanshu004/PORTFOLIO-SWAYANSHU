import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ContactFooter() {
  return (
    <div className='w-screen h-[50vh] flex items-end justify-between px-5'>
        <div>
            <h2 className='text-[10vw] font-[myFont1] text-neutral-700'>swayanshu</h2>
        </div>
        <div className='flex flex-col mb-10'>
            <Link 
            to="//swayanshusahoo.pri@gmail.com"
            className='text-[3vh] text-neutral-700 py-2 hover:shadow-2xl shadow-cyan-500'>
                <IoIosMail/>
            </Link>
            <Link 
            to="https://www.linkedin.com/in/swayanshusatyapragyansahoo/"
            className='text-[3vh] text-neutral-700 py-2'>
                <FaLinkedinIn/>
            </Link>
            <Link 
            to="https://github.com/Swayanshu004"
            className='text-[3vh] text-neutral-700 py-2'>
                <FaGithub/>
            </Link>
        </div>
    </div>
  )
}

export default ContactFooter