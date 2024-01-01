let inputColor = document.querySelector("input");
inputColor.value = "#FFFFFF";

let body = document.body;

setInterval(() => {
    body.style.backgroundColor = inputColor.value;
}, 0);


