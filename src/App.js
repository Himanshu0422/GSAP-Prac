import React from 'react';
import DayOne from './prac/DayOne';
import DayTwo from './prac/DayTwo';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DayTwoHorizontalScroll from './prac/DayTwoHorizontalScroll';
import DayThree from './prac/DayThree';
import DayFour from './prac/DayFour';
import DayFive from './prac/DayFive';
import DaySix from './prac/DaySix';
import DaySixTwo from './prac/DaySixTwo';
import DaySeven from './DaySeven';
import { Observer } from 'gsap/Observer';
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
gsap.registerPlugin(SplitText);

const App = () => {
  return (
    <DaySeven />
  )
}

export default App