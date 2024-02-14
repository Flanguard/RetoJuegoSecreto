let numeroSecreto;
let intentos = 0;
let numeroSorteados = [];
let numeroMaximo = 7;
let cantidad = 4;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario === numeroSecreto);
        if (cantidad==0){
            alert("Intentos fallidos, el juego se reiniciara");
            cantidad = 4;
            numeroSorteados = [];
            reiniciarJuego();
        }
        else{
            if(numeroDeUsuario === numeroSecreto){
                asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`);
                document.getElementById("reiniciar").removeAttribute("disabled");
            } else {
                //El usuario no acerto
                cantidad = cantidad - 1;
                if (numeroDeUsuario > numeroSecreto){
                    asignarTextoElemento('p', `El numero secreto es menor. Intentos restantes ${cantidad}`);
                }else{
                    asignarTextoElemento('p', `El numero secreto es mayor. Intentos restantes ${cantidad}`);
                }
                limpiarCaja();
                intentos++;
                
        }
    }
    
}

function limpiarCaja(){
   document.getElementById("valorUsuario").value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numeroSorteados);
    if(numeroSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
        alert("El juego se reiniciara");
        numeroSorteados = [];
        reiniciarJuego();
    }else{
        if(numeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
         }else{
             numeroSorteados.push(numeroGenerado);
             return numeroGenerado;
         }
    } 
}   

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento("p", `Indique un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();