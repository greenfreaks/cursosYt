gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 500,
    duration: 3,
    scrollTrigger:{
        trigger: ".square",
        start: "top 60%",
        end: "top 30%",
        toggleActions:"restart pause resume reverse",
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem"
        },
    },
});
