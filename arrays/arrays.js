
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
//nomes.splice(indice, quantidade de elementos a serem removidos, elementos a serem removidos)    

const remove = nomes.splice(0,2);

console.log(nomes, remove);

const numeros = [1, 55, 537, 84, 95, 6, 4711,18, 19];

//retornar numeros maiores que 100
const maiorQue70 = numeros.filter(valor => valor > 70);
console.log(maiorQue70);

const numerosdobro = numeros.map(valor => valor * 2);
console.log(numerosdobro);

const total = numeros.reduce((acumulador, valor) =>(( acumulador += valor)/2), 0);
console.log(total);//reduce reduz um array a um único elemneto

const total2 = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
}, []);
console.log((`Números pares: \n${total2}`));

const pessoas = [
    {nome: 'Luiz', idade: 50},
    {nome: 'Luiza', idade: 43},
    {nome: 'Luzardo', idade: 37},
    {nome: 'João Luiz', idade: 22},
    {nome: 'Carla', idade: 32}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 4 && obj.idade >= 32);    
console.log(pessoasComNomeGrande);



const a2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
a2.forEach((valor, indice, array) => {
    console.log(valor, indice);
});