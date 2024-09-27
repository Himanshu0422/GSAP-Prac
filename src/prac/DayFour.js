import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DayFour = () => {
  const mainRef = useRef();
  const cursorRef = useRef();
  const imageRef = useRef();
  const overlayRef = useRef();

  useEffect(() => {
    const mainElement = mainRef.current;
    const cursorElement = cursorRef.current;
    const imageElement = imageRef.current;

    const mousemove = (e) => {
      gsap.to(cursorElement, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const mousemoveImage = () => {
      cursorElement.innerHTML = "View More";
      gsap.to(cursorElement, {
        scale: 4,
        duration: 0.3,
        backgroundColor: '#ffffff8a'
      });
    };

    const mouseLeaveImage = () => {
      cursorElement.innerHTML = "";
      gsap.to(cursorElement, {
        scale: 1,
        duration: 0.3,
        backgroundColor: '#fff'
      });
    };

    mainElement.addEventListener("mousemove", mousemove);
    imageElement.addEventListener("mousemove", mousemoveImage);
    imageElement.addEventListener("mouseleave", mouseLeaveImage);

    return () => {
      mainElement.removeEventListener("mousemove", mousemove);
      imageElement.removeEventListener("mousemove", mousemoveImage);
      imageElement.removeEventListener("mouseleave", mouseLeaveImage);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen relative">
      <div
        ref={cursorRef}
        className="pointer-events-none z-[9] h-[20px] w-[20px] rounded-full bg-white fixed flex items-center text-center text-[5px]"
      ></div>
      <div
        ref={mainRef}
        className="relative min-h-screen flex justify-center items-center"
      >
        <div
          ref={overlayRef}
          className="absolute bg-transparent z-10"
        ></div>
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Centered Image"
          className="cursor-pointer w-[50vw] h-[30vw] relative"
        />
      </div>
    </div>
  );
};

export default DayFour;
