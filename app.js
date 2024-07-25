let numSecret = 0;
let numIntentos = 0;
let listNumSorte = [];
let numMaximo = 10;


condicionesInciales();

function generarNumSecret() {
    let numGenerado = Math.floor(Math.random() * numMaximo) + 1;

    if (listNumSorte.includes(numGenerado)) {
        if (listNumSorte.length == numMaximo) {
            asignarTexto('p', `Todos los números ya fueron sorteados. Reinicie el juego para continuar`)
            document.querySelector('#btnIntentar').setAttribute('disabled', 'true');
            document.getElementById('reloadIntentos').removeAttribute('disabled');
        } else {
            return generarNumSecret();
        }
    } else {
        listNumSorte.push(numGenerado);
        return numGenerado;
    }
}

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function vaciarEntrada() {
    document.querySelector('#varlorUsuario').value = '';
}

function verificarIntento() {
    let numInput = parseInt(document.getElementById('varlorUsuario').value);
    if (numInput === numSecret) {
        asignarTexto('p', `MUY BIEN. Adivinaste el número en ${numIntentos} ${(numIntentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('btnIntentar').setAttribute('disabled', 'true');
    }
    else {
        if (numInput > numSecret) {
            asignarTexto('p', 'El número es menor')
        } else {
            asignarTexto('p', 'El número es mayor')
        }
        numIntentos++;
        vaciarEntrada();
    }
    return;
}

function reiniciarGame() {
    vaciarEntrada();
    condicionesInciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function reiniciarIntentos() {
    listNumSorte = [];
    condicionesInciales()
    document.querySelector('#reloadIntentos').setAttribute('disabled', 'true');
    document.querySelector('#btnIntentar').removeAttribute('disabled');
}

function condicionesInciales() {
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', `Ingreso un número del 1 al ${numMaximo}`);
    document.getElementById('btnIntentar').removeAttribute('disabled');
    numSecret = generarNumSecret();
    numIntentos = 1;
}
