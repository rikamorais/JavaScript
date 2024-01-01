let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    horas.innerHTML = `${formatTime(hours)}`;
    minutos.innerHTML = `${formatTime(minutes)}`;
    segundos.innerHTML = `${formatTime(seconds)}`;
}, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}