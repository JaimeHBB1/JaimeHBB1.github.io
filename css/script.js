document.getElementById('mostrarTema').addEventListener('click', function() {
    const tema = document.getElementById('tema').value;
    let tituloTema = '';

    switch (tema) {
        case 'tema1':
            tituloTema = 'Introducción a las señales en el dominio del tiempo';
            break;
        case 'tema2':
            tituloTema = 'Sistemas en el dominio del tiempo';
            break;
        case 'tema3':
            tituloTema = 'Análisis de Fourier para señales y sistemas de tiempo continuo';
            break;
        case 'tema4':
            tituloTema = 'Análisis de Fourier para señales y sistemas de tiempo discreto';
            break;
        default:
            tituloTema = '';
    }

    document.getElementById('tema-titulo').textContent = tituloTema;

    // Redirige a la página correspondiente
    window.location.href = `tema${tema}.html`;
});
