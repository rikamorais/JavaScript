let operador = document.querySelectorAll(".operador");
let numero = parseInt( document.querySelector("#numero").innerHTML);
let resultado = document.querySelector("#numero");

operador.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerHTML == "+") {
            resultado.innerHTML = `${++numero}`;
        }
        else {
            resultado.innerHTML = `${--numero}`;
        }
    })
});



/************
 * CÓDIGO 1 *
 ************/
// let mais = document.querySelector("#mais");
// let numero = document.querySelector("#numero");
// let numeroValor = parseInt(document.querySelector("#numero").innerHTML);
// let menos = document.querySelector("#menos");

// mais.addEventListener("click", () => {
//     numero.innerHTML = `${numeroValor += 1}`;
// });
// menos.addEventListener("click", () => {
//     numero.innerHTML = `${numeroValor -= 1}`;
// });