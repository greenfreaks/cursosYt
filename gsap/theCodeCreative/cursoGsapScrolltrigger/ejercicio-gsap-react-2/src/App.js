import logo from './logo.svg';
import './App.css';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useEffect} from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() =>{
    gsap.to(".square", {
      x: 500,
      scrollTrigger:{
        trigger: ".square",
        start: "top 50%",
        end: "bottom 30%",
        scrub: 1,
        // markers:{
        //   startColor: "purple",
        //   endColor: "fuchsia",
        //   fontSize: "2rem"
        // },
      },
    });
  },[]);

  useEffect(() =>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: ".square3",
        // markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1
      }
    });
    tl.to(".square2", 
    {
      x: 500,
      duration: 2
    }
    )
    .to(".square2",{
      rotation: 360,
      duration: 3
    })
    .to(".square3",{
      x: 360,
      duration: 3
    })
  },[]);
  return (
    <div className="App">
      <div className='panel'></div>
      <div className='square'></div>
      <div className='square2'></div>
      <div className='square3'></div>
      <div className='panel'></div>
    </div>
  );
}

export default App;
