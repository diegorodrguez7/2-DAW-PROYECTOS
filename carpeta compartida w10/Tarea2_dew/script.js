//Funcion 1, botón de hacer pedido.
const saludar = () => {
    swal('LO SIENTO, NO NOS QUEDAN HAMBURGUESAS.', 'VUELVA MAS TARDE','error', {
        buttons: ["DE ACUERDO", "RECLAMAR"]
    });
}

//Funcion 2, se ejecuta en toda el cuerpo. Nada más recargar la página.
function aviso(){
    let personas;
    do {
        setTimeout(()=>{
            swal("Aqui tiene su resultado.");
        }, 1000);
        personas = window.prompt("¿Cuántas personas van a comer?", "");
    } while (isNaN(personas) || personas <= 0);

    var carne = personas * 300;
    if(carne >= 1000){
        carne = carne/1000;
        document.getElementById("ingrediente1").innerHTML = "Carne de cerdo: "+carne+"Kg.";
    }else{
        document.getElementById("ingrediente1").innerHTML = "Carne de cerdo: "+personas*300+"gr.";
    }
    document.getElementById("ingrediente2").innerHTML = "Pan brioche: "+personas*1+" pan/es.";
    var lechuga = personas * 10;
    if(lechuga >= 1000){
        lechuga = lechuga/1000;
        document.getElementById("ingrediente3").innerHTML = "Lechuga: "+lechuga+"Kg.";
    }else{
        document.getElementById("ingrediente3").innerHTML = "Lechuga: "+personas*10+"gr.";
    }
    document.getElementById("ingrediente4").innerHTML = "Tomate: "+personas*10+"gr.";
    document.getElementById("ingrediente5").innerHTML = "Mahonesa: "+personas*1+" cucharada/s.";
    document.getElementById("ingrediente6").innerHTML = "Queso chedar: "+personas*2+" lonchas.";
    document.getElementById("ingrediente7").innerHTML = "Patatas fritas de bolsa: "+personas*150+"gr.";
}
