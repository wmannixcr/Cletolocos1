"use strict";

window.addEventListener('load', init, false);

function init() {

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var registrarBtn = document.getElementById('registrarBtn');

    var cleteros = [];

    registrarBtn.onclick = agregarCleto;

    function agregarCleto(){
        var item = new Cletero(nombre.value, apellido.value, email.value);
        cleteros.push(item);
        limpiarInput();
        console.log(cleteros);
    }

    function limpiarInput() {
        nombre.value = '';
        apellido.value = '';
        email.value = '';
    }
    // var william = new Cletero('William', 'Mannix', 'wm@mail.com');
    // console.log(william);

    // var maria = new Cletero('Maria', 'Gonzalez', 'mg@mail.com');
    // console.log(maria);

    // var item = nombre.value;
    // item = new Cletero(nombre, apellido, email);

//     cleteros.push({william},{maria});
//     console.log(cleteros);
}