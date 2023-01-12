import NaveImg from '../assets/img/nave.png'
import Planet1 from '../assets/img/planet1.png'
import Planet2 from '../assets/img/planet2.png'
import Planet3 from '../assets/img/planet3.png'
import Planet4 from '../assets/img/planet4.png'
import Planet5 from '../assets/img/planet5.png'


//Importar estos hooks y librerías después de las imágenes, si no se hace así da un error
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Nave = () => {
    const contenedorAnimacionRef = useRef(null);
    const naveRef = useRef(null);
    const planet1Ref = useRef(null);
    const planet2Ref = useRef(null);
    const planet3Ref = useRef(null);
    const planet4Ref = useRef(null);
    const planet5Ref = useRef(null);
    useEffect(() => {
        const contenedorAnimacion = contenedorAnimacionRef.current
        const nave = naveRef.current;
        const planet1 = planet1Ref.current;
        const planet2 = planet2Ref.current;
        const planet3 = planet3Ref.current;
        const planet4 = planet4Ref.current;
        const planet5 = planet5Ref.current;

        const tl = gsap.timeline({
            scrollTrigger: {

                trigger: contenedorAnimacion,
                // pin: true,
                markers: true,
                start: 'top top',
                end: '100% 100%',
                scrub: 5,
            }
        }, [contenedorAnimacion]);
        tl.to(nave, { scale: 0.5, y: '30vh', duration: 4, });
        tl.to(planet1, { opacity: 1, y: '-50vh', scale: 1.3, duration: 3.5 });
        tl.to(planet2, { opacity: 1, y: '-90vh', scale: 1, duration: 3.5 });
        tl.to(nave, { rotate: '230', duration: 3.5 });
        tl.to(nave, { x: '-35vw', duration: 4 });
        tl.to(planet2, { y: '-150vh', opacity: 0, duration: 3.5 });
        tl.to(nave, { rotate: '115', duration: 3.5 });
        tl.to(planet1, { y: '-150vh', opacity: 10, duration: 3.5 });
        tl.to(nave, { x: '75vh', duration: 5 })
        tl.to(planet3, { x: '-120vw', opacity: 1, duration: 8 });
        tl.to(nave, { rotate: '250', duration: 5 });
        tl.to(nave, { x: '-35vw', y: 300, duration: 8 });
        tl.to(planet3, { x: -100, opacity: 0, duration: 8 });
        tl.to(planet4, { x: '130vh', opacity: 1, duration: 8 });
        tl.to(nave, { rotate: '130', duration: 3.5 });
        tl.to(nave, { x: '0vw', rotate: '0', y: 300, duration: 8 });
        tl.to(planet4, { x: 100, opacity: 0, duration: 8 });
        tl.to(planet5, { y: -500, opacity: 1, duration: 8 }, '-=8')
    });
    return (
        <section className="contenedor">
            <div className="contenedor__animacion" ref={contenedorAnimacionRef}>
                <img src={NaveImg} alt="" className="nave" ref={naveRef} />
                <img src={Planet1} alt="" className="planeta planeta1" ref={planet1Ref} />
                <img src={Planet2} alt="" className="planeta planeta2" ref={planet2Ref} />
                <img src={Planet3} alt="" className="planeta planeta3" ref={planet3Ref} />
                <img src={Planet4} alt="" className="planeta planeta4" ref={planet4Ref} />
                <img src={Planet5} alt="" className="planeta planeta5" ref={planet5Ref} /></div>
        </section>
    )
}
export default Nave;