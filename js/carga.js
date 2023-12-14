
document.addEventListener("DOMContentLoaded", function(){

const cargaCliente = document.querySelector("#cargaCliente")

const cargaTurnos = document.getElementById("cargaTurnos")

const botones = ["TODOS", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"]

function cargarTurnos (turnosfiltrados) {
    cargarTurnos.innerHTML = ""
    limpiarTurnos()
    const turnos = turnosfiltrados || obternerTurnos()
    turnos.forEach((elemento) => {
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
    const borro = obternerTurnos()
    const indexTurno = borro.findIndex (x => x.email === email)
    if (indexTurno !== -1){
        borro.splice(indexTurno,1)
        localStorage.setItem("cliente", JSON.stringify(borro))

        cargarTurnos(borro);
    }
    
}

function cargarBotones () {
    
    const contenedorFiltros = document.querySelector("#nav-filter")

    botones.forEach((dia)=>{
        const filtro = document.createElement("li")
        filtro.innerHTML= `
        <a class="nav-link" href="#">${dia}</a>
        `
        filtro.addEventListener("click",()=>{
            if ( dia != "TODOS"){
                const turnosfiltrados = filtrarTurnos(dia)
            
                cargarTurnos(turnosfiltrados)
            }else{
                const todos = obternerTurnos()
                cargarTurnos(todos)
            }
            
            
        })
        contenedorFiltros.appendChild(filtro)
    })
}

function filtrarTurnos (filtrar){
    const turnosFiltrados = obternerTurnos().filter((turno)=>turno.dia === filtrar)
    return turnosFiltrados
    

}

function obternerTurnos (){
   return JSON.parse(localStorage.getItem("cliente")) || []
}

cargarBotones()

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
    
    cargarTurnos(Clientes)
    
})

})
    















