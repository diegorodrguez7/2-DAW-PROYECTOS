//Ejercicio 4: Veamos otro ejemplo sencillo que nos ilustra sobre el manejo
//del if. Este script nos devuelve “hola” si no introducimos nada o aquello que hemos
//escrito.

function funcionUno() {
  var cadena = window.prompt("Introduce algo: ");
  if(typeof cadena != "string" && cadena.length == 0){
    window.alert("Hola");
  }else{
    window.alert(cadena);
  }
}
