//Funcion 1
const saludar = () => {
    alert('LO SIENTO, NO NOS QUEDAN HAMBURGUESAS.');
}

//Funcion 2
function comer() {
    let personas;
    do{
        if(isNaN(personas)){
            window.alert('Introduce solamente un número');
        }
        personas = window.prompt("¿Cuántas personas van a comer?", "Sólo tenemos mesas para 6 personas máximo");
    }
    while(isNaN(personas));
        document.getElementById("ingrediente1").innerHTML = "Carne de cerdo, pollo: "+personas*300+"gr.";
        document.getElementById("ingrediente2").innerHTML = ""+personas*2+" panes.";
        document.getElementById("ingrediente3").innerHTML = "Lechugas: "+personas*10+"gr.";
        document.getElementById("ingrediente4").innerHTML = "Tomates: "+personas*20+"gr.";
        document.getElementById("ingrediente5").innerHTML = "Mahonesa: "+personas*1+" cucharadas.";
        document.getElementById("ingrediente6").innerHTML = ""+personas*2+" lonchas de queso chedar.";
        document.getElementById("ingrediente7").innerHTML = ""+personas*30+" patatas fritas.";
}

const myTimeout = setTimeout(myGreeting, 5000);

function myStopFunction() {
  clearTimeout(myTimeout);
}

