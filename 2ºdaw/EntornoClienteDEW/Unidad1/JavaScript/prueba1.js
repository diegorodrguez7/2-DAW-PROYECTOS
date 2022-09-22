//Comentario de código
/*Comentario de código*/

//Variables
const pi = 3.14;
var edad = 18;
let nombre = "Bob Esponja";

//Se puede declarar y luego darle el valor y viceversa.
edad = 18;
var edad;
let edad;
edad = 18;

//Tipos de datos.
let personajes = ['Bob Esponja', 'Calamardo', 'Patricio'];
console.log(personajes[0]);        // Muestra por consola: Bob Esponja

let personaje = { nombre: 'Bob Esponja', edad: 5 };
console.log(personaje.nombre);      // Muestra por consola: Bob Esponja
console.log(personaje[nombre]);     // Muestra por consola: Bob Esponja

//Conversiones de tipos de datos.
console.log(4 + 7);    // Muestra por consola: 11
console.log(4 + '7');     // Muestra por consola: 47 (como cadena)
console.log(1 + 2 + '3');     // Muestra por consola: 33 (como cadena)
console.log(parseInt('34'));              // Muestra por consola: 34
console.log(parseInt('89.76'));         // Muestra por consola: 89
console.log(parseFloat('34'));          // Muestra por consola: 34
console.log(parseFloat('3.14'));       // Muestra por consola: 3.14
console.log(1 + 2 + parseInt('3'));    // Muestra por consola: 6
console.log('' + 2020);        // Muestra por consola: 2020 (como cadena);