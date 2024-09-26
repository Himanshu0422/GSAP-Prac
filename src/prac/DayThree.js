import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const DayThree = () => {
  const [pathWidth, setPathWidth] = useState(0);
  const initialPath = `M 10 100 Q ${pathWidth / 2} 100 ${pathWidth} 100`;
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    const pathElement = pathRef.current;

    const svgRect = svgElement.getBoundingClientRect();
    setPathWidth(svgRect.width - 10);

    const mouseMove = (e) => {
      const mouseX = e.clientX - svgRect.left;
      const mouseY = e.clientY - svgRect.top;
      const newPath = `M 10 100 Q ${mouseX} ${mouseY} ${pathWidth} 100`;

      gsap.to(pathElement, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out"
      });
    };

    const mouseLeave = () => {
      gsap.to(pathElement, {
        attr: { d: initialPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
      });
    };

    svgElement.addEventListener('mousemove', mouseMove);
    svgElement.addEventListener('mouseleave', mouseLeave);

    return () => {
      svgElement.removeEventListener('mousemove', mouseMove);
      svgElement.removeEventListener('mouseleave', mouseLeave);
    };
  }, [pathWidth]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <svg 
        width="90%" 
        height="200" 
        className='bg-red-500' 
        ref={svgRef} 
        style={{ cursor: 'pointer' }}
      >
        <path 
          ref={pathRef}
          d={initialPath} 
          stroke='black' 
          fill='transparent' 
          pointerEvents="all" 
        />
      </svg>
    </div>
  );
};

export default DayThree;
