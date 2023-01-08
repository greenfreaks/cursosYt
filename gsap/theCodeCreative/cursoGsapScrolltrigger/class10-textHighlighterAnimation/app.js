gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("span").forEach((span) => {
    ScrollTrigger.create({
        trigger: span,
        start: "top center",
        toggleClass: "active",
        markers: true
    })
});