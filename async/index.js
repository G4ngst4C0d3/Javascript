function exibirMensagem(){
    const mensagem = document.querySelector(".message")
    mensagem.classList.remove("hidden")

    setTimeout( function(){
        mensagem.classList.add("hidden")
    }, 5 * 1000)
}

const botaoAdicionar = document.getElementById("addToCart")
botaoAdicionar.addEventListener("click", exibirMensagem)
// função para adicionar um número aleatório e exibir na tela
function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 999999) + 1
    const paddedNumber = randomNumber.toString().padStart(6, '0')
    const randomNumberElement = document.getElementById("confirmationCode")
    randomNumberElement.textContent =paddedNumber
}
// função para gerar um número aleatório a cada 10 segundos
setInterval(generateRandomNumber, 10 * 1000)