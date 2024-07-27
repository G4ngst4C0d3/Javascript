//Javascript Object Notation 

pessoa = {
    nome: "Anderson",
    sobrenome: "Leite",
    dataNascimento: '03/05/1989' , 
    cidadeNatal: "Pelotas",
    estado: "RS",
    endereço : {
        cidade: "Pelotas",
        bairro: "Simões Lopes",
        rua: "Tiradentes",
        numero: 3590,
    },
    profissao: "programador",
    telefone: 53981052808,
       dados : function () {
       console.log('Esses são os dados do funcionário ${this.nome}.')
    }
        
}


console.log(pessoa.dados)