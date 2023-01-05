gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    duartion: 3,
    scrollTrigger:{ //Esta propiedad tambipen puede ser un objeto que a su vez contiene mas propiedades
        trigger: ".square", // Seleccionamos el objeto que se va a animar
        start: 400, // Indicamos que se va a inicar la animación cuando el view port del scroll legue a 400vh   
    }
});

gsap.to(".square2", {
    x: 700,
    duartion: 3,
    scrollTrigger:{
        trigger: ".square2",
        start: "top center", //Indica que cuando el top del elemento disparador (.square2) , conozca el centro del vp, se inicia la animación 
        end: "center 20%", //Define el fin de la animación
        markers: true, // Pone unos marcadores en nuestra pantalla para saber en qué momento iniciará  y finalizará una animación
        toggleClass:"red" // Añadimos esta clase creada en CSS a nuestro elemento en el que estamos trabajando (.square2)
    },
});

gsap.to(".square3", {
    x: 700,
    duartion: 3,
    scrollTrigger:{
        trigger: ".square2",
        start: "top 30%", //Indica que cuando el top del elemento disparador (.square2) , conozca el 30% vp, se inicia la animación 
        // markers: { //Esta propiedad también puede contener otras propiedades
        //     startColor: "purple", //Cambiamos a color púrpura la etiqueta que marca el incio del objeto
        //     endColor: "fuchsia", //Cambiamos a color fiusha la etiqueta que marca el final del objeto
        //     fontSize: "4rem", // Cambiamos el tamaño de fuente de las etiquetas
        //     indent: 200 // cambiamos la identación (espacio entre el borde de la pantalla) de las etiquetas
        // }
    }
})

gsap.to(".square4", {
    x: 700,
    duartion: 3,
    scrollTrigger:{
        trigger: ".square4",
        start: "top center",  
        end: () => `+=${document.querySelector('.square4').offsetHeight}`, // Creamos un arrow function
        markers: true,
        toggleClass:"red"
    },
}); //No entendí xD