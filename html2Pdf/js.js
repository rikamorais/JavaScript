let btnGeneratorPdf = document.querySelector("#btnGeneratorPdf");
btnGeneratorPdf.addEventListener("click", () => {

    console.log("FOI");
    // Conteúdo do PDF
    let content = document.querySelector("#content");

    // Configuração do arquivo final de PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    // Gerar e baixar o PDF
    html2pdf().set(options).from(content).save();
})