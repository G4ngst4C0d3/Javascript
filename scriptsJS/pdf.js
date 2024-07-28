const btnGenerate = document.querySelector("#generete-pdf");

btnGenerate.addEventListener("click", () => {
    // Conteúdo PDF
    const content = document.querySelector("#content");

    // Configuração do arquivo final de PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait"},
    };

    // Gerar e baixar pdf
    html2pdf().set(options).from(content).save();
})