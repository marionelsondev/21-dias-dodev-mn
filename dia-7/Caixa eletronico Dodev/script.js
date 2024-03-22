let saldo = 1000.0;
let maiorValorInserido = 0.0;
let totalTransacoes = 0.0;
let somaValoresInseridos = 0.0;

do {
    const nome = prompt("Digite o seu nome: ");
    const cpf = parseInt(prompt("Digite o seu CPF: "));
    const valor = Number(prompt("Digite o valor que deseja utilizar: "));
    const operacao = parseInt(prompt("O que deseja fazer com esse valor? \n (1) Saque \n (2) Depósito"));

    if (valor < 0) {
        console.log("Não foi possível concluir a ação, você digitou um valor inválido (Valor menor que R$0)");
    } else if (operacao === 1 && valor > saldo) {
        console.log("Saldo insuficiente. A transação não foi realizada");
    } else if (operacao === 1) {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    } else {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    }

    const opcao = prompt("Deseja continuar? \n Digite (1) para continuar e (2) para finalizar a interação: ");
    if (opcao === "1") {
        continuar = true
    } else if (opcao === "2") {
        continuar = false
    } else {
        console.log("Opção inválida, fim da interação!");
        continuar = false
    }

} while (continuar)

console.log("Fim da interação! \nConsulte informações relevantes abaixo: \n-------------------------------");
console.log(`Saldo: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes)}`);