//Ejercicio 3: Vamos a realizar una pequeña página que pida al usuario un
//par de números y mediante una condicional le digamos si el primero es mayor que
//el segundo o es menor o iguales. Es importante recordar que hemos de cambiar el
//tipo de string a int usando la función parseInt(); 

function funcionUno(){
    var num1 = parseInt(window.prompt("Dame un numero: "));
    var num2 = parseInt(window.prompt("Dame un numero: "));
    
    if (num1 > num2) {
        window.alert("El numero 1: " + num1 + " es mayor que el numero 2: " + num2);
      } else if (num1 === num2) {
        window.alert("El numero 1: " + num1 + " es igual al numero 2: " + num2);
      } else {
        window.alert("El numero 1: " + num1 + " es menor que el numero 2: " + num2);
      }
}