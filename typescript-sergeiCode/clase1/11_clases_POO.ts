class Pelicula{
    nombre?: string; //Cuando creas una propiedad de una clase TS solicita inicializarla (darle un valor inicial), de lo contrario marcará un error, si no se quiere inicializar la variable, entonces se le debe de poner un signo de "?" pegado al nombre de la propiedad, al hacer esto declaras la propiedad como valor UNDEFINED
    actorPrincipal: string ="Johnny Deep" // Inicalizamos la variable
    protagonistas: string[]=[]; // Se inicializó como un Array vacío
    actores?: string[];
    
    //Creamo un método (función) dentro de la clase
     nombrarActorPrincipal(){
        console.log(`${this.actorPrincipal} es el actor pricipal`) // Usamos la palabra reservada "this" porque está en un bloque fuera del alcance de donde creamos la propiedad de la clase
    }

    proyectarPelicula(){
        console.log(`La película ${this.nombre} está siendo proyectada`)
    }

}

//Creamos un variable de tipo Película (clase creada previamente).
const peli = new Pelicula();
peli.nombrarActorPrincipal(); // Como la variable "peli", es de tipo Pelicula, podemos acceder a sus metodos y propiedades, de hecho al poner un punto, nos va a dar opción a accesar a estos métodos y propiedades que nosotros mismos creamos.  || Como usamos el método "proyectarEnCine" y como valor inicial declaramos "Johnny Deep" como actor principal, por default imprimirá su nombre

console.log(peli); // Al imprimir la variable "peli" de tipo "Pelicula" sin pasarle ningún parámetro, imprimirá un objeto con toda la información de cada una de las propiedades y sus valores que se les dió desde el inicio