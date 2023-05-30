const form = document.getElementById('loginForm');

form.addEventListener('submit',evt=>{
    //Implementar un contador de intentos de sesión, para que en el caso de que el contador sea mayor a 3 vamos a desactivar el boton de login por una ventana de tiempo de 5 o 10 minutos A07
    evt.preventDefault();
    const data = new FormData(form);
    const obj = {}
    data.forEach((value, key)=> obj[key]=value);
    fetch('/api/sessions/login',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(result=>result.json()).then(json=>{

        Swal.fire({
            icon:"success",
            text:"Usuario logueado :)",
            timer:3000
        }).then(result=>{
            window.location.replace(`/profile/${json.payload}`)
        })
    }).catch(error=>console.log(error))
})