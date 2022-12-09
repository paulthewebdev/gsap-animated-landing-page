
import gsap, { SteppedEase } from 'gsap'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import staticNoise from '../assets/images/noise.png'

import 'grained'


const App = () => {


  useLayoutEffect(() => {

    grained("#background", {
      "animate": true,
      "patternWidth": 100,
      "patternHeight": 100,
      "grainOpacity": 0.09,
      "grainDensity": 1,
      "grainWidth": 1,
      "grainHeight": 1
    })

  }, [])

  const hero = useRef()


  useLayoutEffect(() => {
    const tl = gsap.timeline({ ease: "slow(0.7, 0.7, false)" })

    tl.fromTo("#text", { yPercent: 500, opacity: 0 }, { yPercent: 0, autoAlpha: 1, stagger: 0.15, duration: 0.9 })
  }, [])

  return (
    <div id="background" className='h-screen bg-[#EEEEEE] text-[#222831] w-full'>
      <div className=' px-24 pt-24 flex justify-between items-baseline overflow-hidden'>
        <h2 className='text-4xl' id="text">P.TWD</h2>
        <div className='flex space-x-6' id="text">
          <span >
            WORK
          </span>
          <span >
            CONTACT
          </span>
        </div>
      </div>
      <div className='px-24 flex flex-col justify-center items-end' style={{
        height: "calc(100% - 136px)"
      }}>
        <div className='overflow-hidden'>
          <h1 className='text-[12rem]' id="text" style={{ lineHeight: "140px" }} ref={hero}>P.TWD</h1>
        </div>
        <div className='flex flex-col items-end w-full overflow-hidden'>
          <div className='overflow-hidden'>
            <div className='text-2xl mt-36' id="text">* (paulthewebdeveloper)</div>
          </div>


          <div className='flex mt-12 flex-row justify-between w-full'>
            <div>
              <div className='overflow-hidden'>
                <h3 className='text-2xl overflow-hidden' id="text">
                  GET IN TOUCH
                </h3>
              </div>
              <div className='overflow-hidden'>
                <div className='text-xl mt-2 text-[#EEEEEE] bg-[#222831] px-6 py-2 uppercase' id="text">info@paulthewebdeveloper.com</div>
              </div>
            </div>
            <div className='flex flex-col text-right space-y-2 uppercase overflow-hidden'>
              <div className='overflow-hidden'>
                <div className='text-[#EEEEEE] bg-[#222831] pl-24 pr-4 py-2' id="text" >Paul The Web Developer is a web</div>
              </div>
              <div className='overflow-hidden'>
                <div className='text-[#EEEEEE] bg-[#222831] px-4 py-2' id="text" >development/design company</div>
              </div>
              <div className='overflow-hidden'>
                <div className='text-[#EEEEEE] bg-[#222831] px-4 py-2' id="text" >based in Malta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App