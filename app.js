//JUEGO NUMERO SECRETO DEL CURSO 2
let numeroSecreto = 0;
let intentos =0;
let listaNumerosSortados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p',`¡Acertaste el número en  ${intentos} ${(intentos===1 )?'vez!':'veces!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    valorCaja=document.querySelector('#valorUsuario').value='';  
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo) + 1;   

    console.log(numeroGenerado);
    console.log(listaNumerosSortados);
// si  ya sorteamos todos los numeros
    if (listaNumerosSortados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
    } else {

    //Si el numero generado ya fue utilizado, se genera otro

        if(listaNumerosSortados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSortados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego(){
    // limpiar la caja 
    limpiarCaja();
    // indicar mensaje de intervalo de numeros 
    //Generar el número aleatorio
    //Inizializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}    
condicionesIniciales();