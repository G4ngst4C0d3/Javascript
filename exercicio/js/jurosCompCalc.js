/*
    A=P×(1+r/n)^n*t
    A é o valor futuro do investimento.
    P é o valor inicial (principal).
    r é a taxa de juros anual (decimal).
    n é o número de vezes que os juros são capitalizados por ano.
    t é o número de anos.
*/

function calcularJurosCompostos(principal, taxaJuros, anos, capitalizacoesPorAno) {
    const taxaDecimal = taxaJuros / 100; // Converte a taxa de juros para decimal
    const valorFuturo = principal * Math.pow((1 + taxaDecimal / capitalizacoesPorAno), capitalizacoesPorAno * anos);
    return valorFuturo.toFixed(2); // Formata para 2 casas decimais
}

// Exemplo de uso:
const principal = parseFloat(prompt("Digite o valor inicial do investimento:"));
const taxaJuros = parseFloat(prompt("Digite a taxa de juros anual (em %):"));
const anos = parseInt(prompt("Digite o número de anos do investimento:"));
const capitalizacoesPorAno = parseInt(prompt("Digite o número de capitalizações por ano (por exemplo, 1 para anual, 12 para mensal):"));

const resultado = calcularJurosCompostos(principal, taxaJuros, anos, capitalizacoesPorAno);
console.log(`O valor futuro do investimento é: R$ ${resultado}`);
