import { gsap } from 'gsap';
import React, { useRef, useEffect } from 'react';

const DaySix = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current?.textContent;
    if (text) {
      const splitText = text.split("");
      let clutter = "";
      const midPoint = Math.floor(splitText.length / 2);

      splitText.forEach((element, index) => {
        const className = index < midPoint ? "a" : "b";
        clutter += `<span class="inline-block ${className}">${element}</span>`;
      });

      textRef.current.innerHTML = clutter;

      gsap.from("h1 .a", {
        y: 80,
        stagger: 0.15,
        duration: 0.6,
        opacity: 0,
        delay: 1,
      });
      gsap.from("h1 .b", {
        y: 80,
        stagger: -0.15,
        duration: 0.6,
        opacity: 0,
        delay: 1,
      });
    }
  }, []);

  return (
    <div id="main" className="flex items-center justify-center h-screen bg-black text-white">
      <h1 ref={textRef} className="text-9xl font-semibold p-6 overflow-hidden">Himanshu</h1>
    </div>
  );
};

export default DaySix;
