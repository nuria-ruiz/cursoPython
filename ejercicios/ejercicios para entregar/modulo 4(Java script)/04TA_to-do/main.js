const formulario = document.getElementById("form-tarea");
const input = document.getElementById("input-tarea");
const lista = document.getElementById("lista-tareas");
let tareas = [];
// Cargar tareas del localStorage al iniciar
document.addEventListener("DOMContentLoaded", () => {
    const guardadas = localStorage.getItem("tareas");
    if (guardadas) {
        tareas = JSON.parse(guardadas);
        tareas.forEach(crearTareaEnDOM);
    }
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto === "") return;
    const nuevaTarea = {
        id: Date.now(),
        texto,
        completada: false
    };
    tareas.push(nuevaTarea);
    guardarTareas();
    crearTareaEnDOM(nuevaTarea);
    input.value = "";
});

function crearTareaEnDOM(tarea) {
    const li = document.createElement("li"); //<li></li>
    li.textContent = tarea.texto + "-" + tarea.id; //<li>texto introducido, id</li>
    li.dataset.id = tarea.id; //atributo, indice de la lista
    if (tarea.completada) li.classList.add("completada");

    // Botón eliminar
    const btnEliminar = document.createElement("button"); //<button></button>
    btnEliminar.textContent = "❌"; //<button>❌</button>
    btnEliminar.className = "borrar"; //<button class="borrar">❌</button>
    li.appendChild(btnEliminar);
    lista.appendChild(li); //<li>texto <button class="borrar">❌</button></li>
}

lista.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    const id = li.dataset.id;
    if (e.target.matches("button.borrar")) {
        tareas = tareas.filter(t => t.id !== Number(id)); //comprueba todas las tareas. number id es la pulsada
        guardarTareas(); // mete los no pulsados en otra lista
        li.remove(); //elimina la lista anterior
    }
});

lista.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    const id = Number(li.dataset.id);
    if (!e.target.matches("button.borrar")) {
        tareas = tareas.map(t => {
            if (t.id === id) t.completada = !t.completada;
            return t;
        });
        guardarTareas();
        li.classList.toggle("completada");
    }
});

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}