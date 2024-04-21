
let intentos = 6;
let diccionario = ['LENTE', 'ARBOL', 'RATON', 'CIELO'];
let palabra = seleccionarPalabra(diccionario);
console.log(palabra);
const BOTON = document.getElementById('guess-button');
const BOTON2 = document.getElementById('try-again');
const INTENTO = document.getElementById('guess-input');
const BOTONAYUDA = document.getElementById('boton-ayuda');
const BOTONCERRAR = document.getElementById('boton-Cerrar');

BOTON.addEventListener('click', () => {
    intentar();
    INTENTO.value = '';
})
BOTON2.addEventListener('click', () => {
    location.reload();
})
BOTONAYUDA.addEventListener('click', () => {
    document.getElementById(("informacion")).style.display = "block";
})
BOTONCERRAR.addEventListener('click', () => {
    document.getElementById(("informacion")).style.display = "none";
})
INTENTO.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        intentar();
        INTENTO.value = '';
    }
})

function seleccionarPalabra(arreglo) {
    let cantElementos = arreglo.length;
    const palabraAleatoria = arreglo[Math.floor(Math.random() * cantElementos)];
    return palabraAleatoria;
}
function leerIntento() {
    let intento = document.getElementById('guess-input').value;
    return intento.toUpperCase();
}

function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO.length < 5) {
        alert("Debes ingresar al menos 5 letras.");
        return;
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if (INTENTO === palabra) {
        terminar("<h2> ¡GANASTE! 😃🎉 </h2>");
        document.getElementById(('guess-button')).style.display = "none";
        document.getElementById(('try-again')).style.display = "block";
        return INTENTO
    }
    if (intentos == 0) {
        terminar("<h2> ¡PERDISTE! 😔 </h2>")
        //Desaparece intentar y aparece la opcion volver a intentar
        document.getElementById(('guess-button')).style.display = "none";
        document.getElementById(('try-again')).style.display = "block";
    }
    return
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

