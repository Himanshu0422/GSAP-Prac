import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const VerticalMarquee = () => {
  const motivRefs = useRef([]);

  useEffect(() => {
    const imgs = gsap.utils.toArray(motivRefs.current);

    const next = 1;
    let animating = false;

    const crossfade = () => {
      if (animating) return;
      animating = true;

      const tl = gsap.timeline({
        onComplete: () => {
          animating = false;
        },
      });

      tl.to(imgs, { y: '-=100%', duration: 1, ease: 'power1.inOut' });

      tl.to(imgs[0], { y: '+=300%', duration: 0 });

      imgs.push(imgs.shift());
      console.log(imgs);

      gsap.delayedCall(next, crossfade);
    };

    gsap.delayedCall(next, crossfade);
  }, []);

  return (
    <div className="bg-gray-500 h-screen flex justify-center items-center">
      <div className="relative w-96 h-48 overflow-hidden">
        <div
          ref={(el) => (motivRefs.current[0] = el)}
          className="relative w-full h-full bg-blue-500 flex justify-center items-center"
        >
          <h1 className="m-0 pl-2 text-6xl text-white">ONE</h1>
        </div>
        <div
          ref={(el) => (motivRefs.current[1] = el)}
          className="relative w-full h-full bg-red-500 flex justify-center items-center"
        >
          <h1 className="m-0 pl-2 text-6xl text-white">TWO</h1>
        </div>
        <div
          ref={(el) => (motivRefs.current[2] = el)}
          className="relative w-full h-full bg-green-500 flex justify-center items-center"
        >
          <h1 className="m-0 pl-2 text-6xl text-white">THREE</h1>
        </div>
      </div>
    </div>
  );
};

export default VerticalMarquee;
