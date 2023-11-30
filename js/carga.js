
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
    

    cargarTurnos()
})

function cargarTurnos () {
    cargarTurnos.innerHTML = ""

    const Clientes2 = JSON.parse(localStorage.getItem("cliente")) ||[]
    Clientes2.forEach((elemento) => {
    let content = document.createElement("div")
    content.className = "turnos-styles col-2"
    content.innerHTML = `
    <p>Día: ${elemento.dia}</p>
    <p>Nombre: ${elemento.nombre}</p>
    <p>Email: ${elemento.email}</p>
    <p>Teléfono: ${elemento.telefono}</p>
    
    `
    cargaTurnos.append(content);
});
}
cargarTurnos()

