//Ejercicio 2: La función typeof() devuelve el tipo de una variable. Hacer un
//script que te diga el tipo de un par de variables, sin inicializarlas y posteriormente
//con un valor (string, number y boolean).

function funcionUno(){
    var cadena;
    var numero;
    var booleano;
    document.getElementById("variable1").innerHTML = "Sin inicializar: "+typeof(cadena);
    document.getElementById("variable2").innerHTML = "Sin inicializar: "+typeof(numero);
    document.getElementById("variable3").innerHTML = "Sin inicializar: "+typeof(booleano);
    var cadena = "Cadena de caracteres.";
    var numero = 1;
    var booleano = true;
    document.getElementById("variable4").innerHTML = "Inicializada: "+typeof(cadena);
    document.getElementById("variable5").innerHTML = "Inicializada: "+typeof(numero);
    document.getElementById("variable6").innerHTML = "Inicializada: "+typeof(booleano);
}