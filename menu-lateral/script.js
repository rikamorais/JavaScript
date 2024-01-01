let menu = document.querySelector("#menu");
let desenhoMenuBar = document.querySelector(".menu-bar");

desenhoMenuBar.addEventListener("click", () => {
    menu.classList.toggle("expandir");
    menu.classList.toggle("expandir-mobile");
});

