<!DOCTYPE html>

<html>
     <head>
        <link rel="stylesheet" href="estilos2.css">
        <title>Formulario con PHP</title>
     </head>
<body>
<div class="cuadro">
    <h1>COLOR ELEGIDO</h1>
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
    Sueldo
        <p>
            <?php 
            $sueldo = $_POST["sueldo"];
            echo $sueldo;
            ?>
        </p><br>
        <hr>
    SueldoIPC
        <p>
            <?php 
            $ipc= $_POST["ipc"];
            $sueldo = $_POST["sueldo"];
            echo $sueldo + $sueldo * $ipc / 100;
            ?>
        </p><br>
        <hr>
        <a href="index.html" target="_self">Volver</a>
</div>
</body>

</html>