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
}

// Mostrar contenido de la pregunta seleccionada
function mostrarPregunta(preguntaId, temaId) {
    var preguntaContenido = document.getElementById('pregunta-contenido-' + temaId);
    preguntaContenido.innerHTML = "Contenido para " + preguntaId + " en " + temaId;
    // Aquí se podría agregar lógica adicional para cargar el contenido real de la pregunta
}
