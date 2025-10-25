import React, {useRef, useContext} from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { NavbarContext } from '../contrext/NavContext'

function FullNav() {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
    
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    
    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }
    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

  return (
    <div ref={fullScreenRef} className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
        <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-neutral-900'></div>
                    <div className='stairing h-full w-1/5 bg-neutral-900'></div>
                    <div className='stairing h-full w-1/5 bg-neutral-900'></div>
                    <div className='stairing h-full w-1/5 bg-neutral-900'></div>
                    <div className='stairing h-full w-1/5 bg-neutral-900'></div>
                </div>
            </div>
        <div ref={fullNavLinksRef} className='relative'>
            <div className='navlink flex justify-between px-2'>
                <Link to="/" >
                    <h1 className='font-[myFont1] text-[3vh] py-2 px-2'>S07</h1>
                </Link>
                <div onClick={()=> {
                    setNavOpen(false)
                }} className='relative h-[5vw] w-[2vh] flex my-2 cursor-pointer'>
                    <h2 className='absolute h-[4vh] w-0.5 -rotate-45 origin-center bg-red-500 rounded-full'></h2>
                    <h2 className='absolute h-[4vh] w-0.5 right-5/6 rotate-45 origin-center bg-red-500 rounded-full'></h2>
                </div>
            </div>
            <div className=' py-28 flex flex-col justify-center'>
                <Link to="/skill" className='link origin-top relative border-y border-y-neutral-700 py-5 md:py-0 overflow-x-hidden'>
                    <h2 className='w-full text-[5vw] font-[myFont1] text-center'>Skill</h2>
                    <div className='moveLink absolute top-0 flex items-center bg-yellow-200'>
                        <div className='moveX flex items-center gap-10 pl-10 py-5 md:py-0'>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>Explore My Skills</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-yellow-600 to-yellow-300 rounded-4xl'></div>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>Explore MY Skills</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-yellow-600 to-yellow-300 rounded-4xl'></div>
                        </div>
                        <div className='moveX flex items-center gap-10 pl-10 py-5 md:py-0'>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>Explore My Skills</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-yellow-600 to-yellow-300 rounded-4xl'></div>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>Explore MY Skills</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-yellow-600 to-yellow-300 rounded-4xl'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/project" className='link origin-top relative border-y border-y-neutral-700 py-5 md:py-0 overflow-x-hidden'>
                    <h2 className='w-full text-[5vw] font-[myFont1] text-center'>Project</h2>
                    <div className='moveLink absolute top-0 flex items-center bg-cyan-200'>
                        <div className='moveX flex items-center gap-10 pl-10 py-5 md:py-0'>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>My Project</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-cyan-600 to-cyan-300 rounded-4xl'></div>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>MY Project</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-cyan-600 to-cyan-300 rounded-4xl'></div>
                        </div>
                        <div className='moveX flex items-center gap-10 pl-10 py-5 md:py-0'>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>My Project</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-cyan-600 to-cyan-300 rounded-4xl'></div>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>MY Project</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-cyan-600 to-cyan-300 rounded-4xl'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/education" className='link origin-top relative border-y border-y-neutral-700 py-5 md:py-0 overflow-x-hidden'>
                    <h2 className='w-full text-[5vw] font-[myFont1] text-center'>Education</h2>
                    <div className='moveLink absolute top-0 flex items-center bg-lime-200'>
                        <div className='moveX flex items-center gap-10 pl-10 py-5 md:py-0'>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>See My Education</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-lime-600 to-lime-300 rounded-4xl'></div>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>See MY Education</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-lime-600 to-lime-300 rounded-4xl'></div>
                        </div>
                        <div className='moveX flex items-center gap-10 pl-10 py-5 md:py-0'>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>See My Education</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-lime-600 to-lime-300 rounded-4xl'></div>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>See MY Education</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-lime-600 to-lime-300 rounded-4xl'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/contact" className='link origin-top relative border-y border-y-neutral-700 py-5 md:py-0 overflow-x-hidden'>
                    <h2 className='w-full text-[5vw] font-[myFont1] text-center'>Contact</h2>
                    <div className='moveLink absolute top-0 flex items-center bg-purple-200'>
                        <div className='moveX flex items-center gap-10 pl-10 py-5 md:py-0'>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>Contact Me</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-purple-600 to-purple-300 rounded-4xl'></div>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>Contact Me</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-purple-600 to-purple-300 rounded-4xl'></div>
                        </div>
                        <div className='moveX flex items-center gap-10 pl-10 py-5 md:py-0'>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>Contact Me</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-purple-600 to-purple-300 rounded-4xl'></div>
                            <h2 className='whitespace-nowrap text-[5vw] font-bold text-black'>Contact Me</h2>
                            <div className='h-[5vw] w-[10vw] bg-linear-to-b from-purple-600 to-purple-300 rounded-4xl'></div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FullNav