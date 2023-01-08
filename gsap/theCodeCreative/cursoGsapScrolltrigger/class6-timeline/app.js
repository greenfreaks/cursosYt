gsap.registerPlugin(ScrollTrigger);


// Primera animación
gsap.to(".box", {x: 500, duration: 2});

// Segunda animación
gsap.to(".box", {
    y: 200, 
    duration: 3, 
    delay: 2
}); // La propiedad DELAY indica que esta segunda animación tardará en iniciar 2 segundos después de que la primera animación haya finalizado


// Tercera animación
gsap.to(".box", {x: 0, duration: 2, delay: 5})


/* 
    * Para sustituír y simplificar la forma de hacer el proces de arriba, podemos hacerlo de la siguiente forma:
    * Al hacerlo de la siguient manera, el tiempo de duración del DELAY de cada animación será por default el mismo tiempo de la propiedad DURATION
*/

// const tl = gsap.timeline(); // Creamos una variable tl que cintendrá la función gsap.timeline():
const tl = gsap.timeline({ // en esta línea de tiempo podemos definir las propiedades de cuándo va a inicar la animación de un objeto
    scrollTrigger:{
        trigger: ".box2",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1 // Al darle un valor numérico al scroll, logramos el efecto de dejar de hacer la animación con cierta suavidad una vez que dejemos de hacer Scrolling 
    }
})

tl.to(".box2", {x: 500, duration: 2}) // usamos la variable tl con la función .to   
    .to(".box2", {y: 200, duration: 3})
    .to(".box2", {x: 0, duration: 2})


