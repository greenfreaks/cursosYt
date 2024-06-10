"use strict";
/*
    * GENÉRICOS: Se define entre sigmos de "<>" y es la forma en la cual una clase puede hacer una especie de elección en el tipo de dato que necesita ser para funcionar correctamente
*/
class Sorteo {
    constructor(nombre // Se le pone PROVATE porque es algo interno de la clase, de lo contrario marca error || Lo que se trae del constructor es algo privado
    ) {
        this.nombre = nombre;
    }
    //Los Getters y Setters se usan para el encapsulamiento y son propios para poder modificar los atributos privados de una clase y evitan que los pueda modficar cualquier persona
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    //PUBLIC: se puede acceder desde fuera de la clase
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteoConNumero = new Sorteo('Mario Sandoval'); //Se escribe el tipo de dato que necesitemos, recordemos que en la clase la declaramos como un dato genérico (que puede cambiar) || En este ejemplo le pasamos un nombre porque es lo que pide el constructor
sorteoConNumero.setTicket(7); //Usamos la función setTicket
console.log(sorteoConNumero.sortear()); //Puedo usar la función sortear(), porque es pública 
let sorteoConString = new Sorteo('Sandy Pao');
sorteoConString.setTicket('A8'); // Aquí debemos de pasar una cadena de texto porque es lo que le dijimos a la instancia que sería
console.log(sorteoConString.sortear());
