addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let meses = document.querySelector("#meses").value;
        let dato = new Date(meses);
        let ano
        let mes
        let dia;
        var pago = 10;
        if (!!dato.valueOf()) {
            ano = dato.getFullYear();
            mes = dato.getMonth() + 1;
            dia = dato.getDate() + 1;
        }
        let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        let nombresMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        for(let i=0;i<20;i++){
            var indice = new Date(ano, mes - 1, 16).getDay();
            document.querySelector("#res").insertAdjacentHTML("beforeend",(`${diasSemana[indice]} del ${dia} de ${nombresMes[new Date(ano, mes - 1, dia).getMonth()]} del ${(new Date(year, mes - 1, dia).getMonth()==0) ?++ano : ano} debe pagar ${pagos}<br>`));
            pagos=pagos*2;
            mes++;
        }
    })
})