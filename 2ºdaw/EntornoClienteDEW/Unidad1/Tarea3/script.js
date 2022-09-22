//Funcion 1
function tablamultiplicar() {
  var tabla = document.getElementById("tabla");
  var tablaaux = "";
  var numero1 = 7;
  for (var i = 0; i <= 10; i++) {
    multiplicacion = numero1 * i;
    tablaaux += numero1 + "x" + i + "=" + multiplicacion + "<br>";
    tabla.innerHTML = tablaaux;
  }
}
//Funcion 2
function tablasumar() {
  var tabla = document.getElementById("tabladel8");
  var tablaaux = "";
  var i = 0;
  var numero = 8;
  while (i < 10) {
    tablaaux += numero + "+" + i + "=" + (numero + i) + "<br>";
    tabla.innerHTML = tablaaux;
    i++;
  }
}
//Funcion 3
function tabladividir() {
    var tabla = document.getElementById("tabladel9");
    var tablaaux = "";
    var i = 0;
    var numero = 9;
    do{
      tablaaux += numero + "/" + i + "=" + (numero / i) + "<br>";
      tabla.innerHTML = tablaaux;
      i++;
    }while(i < 10);
  }
//Funcion 4
function bits(){
    var tablaaux = "";
    var tabla = document.getElementById("bits1");
        tablaaux += ("125 / 8 = " + (125 >> 3) + '<br>');
    var tabla = document.getElementById("bits2");
        tablaaux +=("40 x 4 = " + (40 << 2) + '<br>'); 
    var tabla = document.getElementById("bits3");
        tablaaux +=("25 / 2 = " + (25 >> 1) + '<br>');
    var tabla = document.getElementById("bits4");
        tablaaux +=("10 x 16 = " + (10 << 4) + '<br>'); 
    tabla.innerHTML = tablaaux;
}