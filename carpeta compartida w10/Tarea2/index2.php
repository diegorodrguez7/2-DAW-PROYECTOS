<!DOCTYPE html>

<html>
     <head>
        <link rel="stylesheet" href="estilos2.css">
        <title>Formulario con PHP</title>
     </head>
<body>
<div class="cuadro">
    <h1>FORMULARIO</h1>
    Nombre
        <p>
            <?php 
            $nombre = $_POST["nombre"]; 
            echo $nombre;
            ?>
        </p><br>
        <hr>
    Email
        <p>
            <?php 
            $email = $_POST["email"]; 
            echo $email;
            ?>
        </p><br>
        <hr>
    Edad
        <p>
            <?php 
            $edad = $_POST["edad"]; 
            echo $edad;
            ?>
        </p>
        <hr>
        <a href="index.html" target="_self">Volver</a>
</div>
</body>

</html>