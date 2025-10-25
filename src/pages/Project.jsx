import React from 'react'
import Projectcard from '../components/Projectcard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Project() {
  const projects = [
    {
      imageUrl1: "/image/condingaashrampage.png",
      text1:"codingaashram",
      imageUrl2: "/image/scriptandscribepage.png",
      text2:"scriptandscribe"
    },
    {
      imageUrl1: "/image/amitdevdiarypage.png",
      text1:"devdiary",
      imageUrl2: "/image/promotionlinkpage.png",
      text2:"promotionlink"
    },
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.from('.hero', {
      height: 0,
      stagger: {
        amount: 0.2
      },
      scrollTrigger: {
        trigger: '.lol',
        // markers: true,
        start: 'top 80%',
        end: 'top 0%',
        scrub: true
      }
    })
  })
  return (
    <div>
      <div className='pt-[40vh] flex gap-1'>
        <h2 className='font-[myFont1] text-[8vw] md:text-[5vw] text-white px-5 mb-5'>PROJECT</h2>
        <h3 className='font-semibold'>4</h3>
      </div>
      <div className='lol'>
          {projects.map((item,i)=>(
            <div key={i} className='hero w-full lg:h-[600px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
              <Projectcard item={item} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Project