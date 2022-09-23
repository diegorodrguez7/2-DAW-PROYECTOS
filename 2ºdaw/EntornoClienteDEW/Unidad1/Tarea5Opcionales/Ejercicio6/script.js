// Ejercicio 6: Vamos a hacer una pausa para asimilar el bucle for con un
// ejercicio que no encierra ninguna dificultad si hemos entendido el funcionamiento
// del bucle.
// Se trata de hacer un bucle que escriba en una página web los encabezamientos
// desde <H1> hasta <H6> con un texto que ponga "Encabezado de nivel x".
// Lo que deseamos escribir en una página web mediante JavaScript es lo siguiente:
// <H1>Encabezado de nivel 1</H1>
// <H2>Encabezado de nivel 2</H2>
// <H3>Encabezado de nivel 3</H3>
// <body>
// <script type="text/javascript">
// var N1,N2;
// N1=parseInt(prompt ("Primer número",""));
// N2=parseInt(prompt ("Segundo número",""));
// (N1>N2 ? document.write(N1 + " > " + N2):document.write(N2 + " > " +
// N1));
// </script>
// </body>
// 2
// <H4>Encabezado de nivel 4</H4>
// <H5>Encabezado de nivel 5</H5>
// <H6>Encabezado de nivel 6</H6>
// Para ello tenemos que hacer un bucle que empiece en 1 y termine en 6 y en cada
// iteración escribiremos el encabezado que toca.

function funcionUno() {
  for (i = 1; i <= 6; i++) {
    document.getElementById("escribir" + i).innerHTML = 
    ("Encabezado de nivel " + i);
  }
}
