document.getElementById("dia").addEventListener("click",cargarJSON)


function cargarJSON () {
    fetch('../especialistas.json')
        .then (function(res){
            return res.json()
        })
        .then(function(data){
            let html = ""
            data.forEach(function(empleado){
                html+= `
                <option class="selectoption">  ${empleado.especialidad} ${empleado.nombre} </option>
                `
            })
            document.getElementById("especialista").innerHTML = html
        })
}
    