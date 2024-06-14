//Variables
const botonReset = document.getElementById('botonReset');
const botonInvertir = document.getElementById('botonInvertir');
const botonPorcentaje = document.getElementById('botonPorcentaje');
const botonDividir = document.getElementById('botonDividir');
const botonMultiplicar = document.getElementById('botonMultiplicar');
const botonRestar = document.getElementById('botonRestar');
const botonSumar = document.getElementById('botonSumar');
const botonIgual = document.getElementById('botonIgual');
const botonComa = document.getElementById('botonComa');
const botonCero = document.getElementById('botonCero');
const botonUno = document.getElementById('botonUno');
const botonDos = document.getElementById('botonDos');
const botonTres = document.getElementById('botonTres');
const botonCuatro = document.getElementById('botonCuatro');
const botonCinco = document.getElementById('botonCinco');
const botonSeis = document.getElementById('botonSeis');
const botonSiete = document.getElementById('botonSiete');
const botonOcho = document.getElementById('botonOcho');
const botonNueve = document.getElementById('botonNueve');
const pantalla = document.getElementById('pantalla');
let contenidoPantalla = 0;
let valor1 = null;
let valor2 = null;
let operacion = null;
actualizarPantalla();

//Eventos

const botonesNumericos = [botonCero, botonUno, botonDos, botonTres, botonCuatro, botonCinco, botonSeis, botonSiete, botonOcho, botonNueve];
botonesNumericos.forEach(boton => {
    boton.addEventListener('click', () => {
        if(contenidoPantalla == 0){
            contenidoPantalla = '';
            contenidoPantalla += boton.textContent;
            actualizarPantalla();
        }else{
            contenidoPantalla += boton.textContent;
            actualizarPantalla();
        }
    });
});
botonSumar.addEventListener('click', ()=> {
    valor1 = parseFloat(contenidoPantalla);
    operacion = 'suma';
    contenidoPantalla = '';
    botonSumar.classList.add('seleccion')
});
botonRestar.addEventListener('click', ()=> {
    valor1 = parseFloat(contenidoPantalla);
    operacion = 'resta';
    contenidoPantalla = '';
    botonRestar.classList.add('seleccion')
});
botonMultiplicar.addEventListener('click', ()=> {
    valor1 = parseFloat(contenidoPantalla);
    operacion = 'multiplicar';
    contenidoPantalla = '';
    botonMultiplicar.classList.add('seleccion')
});
botonDividir.addEventListener('click', ()=> {
    valor1 = parseFloat(contenidoPantalla);
    operacion = 'dividir';
    contenidoPantalla = '';
    botonDividir.classList.add('seleccion')
});
botonInvertir.addEventListener('click', ()=> {
    contenidoPantalla = contenidoPantalla*(-1);
    actualizarPantalla();
});
botonComa.addEventListener('click', ()=> {
    if (!contenidoPantalla.includes('.')) {
        contenidoPantalla += '.';
        actualizarPantalla();
    }
});
botonReset.addEventListener('click', ()=> {
    contenidoPantalla = 0;
    valor1 = null;
    valor2 = null;
    operacion = null;
    actualizarPantalla();
});
botonPorcentaje.addEventListener('click', () => {
    if (contenidoPantalla !== '' && valor1 !== null) {
        valor2 = parseFloat(contenidoPantalla) / 100 * valor1;
        contenidoPantalla = valor2.toString();
        actualizarPantalla();
    } else if (contenidoPantalla !== '') {
        contenidoPantalla = (parseFloat(contenidoPantalla) / 100).toString();
        actualizarPantalla();
    }
});
botonIgual.addEventListener('click', ()=> {
    valor2 = parseFloat(contenidoPantalla);
    switch(operacion){
        case 'suma':
            contenidoPantalla = valor1 + valor2;
            break;
        case 'resta':
            contenidoPantalla = valor1 - valor2;
            break;
        case 'multiplicar':
            contenidoPantalla = valor1 * valor2;
            break;
        case 'dividir':
            contenidoPantalla = valor1 / valor2;
            break;
    }
    actualizarPantalla();
    operacion = null;
    valor1 = null;
    valor2 = null;
    botonSumar.classList.remove('seleccion');
    botonRestar.classList.remove('seleccion')
    botonMultiplicar.classList.remove('seleccion')
    botonDividir.classList.remove('seleccion')
});



//funciones

function actualizarPantalla(){
    pantalla.textContent = contenidoPantalla;

    // Ajustar el tamaño de la fuente dinámicamente si el contenido es más ancho que el área visible
    if (pantalla.scrollWidth > pantalla.clientWidth) {
        const scaleFactor = pantalla.clientWidth / pantalla.scrollWidth;
        const fontSize = parseFloat(window.getComputedStyle(pantalla).fontSize);
        pantalla.style.fontSize = `${fontSize * scaleFactor}px`;
    } else {
        pantalla.style.fontSize = '3em'; // Tamaño de fuente inicial si el contenido cabe completamente
    }

    if(contenidoPantalla === '' || (contenidoPantalla == '0' && valor1 == null && operacion == null)) {
        botonReset.innerText = 'AC';
    }else{
        botonReset.innerText = 'C';
    }
}