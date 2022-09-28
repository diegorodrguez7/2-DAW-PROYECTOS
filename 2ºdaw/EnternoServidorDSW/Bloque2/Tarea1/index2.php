<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="../../Paginaweb/Css/php.css">
</head>
<body>

<?php




$numero=$_POST["numero"];

echo "
    <div>
        <p>";
if($numero%2==0){
    echo "El numero ".$numero." es par";
}else{
    echo "El numero ".$numero." es impar.";
}
echo    "</p> 
    </div>"; 
?>

</body>
</html>