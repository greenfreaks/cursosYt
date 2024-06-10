"use strict";
let disney; // Notemos que no le definimos un tipo de dato
disney = "Star Wars y Marvel"; // TypeScript por el valor que le dimos asume automáticamente que se trata de un String
console.log(disney); // Los métodos que nos arrojará ahora es un String
disney = 15000000; // Ahora TypeScript asume automáticamente que el tipo de dato es un NUMBER
console.log(disney); //Ahora los métodos que nos arrojará corresponden al tipo de dato NUMBER
disney = true; // Se asume como Booleano
console.log(disney);
