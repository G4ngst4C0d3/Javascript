
            //ARROW FUNCTIONS//
const hello = () => {
    alert("Hello World")
}
/*
const situation = (nota, media = 6) => {
    if(nota >= media){
        alert("Aprovado!")
    }else{
        alert("Reprovado!")
    }
}
const prova1 = (prompt("Qual foi a nota do aluno?"))

situation(prova1, media)
*/

            // ...REST ///

const calcularMedia = (...notasProva) => {
    const num = notasProva.length  // notas é um array
    if(num == 0){
        console.log("informe no mínimo uma nota")
        return
    }
    let soma = 0 //acumula a soma das notas
    for (const nota of notasProva){
        soma += nota //soma o valor dos argumentos
    }
    const mediaNotas = soma / num //calcula a media
    console.log(`Média: ${mediaNotas.toFixed(1)}`)
}

calcularMedia(3,11,7)
calcularMedia(30,25,35)

const mostraHora = () => {
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()
    console.log(`Hora exata: ${hora}:${min}:${seg}`)
}
setInterval(mostraHora, 3000)