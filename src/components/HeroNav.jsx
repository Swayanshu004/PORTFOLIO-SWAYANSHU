import {useRef, useContext} from 'react'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../contrext/NavContext'

function HeroNav() {
    const navBgRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    
    
  return (
    <div className='w-screen top-0 flex  fixed justify-between z-4'>
        <Link to="/" >
            <img className='pl-5 pt-2 h-[8vh]' src="./image/applogo.png" alt="logo" />
        </Link>
        <div 
        onClick={()=>{
            setNavOpen(true)
        }}
        onMouseEnter={()=>{
            navBgRef.current.style.height = '100%'
        }}
        onMouseLeave={()=>{
            navBgRef.current.style.height = '0%'
        }}
        className='w-[12vw] bg-black flex flex-col items-end gap-3 justify-center hover:text-cyan-500 text-2xl rounded-bl-2xl cursor-pointer'>
        <div ref={navBgRef} className='bg-cyan-500 transition-all absolute top-0 h-0 w-[12vw] flex flex-col items-end gap-3 justify-center rounded-bl-2xl'>
            <div className='w-1/2 bg-black h-1 rounded-full mx-2'></div>
            <div className='w-1/3 bg-black h-1 rounded-full mx-2'></div>
        </div>
            <div className='w-1/2 bg-cyan-500 h-0.5 rounded-full mx-2'></div>
            <div className='w-1/3 bg-cyan-500 h-0.5 rounded-full mx-2'></div>
        </div>
    </div>
  )
}

export default HeroNav 