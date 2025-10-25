import React from 'react'
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5"
import { FaReact, FaNode, FaPython, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiExpress, SiNumpy, SiTypescript, SiMongodb, SiLangchain  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

function Skill() {
    return (
        <div className='py-24 px-10'>
            <div className='pb-10'>
                <h1 className='px-5 py-5 text-cyan-500 text-[3vh] font-[myFont1] border-t border-t-cyan-500'>LANGUAGE :</h1>
                <div className='flex flex-wrap items-center justify-start gap-10'>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <IoLogoJavascript />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <FaPython  />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <FaJava />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <BsFiletypeSql />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <SiTypescript />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <FaHtml5 />
                    </div>
                </div>
            </div>
            <div className='pb-10'>
                <h1 className='px-5 py-5 text-cyan-500 text-[3vh] font-[myFont1] border-t border-t-cyan-500'>FrameWork | Library :</h1>
                <div className='flex flex-wrap items-center justify-start gap-10'>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <FaReact />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <FaNode />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <SiExpress />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <SiNumpy />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <SiLangchain  />
                    </div>
                    <div className='w-fit text-[10vh] px-10 py-16 border border-neutral-600'>
                        <h2>pandas</h2>
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <RiTailwindCssFill />
                    </div>
                    <div className='w-fit text-[10vh] px-10 py-16 border border-neutral-600'>
                        <h2>NEXT.js</h2>
                    </div>
                </div>
            </div>
            <div className='pb-10'>
                <h1 className='px-5 py-5 text-cyan-500 text-[3vh] font-[myFont1] border-t border-t-cyan-500'>Tool :</h1>
                <div className='flex flex-wrap items-center justify-start gap-10'>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <FaGitAlt />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <FaNode />
                    </div>
                </div>
            </div>
            <div className='pb-10'>
                <h1 className='px-5 py-5 text-cyan-500 text-[3vh] font-[myFont1] border-t border-t-cyan-500'>Database :</h1>
                <div className='flex flex-wrap items-center justify-start gap-10'>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <SiMongodb />
                    </div>
                    <div className='w-fit text-[20vh] px-10 py-10 border border-neutral-600'>
                        <BiLogoPostgresql />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Skill