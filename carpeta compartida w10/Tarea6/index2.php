<!DOCTYPE html>

<html>
     <head>
        <link rel="stylesheet" href="estilos2.css">
        <title>ejemplo Inventado. 5.
             
        </title>
     </head>
<body>
<div class="cuadro">
            <?php  
            $var1 = "Desarrollo de Aplicaciones Web."; 
            $var2 = "Desarrollo en Entorno Servidor."; 
            function prueba(){
                global $var1, $var2;
                echo "Estudio el ciclo de $var1 <br> y mi asignatura favorita es $var2.";
            }
            prueba();
            ?>
        <a href="index.html" target="_self">Volver</a>
</div>
</body>

</html>