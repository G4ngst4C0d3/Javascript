function converterMoeda(valor, de, para) {
   
    const taxasDeCambio = {
        "USD": { "BRL": 5.30, "EUR": 0.85, "JPY": 110.0 },
        "BRL": { "USD": 0.19, "EUR": 0.16, "JPY": 20.75 },
        "EUR": { "USD": 1.18, "BRL": 6.20, "JPY": 129.5 },
        "JPY": { "USD": 0.0091, "BRL": 0.048, "EUR": 0.0077 }
    };

    // Verifica se a conversão é possível
    if (!taxasDeCambio[de] || !taxasDeCambio[de][para]) {
        return "Conversão de moeda não disponível.";
    }

    // Calcula o valor convertido
    const taxa = taxasDeCambio[de][para];
    const valorConvertido = valor * taxa;

    return valorConvertido.toFixed(2); // Retorna o valor formatado com 2 casas decimais
}


const valor = parseFloat(prompt("Digite o valor a ser convertido:"));
const deMoeda = prompt("Digite a moeda de origem (USD, BRL, EUR, JPY):").toUpperCase();
const paraMoeda = prompt("Digite a moeda de destino (USD, BRL, EUR, JPY):").toUpperCase();

const resultado = converterMoeda(valor, deMoeda, paraMoeda);
console.log(`O valor convertido é: ${resultado}`);
