<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="estilos2.css">
    <title>Login con PHP</title>
</head>
<body>
    <div class="cuadro">
        <?php
        $numero = $_POST["numero"];
        if (($numero % 2) == 0) {
            echo $numero. " --> Es un número par";
        } else {
            echo $numero. " --> Es un número impar";
        }
        ?>
    </div>
    <a href="index.html" target="_self">Volver</a>
</body>
</html>