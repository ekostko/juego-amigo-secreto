// Creamos una variable de tipo array llamada "amigos"
// Esta lista almacenará los nombres que el usuario ingrese desde el input
// Comenzamos con un array vacío, sin ningún nombre
let amigos = [];

function agregarAmigo() {
    // Capturamos el input usando su ID "amigo"
    let input = document.getElementById("amigo");

    // Obtenemos el valor del input y eliminamos espacios en blanco al inicio y final
    let nombre = input.value.trim();

    // Validamos si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Mostramos una alerta si está vacío
        return; // Detenemos la función
    }

    // Verificamos si el nombre ya existe en el array
    if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue ingresado.");
    return;
}

    // Si el nombre es válido, lo agregamos al array "amigos"
    amigos.push(nombre);

    mostrarAmigos()

    // Limpiamos el campo de entrada para permitir escribir otro nombre
    input.value = "";
}

function mostrarAmigos() {
    // Obtenemos el elemento <ul> donde se mostrarán los nombres
    const lista = document.getElementById("listaAmigos");

    // Limpiamos cualquier contenido anterior para evitar duplicados
    lista.innerHTML = "";

    // Recorremos el array "amigos"
    for (let i = 0; i < amigos.length; i++) {
        // Creamos un nuevo elemento <li> para cada amigo
        let item = document.createElement("li");

        // Asignamos el nombre del amigo como contenido del <li>
        item.textContent = amigos[i];

        // Agregamos el <li> a la lista <ul>
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    // Validamos si hay al menos un nombre en el array
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generamos un índice aleatorio válido según la longitud del array
    let indice = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre sorteado usando el índice generado
    let nombreSorteado = amigos[indice];

    // Mostramos el resultado en el <ul> con id "resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}