gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: 'none', duration: 2}) //Decimos que todas nuestras animaciones que creemos tengan estos atributos

const tl = gsap.timeline();


tl.from('.section__2', {xPercent: 100});
tl.from('.section__3', {xPercent: -100});
tl.from('.section__4', {yPercent: -100});

ScrollTrigger.create({
    animation: tl,
    trigger: '.contenedorAnimacion',
    markers: true,
    start: "top top", //El primer parámetro se refiere al contenedor de la animación, el segundo se refiere a la pantalla
    end: '+=4000', //+4000 nos aumenta el vh del height del contenedor de la animación, para darle más espacio a la animación para que se ejecute, y entre más espacio, más tiempo, de lo contrario, al hacer scroll, sería muy rápido
    pin: true,
    scrub: 1,
})

