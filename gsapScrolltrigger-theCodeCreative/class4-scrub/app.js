gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 500,
    // duration: 3,
    scrollTrigger:{
        trigger: ".square",
        start: "top 80%",
        end: "top 30%",
        scrub: true, // Permite que la animación se realice únicamente cuando se está haciendo Scrolling, de lo contrario, la animación se detiene
        toggleActions:"restart none none none",
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
        trigger: ".square2",
        start: "top 80%",
        end: "top 30%",
        scrub: 4, // Por defecto se sabe que son segundos. Al establecerle un valor numérico al Scrub, al detener la animación, este se detiene poco a poco (esta duración depende de los segundo definidos), haciendo su detenimiento más suave
        toggleActions:"restart none none none",
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem"
        },
    },
});
