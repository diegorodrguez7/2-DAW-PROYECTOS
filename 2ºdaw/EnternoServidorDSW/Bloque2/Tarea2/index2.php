<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="../../Paginaweb/Css/php.css">
</head>
<body>

<?php

$numero=$_POST["numero"];
$numero2=$_POST["numero2"];
$operaciones=$_POST["operaciones"];
echo "
    <div>
        <p>";
switch ($operaciones) {
        case 'sumar':
        echo"La suma de ".$numero."+".$numero2. " es = ".$numero+$numero2;
        break;

        case 'restar':
            echo"La resta de ".$numero."-".$numero2. " es = ".$numero-$numero2;
         break;

         case 'multiplicar':
            echo"La multiplicacion de ".$numero."*".$numero2. " es = ".$numero*$numero2;
         break;

         case 'dividir':
            if($numero2==0){
                echo "No se puede dividir por 0.";
            }else{
                echo"La division de ".$numero."/".$numero2. " es = ".$numero/$numero2;
            }
         break;

         case 'modulo':
            echo"El modulo de ".$numero."%".$numero2. " es = ".$numero*$numero2;
         break;        
   
}
echo    "</p> 
    </div>"; 

?>

</body>
</html>