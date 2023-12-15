 const signupFrom = document.querySelector("#signupForm")
 signupFrom.addEventListener("submit", (e)=>{
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const Users = JSON.parse(localStorage.getItem("users")) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if (isUserRegistered){
        return Swal.fire({
            title: 'Error',
            text: 'El usuario o la contraseña ya se encuentra registrado!',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
    }
    Users.push({name:name, email:email, password:password })
    localStorage.setItem("users", JSON.stringify(Users))
    window.location.href = "logeo.html"
 })
