const mensajeError = document.getElementById("errorNombre");
const mensajeError = document.getElementById("errorTelefono");
const mensajeError = document.getElementById("errorEmail");

document.getElementById("nombre").addEventListener("input", (e) => { })
if(e.target.value.length > 2){
    e.target.style.background ="red";
    mensajeError1.textContent = "El nombre és obligatorio";
}else{
    e.target.style.background = "green";
    mensajeError2.textContent = " ";
    todoOk = true
}


const inputs = document.query
inputs.forEach(input=>{
    input.addEventlistener("change", () => {
        console.groupCollapsed("NuevoValor:", input.value)
    });
});

