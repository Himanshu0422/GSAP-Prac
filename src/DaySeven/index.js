import React, { useEffect } from 'react';
import './DaySeven.css';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import SplitText from 'gsap-trial/SplitText';

const DaySeven = () => {
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let images = document.querySelectorAll(".bg");
    let headings = gsap.utils.toArray(".section-heading");
    let outerWrappers = gsap.utils.toArray(".outer");
    let innerWrappers = gsap.utils.toArray(".inner");
    let currentIndex = -1;
    let splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" }))
    let wrap = gsap.utils.wrap(0, sections.length);
    let animating;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index);
      animating = true;
      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => animating = false
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([outerWrappers[index], innerWrappers[index]], {
        yPercent: i => {
          return i ? -100 * dFactor : 100 * dFactor;
        }
      }, {
        yPercent: 0
      }, 0);
      tl.fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)

      // Removed SplitText animation
      tl.fromTo(splitHeadings[index].chars, {
        autoAlpha: 0,
        yPercent: 150 * dFactor
      }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2",
        stagger: {
          each: 0.02,
          from: "random"
        }
      }, 0.2);

      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    });

    gotoSection(0, 1);
  }, []);

  return (
    <>
      <header className="header fixed flex items-center justify-between px-[5%] w-full z-[3] h-[7em]">
        <div>Animated Sections</div>
        <div><a href="https://codepen.io/BrianCross/pen/PoWapLP" target="_blank" rel="noopener noreferrer">Original By Brian</a></div>
      </header>

      <section className="first h-[100%] w-[100%] top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center absolute h-[100%] w-full top-0 bg-cover bg-center">
              <h2 className="section-heading z-[2] font-normal text-center">Scroll down</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="second h-[100%] w-[100%] top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center absolute h-[100%] w-full top-0 bg-cover bg-center">
              <h2 className="section-heading z-[2] font-normal text-center">Animated with GSAP</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="third h-[100%] w-[100%] top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center absolute h-[100%] w-full top-0 bg-cover bg-center">
              <h2 className="section-heading z-[2] font-normal text-center">GreenSock</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth h-[100%] w-[100%] top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center absolute h-[100%] w-full top-0 bg-cover bg-center">
              <h2 className="section-heading z-[2] font-normal text-center">Animation platform</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth h-[100%] w-[100%] top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center absolute h-[100%] w-full top-0 bg-cover bg-center">
              <h2 className="section-heading z-[2] font-normal text-center">Keep scrolling</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DaySeven;
