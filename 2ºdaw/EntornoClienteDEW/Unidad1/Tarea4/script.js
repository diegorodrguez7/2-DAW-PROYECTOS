//Funcion 1
function f1() {
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 
  'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 
  'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  var dni, dniLetra, letraFinal;

  //Pedir el número del Dni
  dni = window.prompt("Dame el número de tú DNI: ");
  dniLetra = window.prompt("Dame la letra de tú DNI: ");
  //De minus a mayus.
  dniLetra = dniLetra.toUpperCase();
  //Comprobar que el número debe estar entre 0 y menor que 99999999
  if ((dni => 0) && (dni <= 99999999)) {
    letraFinal = letras[dni%23];
    //Calcular la letra correcta. No entra en el else.
    if (dniLetra == letraFinal) {
      document.getElementById("policianacional").innerHTML = "Su DNI es: " + dni + letraFinal;
    //Si no, sale por aquí, dni y letra erróneo 
    } else{
      alert(dniLetra + " no coincide con: " + letraFinal) ;
    }
  //Si no, sale por aquí, dni y letra erróneo 
  } else {
    window.alert("Dni erróneo.")
  } 
  }

