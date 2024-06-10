/*
    * GENÉRICOS: Se define entre sigmos de "<>" y es la forma en la cual una clase puede hacer una especie de elección en el tipo de dato que necesita ser para funcionar correctamente
*/
class Sorteo<T>{
    //PIVATE: no se puede acceder desde afuera de la clase
    private ticket?: T; //Definimos que es una variable genérica, puedo hacer que este parámetro sea de tipo que yo quiera desde afuera

    constructor(
        private nombre: string // Se le pone PROVATE porque es algo interno de la clase, de lo contrario marca error || Lo que se trae del constructor es algo privado
    ) { }

    //Los Getters y Setters se usan para el encapsulamiento y son propios para poder modificar los atributos privados de una clase y evitan que los pueda modficar cualquier persona
    setTicket(ticket: T) {
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    //PUBLIC: se puede acceder desde fuera de la clase
    public sortear(): string{ 
        return `Para ${this.nombre} el ticket es ${this.ticket}`; 
    }
}

let sorteoConNumero = new Sorteo<number>('Mario Sandoval'); //Se escribe el tipo de dato que necesitemos, recordemos que en la clase la declaramos como un dato genérico (que puede cambiar) || En este ejemplo le pasamos un nombre porque es lo que pide el constructor
sorteoConNumero.setTicket(7); //Usamos la función setTicket
console.log(sorteoConNumero.sortear()); //Puedo usar la función sortear(), porque es pública 

let sorteoConString = new Sorteo<string>('Sandy Pao');
sorteoConString.setTicket('A8'); // Aquí debemos de pasar una cadena de texto porque es lo que le dijimos a la instancia que sería
console.log(sorteoConString.sortear());