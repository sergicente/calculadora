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
let contenidoPantalla = pantalla.innerHTML;
let valor1;
let operacion;

//Eventos

botonCero.addEventListener('click', ()=> {
    contenidoPantalla += 0;
    actualizarPantalla();
});
botonUno.addEventListener('click', ()=> {
    contenidoPantalla += 1;
    actualizarPantalla();
});
botonDos.addEventListener('click', ()=> {
    contenidoPantalla += 2;
    actualizarPantalla();
});
botonTres.addEventListener('click', ()=> {
    contenidoPantalla += 3;
    actualizarPantalla();
});
botonCuatro.addEventListener('click', ()=> {
    contenidoPantalla += 4;
    actualizarPantalla();
});
botonCinco.addEventListener('click', ()=> {
    contenidoPantalla += 5;
    actualizarPantalla();
});
botonSeis.addEventListener('click', ()=> {
    contenidoPantalla += 6;
    actualizarPantalla();
});
botonSiete.addEventListener('click', ()=> {
    contenidoPantalla += 7;
    actualizarPantalla();
});
botonOcho.addEventListener('click', ()=> {
    contenidoPantalla += 8;
    actualizarPantalla();
});
botonNueve.addEventListener('click', ()=> {
    contenidoPantalla += 9;
    actualizarPantalla();
});
botonReset.addEventListener('click', ()=> {
    contenidoPantalla = '';
    actualizarPantalla();
});
botonSumar.addEventListener('click', ()=> {
    valor1 = contenidoPantalla;
    operacion = 'suma';
    contenidoPantalla = '';
    botonSumar.classList.add('seleccion')
});
botonIgual.addEventListener('click', ()=> {
    valor2 = contenidoPantalla;
    contenidoPantalla = valor1 + valor2;
    actualizarPantalla
    botonSumar.classList.remove('seleccion')
});


//Inicio



//funciones

function actualizarPantalla(){
    pantalla.innerHTML = contenidoPantalla
}