import React, {useState} from 'react'

function Education() {
    const[mousePos, setMousePos] = useState({x:0, y:0});
    function handleMouseMove(e){
        setMousePos({ x: e.clientX, y:  e.clientY });
    }
  return (
    <div className='pt-40'>
        <h2 className='font-[myFont1] text-[8vw] md:text-[5vw] text-white px-5 mb-5'>EDUCATION</h2>
        <div 
        onMouseMove={handleMouseMove}
        className='border-y-2 group border-neutral-800 flex items-center justify-between px-10 py-[7vh]'>
            <img 
            style={{
                top: mousePos.y, 
                left: mousePos.x,
                transform: "translate(-50%, -50%)",
            }}
            className={`rounded-xl hidden group-hover:absolute group-hover:block h-[20vh]`}
            src="../image/ssvm.png" alt="na" />
            <div>
                <h1 className='text-[3vh] capitalize'>Saraswati Shishu Vidya Mandir</h1>
                <p className='text-neutral-500'>Scooling</p>
            </div>
            <h2>till 2020</h2>
        </div>
        <div 
        onMouseMove={handleMouseMove}
        className='border-y-2 group border-neutral-800 flex items-center justify-between px-10 py-[7vh]'>
            <img
            style={{
                top: mousePos.y, 
                left: mousePos.x,
                transform: "translate(-50%, -50%)",
            }}
            className='rounded-xl hidden group-hover:absolute group-hover:block h-[20vh]'
            src="../image/stewart.png" alt="na" />
            <div>
                <h1 className='text-[3vh] capitalize'>Stewart Science School</h1>
                <p className='text-neutral-500'>11th & 12th</p>
            </div>
            <h2>2021 - 2022</h2>
        </div>
        <div 
        onMouseMove={handleMouseMove}
        className='border-y-2 group border-neutral-800 flex items-center justify-between px-10 py-[7vh]'>
            <img 
            style={{
                top: mousePos.y, 
                left: mousePos.x,
                transform: "translate(-50%, -50%)",
            }}
            className='rounded-xl hidden group-hover:absolute group-hover:block h-[20vh]'
            src="../image/iter.png" alt="na" />
            <div>
                <h1 className='text-[3vh] capitalize'>Institute of Technical Education and Research (SOA)</h1>
                <p className='text-neutral-500'>Bachelor of Technology</p>
            </div>
            <h2>2022 - ungoing</h2>
        </div>
    </div>
  )
}

export default Education