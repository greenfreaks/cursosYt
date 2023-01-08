gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.create({ // Se usa cuado un elemento va a ser su propio disparador de sus animaciones
    trigger: ".box",
    start: "top 80%",
    end: "top 50%",
    markers: true,
    toggleClass: "box-red", // Esta clase se le añadirá al elmento disparador (.box)
    //Al usar ScrollTrigger.cretare({}) podemos tener acceso a los toggleActions por separado, y a su vez podemos ejecutar funciones para cada acción
    onEnter: () => console.log("enter!"),
    onLeave: () => console.log("leave!"),
    onEnterBack: () => console.log("enterBack!"),
    onLeaveBack: () => console.log("leaveBack!"),
})
// Una de las cosas que podríamos hacer con el ejemplo anterior es cambiar el aspecto del navbar al llegar a cierta parte de la pantalla


ScrollTrigger.create({
    trigger: ".box2",
    start: "top 80%",
    end: "top 50%",
    markers: true,
    toggleClass: "box-red",
    onUpdate: (self) => console.log(self) // Lo que hace esta fucnión es marcar en consola cada actualización de la animación una vez que inicia
})

