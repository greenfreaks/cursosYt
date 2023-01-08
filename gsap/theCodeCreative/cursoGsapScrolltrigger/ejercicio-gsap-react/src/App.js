import logo from './logo.svg';
import './App.css';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const squareRef = useRef(null);
  const square2Ref = useRef(null);
  const square3Ref = useRef(null);

  useEffect(() =>{
    const sq = squareRef.current;
    gsap.fromTo(sq, {rotation: 0}, {rotation: 180, duration: 3, scrollTrigger:{ trigger: sq } })
  }, []);

  useEffect(() =>{
    const sq2 = square2Ref.current;
    gsap.fromTo(sq2, {rotation: 0}, {rotation: 180, duration: 3, scrollTrigger:{ trigger: sq2 } })
  }, []);

  useEffect(() =>{
    const sq3 = square3Ref.current;
    gsap.fromTo(sq3, {rotation: 0}, {rotation: 180, duration: 3, scrollTrigger:{ trigger: sq3 } })
  }, []);

  
  return (
    <div className="App">
      <div className='panel'></div>
      <div className='square' ref={squareRef}></div>
      <div className='square2' ref={square2Ref}></div>
      <div className='square3' ref={square3Ref}></div>
      <div className='panel'></div>
    </div>
  );
}

export default App;
