// DECLARANDO AS VARIÁVEIS E COLETANDO OS DADOS DO USUÁRIO

let num1 = Number(prompt("Digite o primeiro número:"));
let operacaoCalc = parseInt(prompt("Escolha a operação que deseja realizar:" + "\n 1 (+) \n 2 (-) \n 3 (*) \n 4 (/) \n 5 (%)"));
let num2 = Number(prompt("Digite o segundo número:"));
let resultado = 0

// UTILIZANDO A ESTRUTURA CONDICIONAL(SWITCH CASE) PARA GUIAR A OPERAÇÃO DA CALCULADORA 

switch (operacaoCalc) {
    case 1:
        resultado = num1 + num2
        console.log(num1 + " + " + num2 + " = " + resultado);
        break;
    case 2:
        resultado = num1 - num2
        console.log(num1 + " - " + num2 + " = " + resultado);
        break;
    case 3:
        resultado = num1 * num2
        console.log(num1 + " * " + num2 + " = " + resultado);
        break;
    case 4:
        resultado = num1 / num2
        console.log(num1 + " / " + num2 + " = " + resultado);
        break;
    case 5:
        resultado = num1 % num2
        console.log(num1 + " % " + num2 + " = " + resultado);
        break;
    default:
        console.log("Não foi possível calcular. Por favor, tente novamente.");
        break;
}