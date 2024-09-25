import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const DayTwo = () => {

  useGSAP(() => {
    // gsap.from('#page1 #box', {
    //   scale: 0,
    //   delay: 1,
    //   duration: 2,
    //   rotate: 360
    // })
    gsap.from('#page2 #box', {
      scale: 0,
      delay: 1,
      duration: 3,
      rotate: 360,
      scrollTrigger: {
        trigger: '#page2 #box',
        scroller: 'body',
        markers: true,
        start: 'top 60%',
        scrub: true,
        pin: true
      }
    })
  })

  return (
    <div className='min-h-screen'>
      <div id='page1' className='h-screen w-full bg-blue-400 flex justify-center items-center'>
        <div id='box' className='h-[250px] w-[250px] bg-red-500'></div>
      </div>
      <div id='page2' className='h-screen w-full bg-blue-500 flex justify-center items-center'>
        <div id='box' className='h-[250px] w-[250px] bg-red-500'></div>
      </div>
      <div id='page3' className='h-screen w-full bg-blue-600 flex justify-center items-center'>
        <div id='box' className='h-[250px] w-[250px] bg-red-500'></div>
      </div>
    </div>
  )
}

export default DayTwo