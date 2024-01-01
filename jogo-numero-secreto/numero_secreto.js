let reiniciar = () => {
    window.location.reload(true);
}

let adivinharNumeroSecreto = () => {
    let numeroSecreto = parseInt(Math.random() * 10);
    textoModal.innerHTML = "";
    
    inputNumero.style = "display: initial";
    btnOk.removeAttribute("onclick");
    abrirModal('vis-modal');
    cabecalhoTituloModal.innerText = `Digite um número entre 0 e 10`;

    btnOk.addEventListener("click", () => {
        if (inputNumero.value == numeroSecreto) {
            cabecalhoTituloModal.innerText = `Você acertou! Parabéns!`;
            textoModal.innerHTML = ``;
            btnOk.setAttribute("onclick", "fecharModal('vis-modal')");
            inputNumero.style.display = "none";
            inputNumero.value = "";
            divInicial.style.display = "none";
            divAdvinhou.style.display = "flex"
        }
        else if (inputNumero.value < numeroSecreto) {
            cabecalhoTituloModal.innerText = `Errou!`;
            textoModal.innerHTML = `O número secreto é maior que ${inputNumero.value}`;
            inputNumero.value = "";
        }
        else {
            cabecalhoTituloModal.innerText = `Errou!`;
            textoModal.innerHTML = `O número secreto é menor que ${inputNumero.value}`;
            inputNumero.value = "";
        }
    })
}

let cabecalhoTituloModal = document.querySelector(".cabecalho-titulo-modal");
const btnIniciar = document.querySelector(".btn-iniciar");
const btnOk = document.querySelector(".btn-outline-success");
let inputNumero = document.querySelector(".numero-chute");
let textoModal = document.querySelector(".text")
const divAdvinhou = document.querySelector(".advinhou")
const divInicial = document.querySelector(".div-inicial");

const abrirModal = (carregarModal) => {
    const modal = document.getElementById(carregarModal);
    modal.style.display = "initial";
    document.body.style.overflow = 'hidden';
}

const fecharModal = (fecharModal) => {
    const modalFechar = document.getElementById(fecharModal);
    modalFechar.style.display = 'none';
    document.body.style.overflow = "hidden";
}





// while (tentativas > 0) {
        
    // }

    // while (tentativas > 0) {
    //     var chute = prompt("Digite um número entre 0 e 10:");
    //     if (chute == numeroSecreto){
    //         alert ("Parabéns! Você acertou!");
    //         break;
    //     }
    //     else if (chute > numeroSecreto) {
    //         tentativas -= 1;
    //         alert ("Errou! O número secreto é menor que "+ chute + ". Você tem mais " + tentativas + " tentativas.");
            
    //     }
    //     else if (chute < numeroSecreto) {
    //         tentativas -= 1;
    //         alert ("Errou! O número secreto é maior que " + chute + ". Você tem mais " + tentativas + " tentativas.");
            
    //     }
    //     else {
    //         tentativas -= 1;
    //         alert ("Valor inválido." + ". Você tem mais " + tentativas + " tentativas.");
    //     }  
    // }

    // alert ("Fim de jogo. O número secreto é " + numeroSecreto + ".");