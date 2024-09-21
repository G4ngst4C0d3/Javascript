function calcular(operacao){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, insira números válidos")
        return
    }

    switch(operacao){
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if(num2 === 0){
                alert("Não é possíveldividerm por zero!");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operção inválida.");
            return;
    }

    document.getElementById('resultado').innerText = resultado;
}
