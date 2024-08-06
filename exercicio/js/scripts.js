function meuEscopo(){
    const form = document.querySelector('.form');   //seleciona elementos classes e atributos
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault(); //previne o comportamento padrão do formulário
        const nome = document.querySelector('.nome').value; //seleciona o valor do input
        const nomesobrenome = document.querySelector('.sobrenome').value; //seleciona o valor do input
        const peso = document.querySelector('.peso').value; //seleciona o valor do input
        const altura = document.querySelector('.altura').value; //seleciona o valor do input

        pessoas.push({
            nome: nome.value,
            sobrenome: nomesobrenome.value,
            peso: parseFloat(peso.value),
            altura: parseFloat(altura.value),
        });
       
    });
     console.log(pessoas)
     resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + `${peso.value} ${peso.value} ${altura.value}</p>`
}

meuEscopo();