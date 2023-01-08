gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".contenedor__imagenes",
        // trigger: ".carro_1",
        pin: true, //Establecemos el pin en el contenedor trigger
        start: 'top top',
        end: "+=700 0",
        scrub: 3,
        // markers: true,
        // pin: '.carro_2' //Definimos el objeto que vamos a pinear
    }
})

tl.to('.carro_1', {x: '1000', duration: 5});
tl.to('.carro_2', {x: '1000', duration: 5}, '-=5'); // Al animar de esta forma, el tiempo de duración de cada imagen, también será el tiempo de DELAY en que tardará para hacer la siguiente animación, pero con la segunda propiedad de esta segunda animación le estamos restando 5 segundos de DELAY, por lo que en este caso estamos haciendo que se reproduzcan al mismo tiempo las 2 animaciones