// gsap.to() // La animación empiexa por el inicio
// gsap.from() // La animación empiexa por el final


// gsap.to('.cuadrado_1',{
//     duration: 5,
//     x: 600,
//     delay: 1,
//     borderRadius: '50%', //Podemos usar cualquier propiedad y valores de CSS, con la condición de que las propiedades las escribamos con camelCase
//     ease: 'bounce.out' //Se le da una animación para finalizar o iniciar, en este caso, hace un pequeño rebote
// })

const tl = gsap.timeline({
    // repeat: -1, // Se repite de manera infinita
    repeat: 1, // Se repite 1 vez, si el valor fuera 1, se repetiría 2 veces y así sucesivamente
    yoyo: true // En caso de repetir la animación más de una vez, una vez que finaliza la primera repetición, con esta propiedad, la animación vuelve a su estado inicial de manera suave y no brusca y posteriormente se repite
})

tl.from('.cuadrado_1', {
    duration: 1.5,
    scale: 2,
    x: 500
})
tl.to('.cuadrado_2', {
    duration: 1.5,
    scale: 0.3,
    x: 500
},
'-=1.5' // Se le quita el Delay 
)
tl.from('.cuadrado_3', {
    duration: 1.5,
    borderRadius: 50,
    x: 500,
    ease: "bounce.in",
    // ease: "bounce.out // Si hacemos esto al igual que en CSS, esta animación pisa a la anterior
})
tl.to('.cuadrado_4', {
    duration: 1.5,
    rotate: 360,
    x: 500
})