function agregarPublicacion() {
    let usuario = document.getElementById("usuario").value;
    let deporte = document.getElementById("deporte").value;
    let comentario = document.getElementById("comentario").value;

    if (usuario === "" || comentario === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    let nuevaPublicacion = document.createElement("div");
    nuevaPublicacion.classList.add("publicacion");

    nuevaPublicacion.innerHTML = `
        <h3>${usuario} - ${deporte}</h3>
        <p>${comentario}</p>
    `;

    document.getElementById("lista-publicaciones").appendChild(nuevaPublicacion);

    // Limpiar campos
    document.getElementById("usuario").value = "";
    document.getElementById("comentario").value = "";
}
