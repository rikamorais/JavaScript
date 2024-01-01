function adivinharNumeroSecreto (){

    let numeroSecreto = parseInt(Math.random() * 10);
    let tentativas = 3;

    while (tentativas > 0) {
        var chute = prompt("Digite um número entre 0 e 10:");
        if (chute == numeroSecreto){
            alert ("Parabéns! Você acertou!");
            break;
        }
        else if (chute > numeroSecreto) {
            tentativas -= 1;
            alert ("Errou! O número secreto é menor que "+ chute + ". Você tem mais " + tentativas + " tentativas.");
            
        }
        else if (chute < numeroSecreto) {
            tentativas -= 1;
            alert ("Errou! O número secreto é maior que " + chute + ". Você tem mais " + tentativas + " tentativas.");
            
        }
        else {
            tentativas -= 1;
            alert ("Valor inválido." + ". Você tem mais " + tentativas + " tentativas.");
        }  
    }

    alert ("Fim de jogo. O número secreto é " + numeroSecreto + ".");
}