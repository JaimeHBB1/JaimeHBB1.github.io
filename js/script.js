// script.js

// Mostrar el panel de tema seleccionado
function mostrarTema() {
    var selector = document.getElementById('tema-selector');
    var tema = selector.value;
    ocultarTodosLosPaneles();
    document.getElementById(tema + '-panel').style.display = 'block';
}

// Volver al menú principal
function volverAlMenu() {
    ocultarTodosLosPaneles();
    document.getElementById('main-panel').style.display = 'block';
}

// Mostrar información
function mostrarInfo() {
    ocultarTodosLosPaneles();
    document.getElementById('info-panel').style.display = 'block';
}

// Mostrar el panel del manual
function mostrarManual() {
    ocultarTodosLosPaneles();
    document.getElementById('manual-panel').style.display = 'block';
}

// Navegar entre temas
function irATema(tema) {
    ocultarTodosLosPaneles();
    document.getElementById(tema + '-panel').style.display = 'block';
}

// Ocultar todos los paneles
function ocultarTodosLosPaneles() {
    var panels = document.getElementsByClassName('tema-panel');
    for (var i = 0; i < panels.length; i++) {
        panels[i].style.display = 'none';
    }
    document.getElementById('main-panel').style.display = 'none';
    document.getElementById('info-panel').style.display = 'none';
    document.getElementById('manual-panel').style.display = 'none';  

}

// Mostrar el panel de una pregunta
function mostrarPregunta(preguntaId, tema) {
    ocultarPreguntaPaneles(tema);
    document.getElementById(preguntaId + '-panel-' + tema).style.display = 'block';
}

// Ocultar los paneles de pregunta para un tema específico
function ocultarPreguntaPaneles(tema) {
    var preguntaPanels = document.querySelectorAll('#' + tema + '-panel .pregunta-panel');
    for (var i = 0; i < preguntaPanels.length; i++) {
        preguntaPanels[i].style.display = 'none';
    }
}

// Volver al tema específico desde una pregunta
function volverATema(tema) {
    ocultarPreguntaPaneles(tema);
    document.getElementById(tema + '-panel').style.display = 'block';
}
