/* TYPES 
    *Se puede usar para muchas cosas, pero una de ellas es para TIPAR OBJETOS
*/

type Programador = { // Creamos un tipo de objeto personalizado en el que a cada argumento se de definirá su tipo de dato
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null // El signo de interrogación define ese argumento como NO OBLIGATORIO, por lo que no habrá problema si no lo definimos en un futuro objeto || Además de tipo boolean, este dato podría ser un tipo null
}

let programador2: Programador  = { // Como tipo de dato se le asignará el TYPE personalizado que creamos previamente || Debe de tener exactamente los mismos argumentos y los mismos tipos de dato del TYPE que le asignamos
    nombre: 'Mario Sandoval',
    tecnologias: ['HTML', 'CSS', 'JS', 'React'],
    tomarMate: true,
}

let programador3: Programador ={
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    // Como se puede observar, aquí no se encuentra el argumento "tomarMate", pero no marca error porque al momento de crear el TYPE, definimos este argumento como NO OBLIGATORIO
}

let programador4: Programador ={
    nombre: 'Juan',
    tecnologias: ['PHP', 'C#'],
    tomarMate: null
}
