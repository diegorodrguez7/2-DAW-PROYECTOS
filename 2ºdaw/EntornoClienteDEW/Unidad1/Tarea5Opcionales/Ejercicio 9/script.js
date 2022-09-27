//Ejercicio 9: El mismo anterior pero con bucle while.

function funcionUno() {

  var num = parseInt(window.prompt("Dame un número: "));
  var i = 0;
  while (i <= num) {
    document.getElementById("escribir").innerHTML += i + "<br>";
    i++;
  }
  var i = num;
  while (i >= 0) {
    document.getElementById("escribir").innerHTML += i + "<br>";
    i--;
  }


}
