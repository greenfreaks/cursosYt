let estudiasteJavacript: boolean = true;
// Variable booleana

if(estudiasteJavacript){
    console.log("Puedes seguir viendo este curso de TypeScript")
}else{
 console.log("Primero tienes que ver el curso de JavaScript")
}

// Variable number
let chivas: number | null | undefined = 11; //Estamos diciendo que el tipo de dato podría ser number, null o undefined
let america: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

let palabras: string = "Me emocioné al ver a Messi"

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean):void{ // La palabra reservada "void" se usa para indicar que no se va a devolver nada
    let motivo: string = '';
    if(juegaMessi) {
        equipo1 += messi; //Al equipo 1 se le suma el valor de Messi (1)
        motivo = 'Porque juega Messi';
    } 
    if(equipo1 > equipo2) console.log(`Gana el Chivas ${motivo}`)
    if(equipo1 == equipo2) console.log("Empatan")
    if(equipo1 < equipo2) console.log("Gana el América") 
    console.log(equipo1);
} 

jugar(chivas, america, juegaMessi);

