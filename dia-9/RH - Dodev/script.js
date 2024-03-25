// DECLARANDO VARIÁVEIS

let confirmar = 2;
let salarioAtual;

// ENTRADA DE DADOS DO USUÁRIO E CONDIÇÃO PARA VALIDAR SE OS DADOS ESTÃO CORRETOS

while (confirmar != 1) {
    let nome = prompt("Digite o seu nome:");
    let idade = parseInt(prompt("Digite a sua idade:"));
    salarioAtual = parseFloat(prompt("Digite o seu salário atual:"));

    console.log(`Suas informações: \n|--------------------|\n|Nome: ${nome}         |\n|Idade: ${idade} anos      |\n|Salário atual: R$${salarioAtual}| \n|--------------------|`);
    confirmar = parseInt(prompt("As informações que você inseriu estão corretas? \nDigite (1) Sim ou (2) Não, quero digitar novamente."));
}

// CALCULANDO O AUMENTO SALARIAL ANUAL

let anoAtual = 2024;
let aumentoAnualEmPorcentagem = 1.5;

console.log("Previsão salarial para os próximos 10 anos: \n_________________________________________________________________");
for (let quantPrevisao = 0; quantPrevisao <= 10; quantPrevisao++) {
    salarioAtual += (salarioAtual * aumentoAnualEmPorcentagem) / 100;
    console.log(`${anoAtual + quantPrevisao} - R$${salarioAtual} com um aumento salarial anual de ${aumentoAnualEmPorcentagem}%`);
    aumentoAnualEmPorcentagem *= 2;
}
console.log("__________________________________________________________________");
