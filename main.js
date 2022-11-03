addEventListener("DOMContentLoaded", (e)=>{
    // 1.Este programa muestra el signo zodiacal de una persona. 
    // Para ello el usuario debe introducir únicamente el día y 
    // el mes de nacimiento y el programa determinará inmediatamente 
    // el signo zodiacal de la persona.
    let myForm = document.querySelector("#Formulario");
    myForm.addEventListener("submit", async(e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let config = {
            method: myForm.method,
            body: JSON.stringify(data)
        };
        let peticion = await fetch(myForm.action,config);
        let res = await peticion.json();
        document.querySelector("#res").innerHTML = res.mensaje;
        
    })
