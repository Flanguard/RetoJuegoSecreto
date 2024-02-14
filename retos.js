let listaNumeros = [7, 4, 11, 8];
let listaNumeros2 = [4, 3, 9, 5];
let suma;
let listaAzar = ["Juan", "si", "no", "Amaury", 3, "Korsakov", true, "hola mundo"];
let boleano = true;
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"]
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");

function elementosDeLista(){
    for(let i = 0; i<lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }
}
elementosDeLista();
function elementosDeListaInversa(){
    for(let i = lenguajesDeProgramacion.length-1; i>=0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}
elementosDeListaInversa();
function promedio(){
    suma = 0;
    for(let i = 0; i<listaNumeros.length; i++){
       suma+=listaNumeros[i];
    } 
    return console.log(`El promedio es ${suma/listaNumeros.length}`);
}
promedio();
function menorMayor(){
    let menor = listaNumeros[0];
    let mayor = listaNumeros[0];
    for(let i = 0; i<listaNumeros.length; i++){
        if(listaNumeros[i]>mayor){
            mayor=listaNumeros[i];
        }
        if(menor>listaNumeros[i]){
            menor=listaNumeros[i];
        }
    }
    console.log(`el numero mayor es: ${mayor}`);
    console.log(`el numero menor es: ${menor}`);
}
menorMayor();
function sumaLista(){
    suma = 0;
    for(let i = 0; i<listaNumeros.length; i++){
       suma+=listaNumeros[i];
    } 
    return console.log(`la suma es ${suma}`);
}
sumaLista();

function encontrarIndexado(encontrado){
    if (listaAzar.includes(encontrado)){
        for(let i = 0; i<=listaAzar.length-1; i++){
           if(listaAzar[i] == encontrado){
            return console.log(`Su elemento ${encontrado} coincide con el elemento de la lista en la posicion ${i}`); 
           }
        }
    }else{
        return console.log(`Su elemento ${encontrado} esta en la posicion ${-1}, osea, no se encuentra en la lista`)
    }
}
let encontrar = encontrarIndexado(prompt("Buscar en la lista"));;

function sumaDosListas(listaUno, ListaDos){
    let nuevaLista=[];
    for(let i = 0; i < listaUno.length; i++){
        nuevaLista.push(listaUno[i]+ListaDos[i]);
    }
    return nuevaLista;
}
let crearListaNueva = sumaDosListas(listaNumeros, listaNumeros2);
console.log(crearListaNueva);

function cuadrados(listaUno){
    let nuevaLista=[];
    for(let i = 0; i < listaUno.length; i++){
        nuevaLista.push(listaUno[i]**2);
    }
    return nuevaLista;
}
let descubrirCuadrado = cuadrados(listaNumeros);
console.log(descubrirCuadrado);