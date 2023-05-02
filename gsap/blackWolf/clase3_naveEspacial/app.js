gsap.registerPlugin(ScrollTrigger);

const nave = document.querySelector(".nave");
const planeta1 = document.querySelector(".planeta1");
const planeta2 = document.querySelector(".planeta2");
const planeta3 = document.querySelector(".planeta3");
const planeta4 = document.querySelector(".planeta4");
const planeta5 = document.querySelector(".planeta5");

const tl = gsap.timeline({
    scrollTrigger: {
        // trigger: 'contenedor', // Este conteedro es el padre del siguiente, si agarraramos este contenedor, todo se pinearía, incluyendo el título
        trigger: '.contenedor__animacion',
        pin: true,
        markers: false,
        start: 'top top',
        end: '100% 100%',
        scrub: 5,
    }
});
tl.to(nave, {scale: 0.5, y:'30vh', duration: 4, });
tl.to(planeta1, {opacity: 1, y: '-50vh', scale: 1.3, duration: 3.5});
tl.to(planeta2, {opacity: 1, y: '-90vh', scale: 1, duration: 3.5});
tl.to(nave, {rotate: '230', duration: 3.5});
tl.to(nave, {x: '-35vw', duration: 4});
tl.to(planeta2, {y: '-150vh', opacity: 0, duration: 3.5});
tl.to(nave, {rotate: '115', duration: 3.5});
tl.to(planeta1, { y: '-150vh', opacity: 10, duration: 3.5});
tl.to(nave, {x: '75vh', duration: 5})
tl.to(planeta3, {x: '-120vw', opacity: 1, duration: 8});
tl.to(nave, {rotate: '250', duration: 5});
tl.to(nave, {x: '-35vw', y:300, duration: 8});
tl.to(planeta3, {x: -100, opacity: 0, duration: 8});
tl.to(planeta4, {x: '130vh', opacity: 1, duration: 8});
tl.to(nave, {rotate: '130', duration: 3.5});
tl.to(nave, {x: '0vw', rotate: '0', y: 300, duration: 8});
tl.to(planeta4, {x: 100, opacity: 0, duration: 8});
tl.to(planeta5, {y: -500, opacity: 1, duration: 8 }, '-=8')