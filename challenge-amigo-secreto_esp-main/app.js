const listaAmigos = [];
const listaElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');
const inputAmigo = document.getElementById('amigo');

// Añadir amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }
    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        inputAmigo.value = "";
        return;
    }
    listaAmigos.push(nombre);
    mostrarLista();
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Mostrar la lista de amigos en pantalla
function mostrarLista() {
    listaElement.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
    resultadoElement.innerHTML = ""; // Limpiar resultado si se cambia la lista
}

// Sortear un solo amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo para sortear.");
        return;
    }
    const idx = Math.floor(Math.random() * listaAmigos.length);
    const elegido = listaAmigos[idx];
    resultadoElement.innerHTML = `<li>El amigo secreto sorteado es: <strong>${elegido}</strong></li>`;
}