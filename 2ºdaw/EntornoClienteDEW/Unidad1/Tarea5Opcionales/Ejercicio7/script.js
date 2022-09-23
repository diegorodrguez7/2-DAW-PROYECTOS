// Ejercicio 7: Veamos el mismo ejemplo anterior del bucle for, pero con un
// while. 

function funcionUno(){
    var i = 1;
    while (i <= 6) {
        document.getElementById("escribir" + i).innerHTML = 
        ("Encabezado de nivel " + i);
        i++;
      }
}