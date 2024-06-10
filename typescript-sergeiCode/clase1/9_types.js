"use strict";
/* TYPES
    *Se puede usar para muchas cosas, pero una de ellas es para TIPAR OBJETOS
*/
let programador2 = {
    nombre: 'Mario Sandoval',
    tecnologias: ['HTML', 'CSS', 'JS', 'React'],
    tomarMate: true,
};
let programador3 = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    // Como se puede observar, aquí no se encuentra el argumento "tomarMate", pero no marca error porque al momento de crear el TYPE, definimos este argumento como NO OBLIGATORIO
};
let programador4 = {
    nombre: 'Juan',
    tecnologias: ['PHP', 'C#'],
    tomarMate: null
};
