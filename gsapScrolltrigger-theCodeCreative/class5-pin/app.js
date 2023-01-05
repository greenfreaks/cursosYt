gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 500,
    // duration: 3,
    scrollTrigger:{
        trigger: ".square",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        toggleActions:"restart none none none",
        pin: true, //Una vez que la etiqueta <<scroller-end>> se encuentra con las etoquetas <<start>> y <<end>>, el elemento animado se detiene
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem"
        },
    },
});

gsap.to(".square2", {
    x: 500,
    // duration: 3,
    scrollTrigger:{
        trigger: ".square3", //Definimos que el disparador de la animación del .square2 (cuadro azúl), será el elemento .square3 (cuadro negro)
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        toggleActions:"restart none none none",
        pin: ".square2", //Decimos que el elemento .square2 (cuadro azul) será el elemento que se quedará estático una vez que la etiqueta <<scroller-end>> revase a las etiquetas <<start>> y <<end>> del elemento .square3 (cuadro negro)
        pinSpacing: false, // Decimos que no habrá ningún espacio entre los 2 elementos que están inteactuando (.square2 y .square3)
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem"
        },
    },
});

gsap.to(".square3", {
    // x: 500,
    duration: 3,
    scrollTrigger:{
        trigger: ".square4",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        toggleActions:"restart none none none",
        pin: ".square3",
        pinSpacing: true,
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem"
        },
    },
});


