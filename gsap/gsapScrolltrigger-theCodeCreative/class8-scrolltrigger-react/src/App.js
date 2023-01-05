import logo from './logo.svg';
import './App.css';

import gsap from 'gsap' // Importamos GSAP, para este punto ya lo debimos de haber instalado
import { ScrollTrigger } from 'gsap/ScrollTrigger' // Importamos el Plugin ScrollTriger de gsap;
import {useRef, useEffect} from 'react' // Es necesario importar estos 2 hooks para poder trabajar con gsap en react

gsap.registerPlugin(ScrollTrigger); // Indicamos que haremos uso del plugin ScrollTrigger, ahora podemos usar scrollTrigger como objeto


function App() {
  const imgRef = useRef(null); // creamos una variable en la que vamos a usar el hook useRef 
  useEffect(() =>{
    const el = imgRef.current; // Decimos que vamos a trabajar con la imagen referenciada
    gsap.fromTo(el, //le indicamos a gsap que vamo a trabajar con la constante "el", la cual tiene almacenada a la imagen referenciada
      {rotation: 0}, 
      {rotation: 180, 
        duration: 3, 
        scrollTrigger:{
          trigger: el //Recordemos que el elemento que estamos animando está almcenado en la variable "el"
        }
      })
  }, []) 
  return (
    <div className="App">
        <div className="helper"></div>
        <img src={logo} className="App-logo" alt="logo" ref={imgRef}/> // al atributo ref="" le estamos pasando el valor de la constante imgRef que creamos, esto se hace para refereciarla
    </div>
  );
}

export default App;
