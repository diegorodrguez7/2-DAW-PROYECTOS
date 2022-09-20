<!DOCTYPE html>

<html>
     <head>
        <link rel="stylesheet" href="estilos2.css">
        <title>Formulario con PHP</title>
     </head>
<body>
<div class="cuadro">
            <?php 
            $color = $_POST["aaa"]; 
            echo "<body style=\"background-color: $color\">";
            ?>
        <a href="index.html" target="_self">Volver</a>
</div>
</body>

</html>