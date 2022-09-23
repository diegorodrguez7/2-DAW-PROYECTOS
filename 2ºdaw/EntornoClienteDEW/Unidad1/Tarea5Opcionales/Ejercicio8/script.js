// Ejercicio 8: Realizar un programa que solicite al usuario un valor, y
// presente en pantalla la cuenta atrás y luego la cuenta hacia delante.
//Hacerlo con un bucle for.

function funcionUno() {
  var num = parseInt(window.prompt("Dame un número: "));
  for (i = 0; i <= (num); i++) {
    document.getElementById("escribir").innerHTML += i + "<br>";
  }
  for (i = num; i >= 0; i--) {
    document.getElementById("escribir").innerHTML += i + "<br>";
  }
}
