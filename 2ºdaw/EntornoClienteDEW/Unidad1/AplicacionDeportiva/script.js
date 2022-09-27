//IMC
function calcularImc(){
    let p = document.getElementById("resultado");
    let imc;
    let peso;
    let estatura;
    do{
        estatura = window.prompt("¿Cual es tu estatura?");
        peso = window.prompt("¿Cual es tu peso?");
    } while((typeof peso == "number") && (typeof estatura == "number"));
    let operacion= (estatura*estatura);
    //Calcular IMC.
    imc = peso / operacion;
    alert("Tu índice de masa corporal es:" + imc );
    //Calcular tipo IMC según resultado.
    if(imc < 16.00){
        p.setAttribute("style", "color: red");
        document.getElementById("resultado").innerHTML += "Tienes delgadez severa.";
    }else if(imc <= 16.00 || imc <= 16.99){
        p.setAttribute("style", "color: blue");
        document.getElementById("resultado").innerHTML += "Tienes delgadez moderada.";
    }else if(imc <= 17.00 || imc <= 18.49){
        p.setAttribute("style", "color: navy");
        document.getElementById("resultado").innerHTML += "Tienes delgadez aceptable.";
    }else if(imc <= 18.50 || imc <= 24.99){
        p.setAttribute("style", "color: blue");
        document.getElementById("resultado").innerHTML += "Tienes el peso normal.";
    }else if(imc <= 25.00 || imc <= 29.99){
        p.setAttribute("style", "color: gray");
        document.getElementById("resultado").innerHTML += "Tienes sobrepeso.";
    }else if(imc <= 30.00 || imc <= 34.99){
        p.setAttribute("style", "color: violet");
        document.getElementById("resultado").innerHTML += "Tienes obesidad tipo 1.";
    }else if(imc <= 35.00 || imc <= 40.00){
        p.setAttribute("style", "color: brown");
        document.getElementById("resultado").innerHTML += "Tienes obesidad tipo 2.";
    }else if(imc > 40.00){
        p.setAttribute("style", "color: orange");
        document.getElementById("resultado").innerHTML += "Tienes obesidad tipo 3.";
    }
}

//FCM
function calcularFcm(){
    let p = document.getElementById("resultado");
    let fcm;
    let edad;
    let sexo;
    do{
        edad = window.prompt("¿Cual es tu edad?");
        sexo = window.prompt("¿Cual es tu sexo?");
    } while((typeof edad== "number") && (typeof sexo == "string"));

    //Calcular FCM.
    fcm = 220 - (edad * 0.85);
    zona = fcm * 0.6; //Zona 1
    zona2 = fcm * 0.7; //Zona 1
    zona3 = fcm * 0.8; //Zona 1
    zona4 = fcm * 0.9; //Zona 1
    
    alert("Tu frecuencia cardíaca máxima es:" + fcm );

    //Calcular tipo de zona según resultado.
        p.setAttribute("style", "color: red");
        document.getElementById("resultado").innerHTML += "Zona de recuperación entre " ,zona, "y ", zona2, "pulsaciones";
    
        p.setAttribute("style", "color: blue");
        document.getElementById("resultado").innerHTML += "Zona aeróbica entre " ,zona2, "y ", zona3, "pulsaciones";
    
        p.setAttribute("style", "color: navy");
        document.getElementById("resultado").innerHTML += "Zona anaeróbica " ,zona3, "y ", zona4, "pulsaciones";
   
        p.setAttribute("style", "color: blue");
        document.getElementById("resultado").innerHTML += "Zona de línea roja" ,zona4, "pulsaciones";

}

//CE
function calcularCe(){
    
}

