import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DayOne = () => {

  useGSAP(() => {
    // gsap.to('.box', {
    //   x: 1200,
    //   delay: 1,
    //   duration: 2,
    //   rotate: 180,
    //   backgroundColor: 'blue',
    //   repeat: -1,
    //   yoyo: true
    // })
    // gsap.from('.text', {
    //   y: 40,
    //   opacity: 0,
    //   duration: 1,
    //   delay: 1,
    //   stagger: 1
    // })

    const tl = gsap.timeline();
    tl.from('.box', {
      x: 1200,
      delay: 1,
      duration: 2,
      rotate: 180,
      backgroundColor: 'blue',
      opacity: 0
      // repeat: -1,
      // yoyo: true
    })
    tl.from('.text', {
      y: 40,
      opacity: 0,
      duration: 1,
      // delay: 1,
      stagger: 1,
      scale: 0.1
    })
  })

  return (
    <>
      <div className='box h-48 w-48 bg-red-600'>
      </div>
      <h1 className='text-8xl text'>
        Himanshu
      </h1>
      <h1 className='text-8xl text'>
        Himanshu
      </h1>
      <h1 className='text-8xl text'>
        Himanshu
      </h1>
    </>
  )
}

export default DayOne