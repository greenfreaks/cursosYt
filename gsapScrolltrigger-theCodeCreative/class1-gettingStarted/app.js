gsap.registerPlugin(ScrollTrigger); //Este plugin lo usaremos para la animación que se programará a continuación, este plugin (ScrollTrigger) lo podemos usar como una propiedad de un objeto de GSAP 

/*
    *Necesitaremos 2 parámetros para hacer trabajar esta función:
        ->1: El elemento que vamos a animar
        ->2: Un objeto que va a contener todas las propiedades de la animación
    * En este ejemplo crearemos la animación de mover un cuadro de izquierda a derecha
*/
gsap.to(".square", {
    y: -700, //Eje x, por defecto ya hablamos de pixeles
    duartion: 3, // Establecemos la duració, por defecto GSAP sabe que hablamos de segundos
    scrollTrigger: ".square2", // Es el disparador para que inicie la animación. Una vez que al hacer Scroll la pantalla llegue a ver el cuadro azul (.square2), el cuadro Fiusha (.square1) se moverá.
});