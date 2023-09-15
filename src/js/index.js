var portugues = document.getElementsByClassName("portugues");
var english = document.getElementsByClassName("english");

function ocultar(elementos) {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'none';
    }
}

function mostrar(elementos) {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'block';
    }
}

function mostrarPortugues() {
    localStorage.setItem("lingua", "portugues");
    ocultar(english);
    mostrar(portugues);
}

function mostrarEnglish() {
    localStorage.setItem("lingua", "english");
    ocultar(portugues);
    mostrar(english);
}

if (localStorage.getItem("lingua") == "portugues") {
    mostrarPortugues();
} else {
    mostrarEnglish();
}