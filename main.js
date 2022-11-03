let sumaA=0
let sumaB=0
let sumaC=0
let cantA=0
let cantB=0
let cantC=0;

function sumaPro(genero, carrera, edad) {
    if(genero=="Masculino"){
        if(carrera=="a"){
            sumaA= sumaA+edad;
            cantA +=1;
        }else if (carrera=="b"){
            sumaB= sumaB+edad;
            cantB +=1;
        }else{
            sumaC= sumaC+edad;
            cantC +=1;
        }
    } else{
        null
    }
}

addEventListener("DOMContentLoaded", (e) => {
    document.querySelector("#cantidad").removeAttribute("disabled");
    document.querySelector("#cantidad").addEventListener("keyup", (e) => {
        let genero = document.querySelector("#genero");
        let edad = document.querySelector("#edad");
        let carrera = document.querySelector("#carrera");
        if (e.target.value > 0) {
            genero.removeAttribute("disabled");
            edad.removeAttribute("disabled");
            carrera.removeAttribute("disabled");
        } else {
            genero.disabled = true;
            edad.disabled = true;
            carrera.disabled = true;
        }
    })
    let cont = 1;
    let lista = [];
    let myform = document.querySelector("#form");
    myform.addEventListener("submit", async (e) => {
        e.preventDefault();
        let cantidad = document.querySelector("#cantidad").value;
        document.querySelector("#cantidad").disabled = true;
        if (cont < cantidad) {
            let data = Object.fromEntries(new FormData(form));
            sumaPro(data["genero"], data["carrera"], parseInt(data["edad"]));
            document.querySelector("#genero").selectedIndex = 0;
            document.querySelector("#edad").value = "";
            document.querySelector("#carrera").selectedIndex = 0;
            cont += 1;

        } else {
            let form = e.target;
            let data = Object.fromEntries(new FormData(form));
            sumaPro(data["genero"], data["carrera"], parseInt(data["edad"]));
            document.querySelector("#res").innerHTML = "";
            lista.push(sumaA);
            lista.push(cantA);
            lista.push(sumaB);
            lista.push(cantB);
            lista.push(sumaC);
            lista.push(cantC);
            
            let config = {
                method: form.method,
                body: JSON.stringify(lista)
            };

            let peticion = await fetch(form.action, config);
            let respuesta = await peticion.text();
            document.querySelector("#res").insertAdjacentHTML("beforeend", respuesta);
            document.querySelector("#genero").selectedIndex = 0;
            document.querySelector("#edad").value = "";
            document.querySelector("#carrera").selectedIndex = 0;
            genero.disabled = true;
            edad.disabled = true;
            carrera.disabled = true;
        }

    })
})