import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

const DayFive = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (!hasOpenedOnce) {
      setHasOpenedOnce(true);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    if (sidebarOpen) {
      tl.set("#sidebar", { x: "100%" });
      tl.to("#sidebar", { x: 0, duration: 0.5 });
      tl.from("#sidebar li", {
        x: 500,
        duration: 1,
        stagger: 0.3,
        opacity: 0,
      });
    } else if (hasOpenedOnce) {
      tl.to("#sidebar", { x: "100%", duration: 0.5 });
    }
  }, [sidebarOpen, hasOpenedOnce]);

  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
      className="min-h-screen bg-blue-200 bg-center relative"
    >
      <nav className="flex justify-between items-center p-4 text-white">
        <div className="text-xl font-bold">GSAP</div>
        {!sidebarOpen && (
          <button onClick={toggleSidebar} className="text-2xl">
            <FaBars />
          </button>
        )}
      </nav>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        id="sidebar"
        className="h-full w-[40%] bg-[rgba(255,255,255,0.544)] fixed top-0 right-0 z-50"
        style={{
          transform: "translateX(100%)",
        }}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl"
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col items-start justify-center h-full space-y-6 p-8 text-5xl font-semibold text-black">
          <li>Work</li>
          <li>About</li>
          <li>Courses</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default DayFive;
