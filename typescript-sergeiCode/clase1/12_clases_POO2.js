"use strict";
class Pelicula2 {
    //El constructor es una función que básicamente sobre escribe los datos que están por defecto en nuestra clase pero en una sola instancia
    // Poedemos usarlo para recibir valores a través de parámetros que el usuario manda
    constructor(nombre, protas, actores) {
        //Los que tienen la palabra <<this>> se refieren a los atributos de la clase, no a los parámetros del constructor
        // Los parámetros del constructor pueden tener nombres diferentes a los atributos de la clase, pero estos agarrarán el valor de los atributos si los referenciamos correctamente con la palabra <<this>>
        this.nombre = nombre,
            this.protagonistas = protas,
            this.actores = actores;
    }
}
//Podemos crear varios objetos de la clase Pelicula2
const pelicula = new Pelicula2('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling']);
const pelicula2 = new Pelicula2('Batman el caballero de la noche', ['Batman', 'El Guasón'], ['Christian Bale', 'Heath Ledger']);
console.log(pelicula);
console.log(pelicula2);
