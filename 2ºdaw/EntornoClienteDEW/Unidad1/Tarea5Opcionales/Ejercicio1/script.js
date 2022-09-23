//Ejercicio 1: Realiza una página en la que crees dos variables “string”, las
//“sumes” e imprimas el resultado.

function funcionUno(){
    var cadena = "Hola, ";
    var cadenaDos = "buenos días.";
    cadena += cadenaDos;
    document.getElementById("cadena").innerHTML = cadena;
}