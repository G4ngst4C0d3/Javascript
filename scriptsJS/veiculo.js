const veiculo = {
    modelo: "carro",
    passageiros : [],
    limitePassageiros : 5,
    velocidade: 0,
    aumentarVelocidade: function (aceleracao){
        this.velocidade += aceleracao
        alert(`Velocidade aumentada para ${this.velocidade} km/h`)
    },
    
    diminuirVelocidade: function (desaceleracao){
        if(this.velocidade - desaceleracao >= 0){
            this.velocidade -= desaceleracao
            alert(`Velocidade diminuida para ${this.velocidade} km/h`)
        }else{
            this.velocidade = 0
            alert("o veículo está parado")
        }
    },
    adicionarPassageiro: function (nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiros){
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} foi adicionado como passageiro.`)
        }else if(this.velocidade > 0){
            alert("Não é possível adicionar passageiros com o veículo em movimento.")
        }else{
            alert("Limite de passageiros atingido")
        }

    },
}

function mostraMenu() {
    return prompt(`Veiculo: ${veiculo.modelo}\nLimite de passageiros: ${veiculo.limitePassageiros}
    \nVelocidade atual: ${veiculo.velocidade} km/h\nPassageiros: ${veiculo.passageiros.join(", ")}
    \n\nEscolha uma opção:\n1. Aumentar velocidade\n2. Diminuir velocidade\n3. Adicionar passageiro\n4. Sair`)
}

while(true){
    const escolha = mostraMenu()

    switch (escolha) {
        case "1":
            const aceleracao = parseFloat(prompt("Digite a quantidade de aceleração:"))
            veiculo.aumentarVelocidade(aceleracao)
            break
        case "2":
            const desaceleracao = parseFloat(prompt("Digite a quantidade de desaceleração:"))
            veiculo.diminuirVelocidade(desaceleracao)
            break
        case "3":
            const nomePassageiro = prompt("Digite o nome do passageiro:")
            veiculo.adicionarPassageiro(nomePassageiro)
            break
        case "4":
            alert("Saindo...")
            break
        default:
            alert("Opçãp inválida. Tente novamente.")
    }

    if(escolha === "4"){
        break
    }
}
