gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeLine();

tl.to(".box", {x: 500, duration: 5})
.to(".box", {y: 500, duration: 5})
.add("rotate")
.to(".box",{rotate: 90, repeat: 2}) // La propiedad REPEAT nos repite la animación el número de veces que se le indique, en este caso 2 veces

// tl.play("rotate");
ScrollTrigger.create({
    animation: tl,
    trigger: ".box",
    start: "top center"
});

