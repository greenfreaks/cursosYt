"use strict";
let estudiasteJavacript = true;
// Variable booleana
if (estudiasteJavacript) {
    console.log("Puedes seguir viendo este curso de TypeScript");
}
else {
    console.log("Primero tienes que ver el curso de JavaScript");
}
// Variable number
let chivas = 11; //Estamos diciendo que el tipo de dato podría ser number, null o undefined
let america = 11;
let messi = 1;
let juegaMessi = true;
let palabras = "Me emocioné al ver a Messi";
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi; //Al equipo 1 se le suma el valor de Messi (1)
        motivo = 'Porque juega Messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana el Chivas ${motivo}`);
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana el América");
    console.log(equipo1);
}
jugar(chivas, america, juegaMessi);
