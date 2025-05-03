const saludar = require('./functions');

const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
};


const personaJson = JSON.stringify(persona);

console.log(personaJson);

console.log(saludar("Juan"));