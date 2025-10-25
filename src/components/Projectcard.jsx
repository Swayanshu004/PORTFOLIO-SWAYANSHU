import React from 'react'

function Projectcard({item}) {
  return (
    <>
        <div className='w-full md:w-1/2 h-full group relative scale-100 hover:scale-95 hover:rounded-2xl overflow-hidden ease-in-out duration-700 bg-amber-950'>
            <img
            className='h-full w-full object-cover' 
            src={item.imageUrl1} alt="na" />
            <div className='opacity-0 group-hover:opacity-100 ease-in-out duration-500 h-full w-full flex items-center justify-center absolute top-0 left-0 bg-black/60'>
                <h2 className='text-4xl'>{item.text1}</h2>
            </div>
        </div>
        <div className='w-full md:w-1/2 h-full group relative scale-100 hover:scale-95 hover:rounded-2xl overflow-hidden ease-in-out duration-700 bg-amber-950'>
            <img
            className='h-full w-full object-cover' 
            src={item.imageUrl2} alt="na" />
            <div className='opacity-0 group-hover:opacity-100 ease-in-out duration-500 h-full w-full flex items-center justify-center absolute top-0 left-0 bg-black/60'>
                <h2 className='text-4xl'>{item.text2}</h2>
            </div>
        </div>
    </>
  )
}

export default Projectcard