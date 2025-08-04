const lista = document.getElementById("lista-usuarios");
const estado = document.getElementById("estado");
const boton = document.getElementById("btn-recargar");
// Función para obtener usuarios
async function obtenerUsuarios() {
    estado.textContent = "Cargando...";
    lista.innerHTML = "";
    try {
        const res = await
            fetch("https://jsonplaceholder.typicode.com/users");
        const datos = await res.json();
        estado.textContent = "Usuarios cargados";
        datos.forEach(mostrarUsuario);
    } catch (error) {
        estado.textContent = `Error al cargar usuarios ${error}`;
    }

}

// Mostrar usuario en la lista
function mostrarUsuario(usuario) {
    const li = document.createElement("li");
    li.innerHTML = `
<strong>${usuario.name}</strong><br>
Email: ${usuario.email}<br>
Ciudad: ${usuario.address.city}
`;
    lista.appendChild(li);
}

// Al cargar la página
document.addEventListener("DOMContentLoaded",
    obtenerUsuarios);

// Botón de recarga
boton.addEventListener("click", obtenerUsuarios);

function mostrarUsuario2(usuario){
const li = document.createElement("li");
li.innerHTML = `<strong>${usuario.name}</strong>`;
li.style.cursor = "pointer";

li.addEventListener("click", () => {
    alert(`Nombre: ${usuario.name}
 Email: ${usuario.email}
 Teléfono: ${usuario.phone}
 Sitio: ${usuario.website}`);
});

lista.appendChild(li);}