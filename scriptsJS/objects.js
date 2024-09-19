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
    telefone: 53981352807
}
console.log(pessoa)

const carros = [
    "Pagani Zonda",  "Lamborghini Diablo", "Bugatti Veyron", 10, 7, true, new Date(), function(pessoa){
        console.log(pessoa)
    }
];
// foreach (valor, índice)
carros.forEach(function(value, index){
    console.log(index, value);
});

for( let key in pessoa){
    console.log(key, pessoa[key]);
}

