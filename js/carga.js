
const cargaCliente = document.querySelector("#cargaCliente")
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
    alert("Turno ingresado correctamente!")
})

const cargaTurnos = document.getElementById("cargaTurnos")
const Clientes2 = JSON.parse(localStorage.getItem("cliente"))


Clientes2.forEach((elemento) => {
    let content = document.createElement("div")
    content.innerHTML = `
    <p>${elemento.dia}</p>
    <p>${elemento.nombre}</p>
    <p>${elemento.email}</p>
    <p>${elemento.telefono}</p>
    
    `
    cargaTurnos.append(content);
});

