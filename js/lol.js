function irADescripcion(id) {
    switch(id) {
        case 'fnaf':
            window.location.href = 'descripcion.html?juego=TJOC:R';
            break;
        case 'out':
            window.location.href = 'descripcion.html?juego=Outlast';
            break;
        case 'cap':
            window.location.href = 'descripcion.html?juego=poppy play time';
            break;
        case 'res':
            window.location.href = 'descripcion.html?juego=Resident evil';
            break;
        case 'ali':
            window.location.href = 'descripcion.html?juego=Alien isolation';
            break;
        case 'pha':
            window.location.href = 'descripcion.html?juego=phasmophobia';
            break;
        case 'dead':
            window.location.href = 'descripcion.html?juego=Dead by daylight';
            break;
        case 'gra':
            window.location.href = 'descripcion.html?juego=Granny';
            break;
        case 'ded':
            window.location.href = 'descripcion.html?juego=dead Space';
            break;
        case 'sil':
            window.location.href = 'descripcion.html?juego=Silent hill';
            break;
        case 'litt':
            window.location.href = 'descripcion.html?juego=LITTLE NIGHTMARES';
            break;
        case 'led':
            window.location.href = 'descripcion.html?juego=led 4 dead';
            break;
        default:
            // Si no se encuentra ninguna correspondencia, no se hace nada
            break;
    }
}
