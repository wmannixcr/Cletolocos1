"use strict";

window.addEventListener('load', init, false);

function init() {

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var registrarBtn = document.getElementById('registrarBtn');
    var cleteroTbl = document.getElementById('cleteroTbl');
    var cleteroCol = ['Nombre','Apellido','Email', 'Eliminar', 'Update'];
    var cleteros = [];
    var cletas = [];
    var marcasCletasSlt = document.getElementById('marcasCletasSlt');
    var modelosCletasSlt = document.getElementById('modelosCletasSlt');

    var william = new Cletero('William', 'Mannix', 'wm@mail.com');
    var maria = new Cletero('Maria', 'Gonzalez', 'mg@mail.com');
    cleteros.push(william,maria);

 
    var marinModelos = ['ALPINE TRAIL', 'RIFT ZONE', 'HAWK HILL', 'PRESIDIO', 'DUAL SPORT', 'DSX'];
    var marin = new Cleta('Marin', marinModelos);
    var SpecializedModelos = ['Epic', 'Stumpjumper', 'Enduro', 'Fuse'];
    var Specialized = new Cleta('Specialized', SpecializedModelos);
    var scottModelos = ['Spark', 'Genius', 'Ransom', 'Gambler', 'Aspect'];
    var scott = new Cleta('Scott', scottModelos);
    var trekModelos = ['Emonda', 'Domane', 'Checkpoint', 'Madone', 'Crockett'];
    var trek = new Cleta('Trek', trekModelos);
    cletas.push(marin,Specialized,scott,trek);
    console.log(cletas);

    llenacleteroTbl();
    generarMarcasCletasSlt();
    generarmodelosCletasSlt();

    registrarBtn.onclick = agregarCleto;

    function agregarCleto(){
        var item = new Cletero(nombre.value, apellido.value, email.value);
        cleteros.push(item);
        limpiarInput();
        console.log(cleteros);
        llenacleteroTbl();
    }

    function limpiarInput() {
        nombre.value = '';
        apellido.value = '';
        email.value = '';
    }

    function llenacleteroTbl() {

        cleteroTbl.innerHTML = '';

        var fila = document.createElement('tr');
        cleteroTbl.appendChild(fila);

        for (let index = 0; index < cleteroCol.length; index++) {
            var filaTitulo = document.createElement('th');
            fila.appendChild(filaTitulo);
            filaTitulo.innerText = cleteroCol[index];
        }

        fila.className = 'colorTitulo';

        for (let index = 0; index < cleteros.length; index++) {
            var cletero = cleteros[index];
            console.log(cletero);

            fila = document.createElement('tr');
            cleteroTbl.appendChild(fila);
            fila.style.userSelect = 'none';

            var celda = document.createElement('td');
            fila.appendChild(celda);
            celda.innerText = cletero.nombre;
            // celda.indiceCletero = index;
            // celda.addEventListener('click',updateCletero,false);
            // console.log(celda.indiceCletero);

            var celda = document.createElement('td');
            fila.appendChild(celda);
            celda.innerText = cletero.apellido;

            var celda = document.createElement('td');
            fila.appendChild(celda);
            celda.innerText = cletero.email;

            var celda = document.createElement('td');
            fila.appendChild(celda);
            celda.innerText = 'Eliminar';
            celda.className = 'eliminaColor';

            celda.indiceCletero = index;
            celda.addEventListener('click', onClickEliminaFila, false);

            var celda = document.createElement('td');
            fila.appendChild(celda);
            celda.innerText = 'Update';
            celda.className = 'updateColor';

            celda.indiceCletero = index;
            celda.addEventListener('click', onClickUpdateFila, false);

            celda.indiceCletero = index;
            console.log(celda.indiceCletero);
            cleteroTbl.setAttribute("border", "2");
        }

        function onClickEliminaFila(e) {
            eliminarCletero(e.target.indiceCletero)
        }

        function eliminarCletero(index) {
            cleteros.splice(index,1);
            console.log(cleteros);
            llenacleteroTbl();
        }

        function updateValue(e) {
            nombre.textContent = e.target.value;
        }

        function onClickUpdateFila(e) {
            updateCletero(e.target.indiceCletero)
        }

        function updateCletero(index) {

        }

    }

    function generarMarcasCletasSlt() {
        marcasCletasSlt.innerHTML = '';
        for (var index = 0; index < cletas.length; index++) {
            var option = document.createElement('option');
            option.value = index;
            option.innerHTML = cletas[index].marca;
            marcasCletasSlt.appendChild(option);;
            console.log(cletas[index]);
        }

        // celda.indiceCletero = index;
        // celda.addEventListener('click', onClickEliminaFila, false);
    }

    function generarmodelosCletasSlt() {
        modelosCletasSlt.innerHTML = '';
        for (var index = 0; index < cletas.length; index++) {
            var option = document.createElement('option');
            option.value = index;
            option.innerHTML = cletas[index].modelo;
            modelosCletasSlt.appendChild(option);
        }


    }
//     console.log(cleteros);
}