
const cargaCliente = document.querySelector("#cargaCliente")
const cargaTurnos = document.getElementById("cargaTurnos")

cargaCliente.addEventListener("submit", (e)=>{
    e.preventDefault()
    const dia = document.querySelector("#dia").value
    const nombre = document.querySelector("#nombre").value
    const email = document.querySelector("#email").value
    const telefono = document.querySelector("#telefono").value

    const Clientes = JSON.parse(localStorage.getItem("cliente")) || []
    const isClienteRegistered = Clientes.find (client => client.email === email)
    if (isClienteRegistered){
        return alert ("El cliente ya cuenta con un turno asignado!")
    }

    Clientes.push({dia: dia, nombre: nombre, email: email, telefono: telefono})
    localStorage.setItem("cliente", JSON.stringify(Clientes))
    
   
   
})

cargarTurnos()
cargaCliente.addEventListener("submit", cargarTurnos)

/* function cargarTurnos () {
    cargarTurnos.innerHTML = ""
    limpiarTurnos()
    const Clientes2 = JSON.parse(localStorage.getItem("cliente")) ||[]
    Clientes2.forEach((elemento) => {

    let content = document.createElement("div")
    content.className = "turnos-styles col-3"
    content.innerHTML = `
    <p>Día: ${elemento.dia}</p>
    <p>Nombre: ${elemento.nombre}</p>
    <p>Email: ${elemento.email}</p>
    <p>Teléfono: ${elemento.telefono}</p>
    <span class="delete-turno"> ❌ </span>

    `
    cargaTurnos.append(content);

    let eliminar = content.querySelector(".delete-turno")
    eliminar.addEventListener("click", () => {
        borrarTurnos(elemento.email)
    })
    
});
} */
function cargarTurnos () {
    cargarTurnos.innerHTML = ""
    limpiarTurnos()
    const Clientes2 = JSON.parse(localStorage.getItem("cliente")) ||[]
    Clientes2.forEach((elemento) => {

    let fila = document.createElement("tr")
    fila.className="tr-dom"
    fila.innerHTML = `
    <td>${elemento.dia}</td>
    <td>${elemento.nombre}</td>
    <td>${elemento.email}</td>
    <td>${elemento.telefono}</td>
    <td>
    <span class="delete-turno"> ❌ </span>
    </td>


    `
    cargaTurnos.append(fila);

    let eliminar = fila.querySelector(".delete-turno")
    eliminar.addEventListener("click", () => {
        borrarTurnos(elemento.email)
    })
    
});
}


function limpiarTurnos () {
    while (cargaTurnos.firstChild){
        cargaTurnos.removeChild(cargaTurnos.firstChild)
    }
}

function borrarTurnos (email) {
    const borro = JSON.parse(localStorage.getItem("cliente")) || []
    const indexTurno = borro.findIndex (x => x.email === email)
    if (indexTurno !== -1){
        borro.splice(indexTurno,1)
        localStorage.setItem("cliente", JSON.stringify(borro))

        cargarTurnos();
    }
    
}











