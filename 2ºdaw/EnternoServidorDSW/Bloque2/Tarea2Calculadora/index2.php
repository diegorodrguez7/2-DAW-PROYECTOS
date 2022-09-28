<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="estilos2.css">
    <title>CALCULADORA</title>
</head>

<body>
    <div class="cuadro">
        <?php
        $numero = $_POST["numero"];
        $numeroDos = $_POST["numero2"];
        $select = $_POST["seleccion"];
        switch ($select) {
            case "Suma(+)":
                echo $numero. "+" .$numeroDos. "=" .$numero + $numeroDos;
                break;
            case "Resta(-)":
                echo $numero. "-" .$numeroDos. "=" .$numero - $numeroDos;
                break;
            case "Multiplicacion(*)":
                echo $numero. "*" .$numeroDos. "=" .$numero * $numeroDos;
                break;
            case "División(/)":
                if ($numeroDos == 0) {
                    echo "No se puede dividir por 0 por que da Infinito.";
                } else {
                    echo $numero. "/" .$numeroDos. "=" .$numero / $numeroDos;
                }
                break;
            case "Módulo(%)":
                echo $numero. "%" .$numeroDos. "=" .$numero % $numeroDos;
                break;
            case "X":
                echo "No has seleccionado ninguna operación.";
                break;
        }
        ?>
    </div>
    <a href="index.html" target="_self">Volver</a>
</body>

</html>