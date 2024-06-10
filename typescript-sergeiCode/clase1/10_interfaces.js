"use strict";
let dev1 = {
    nombre: 'Juliana',
    tecnologias: ['TypeScript', '.Net'],
    tomarMate: false,
};
let dev2 = {
    nombre: 'Sandra',
    tecnologias: ['C#', 'C++'],
    tomarMate: true,
    apellido: 'Flores',
    recibido: false,
};
function EnviarCurriculum(programador) {
    console.log(`Este CV es de ${programador.nombre}`); // Si queremos pasar el argumento de "apellido", va a marcar un error porque el parametro que estamos solicitando es de tipo ProgramadorInterface, y el argumento "apellido" no pertenece a ProgramadorInterface
}
EnviarCurriculum(dev1);
