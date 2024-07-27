//Javascript Object Notation 

pessoa = {
    nome: "Anderson",
    sobrenome: "Leite",
    dataNascimento: '09/05/1991' , 
    cidadeNatal: "Pelotas",
    estado: "RS",
    endereço : {
        cidade: "Pelotas",
        bairro: "Simões Lopes",
        rua: "Tiradentes",
        numero: 3581,
    },
    profissao: "programador",
    telefone: 53981352807,
       dados : function () {
       console.log(`Esses são os dados do funcionário ${this.nome}.`)
    }
        
}


console.log(pessoa)