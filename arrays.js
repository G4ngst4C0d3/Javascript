const numeros = [3,4,7,9,10,6,18]

const pares = numeros.filter(function (elementoAtual) {
    return elementoAtual % 2 === 0
})

console.log(numeros, pares)

const pessoas = [
    {
        id: 100, nome: "Anderson", idade:35
    },
    {
        id: 101, nome: "Marta", idade:19
    },
    {
        id: 102, nome: "Raffaella", idade:22
    },
]


/*
EXERCÍCIOS
1)Crie um programa para calcular a média ponderada que armazena uma quantidade qualquer de números e seus respectivos pesos e no fim mostre o resultado.
2)crie um programa que possui um objetoveículo com as propriedades modelo, passageiros, limite de passageiros e velocidade.Ele deve possuir métodos para aumentar
e diminuir a velocidade. Nele deve ser possível adicionar um passageiro, mas apenas se o limite ainda não tiver sido atingido e a velocidade atual for zero.
*/