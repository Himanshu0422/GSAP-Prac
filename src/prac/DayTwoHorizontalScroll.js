import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const DayTwoHorizontalScroll = () => {

  useGSAP(() => {
    gsap.to("#page1 h1", {
      x: "-150%",
      scrollTrigger: {
        trigger: "#page1",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,   
        markers: true,
        pin: true
      }
    });
  });

  return (
    <div className="min-h-screen">
      <div id="page2" className="h-screen w-full bg-blue-400"></div>

      <div id="page1" className="h-screen w-full bg-blue-500">
        <h1 className="text-[40vw] font-semibold whitespace-nowrap text-white">
          EXPERIENCE
        </h1>
      </div>
      <div id="page2" className="h-screen w-full bg-blue-400"></div>
    </div>
  );
};

export default DayTwoHorizontalScroll;
