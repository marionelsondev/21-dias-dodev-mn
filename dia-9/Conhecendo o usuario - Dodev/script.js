// INICIANDO COM UM DOWHILE PARA NO FINAL DO CÓDIGO DAR A OPORTUNIDADE DO USUÁRIO OPTAR POR INSERIR OUTROS DADOS

do {

    // REALIZANDO A ENTRADA DE DADOS DO USUÁRIO

    let nome = prompt("Digite o seu nome: ");
    let idade = parseInt(prompt("Digite a idade que você tem ou terá no ano atual: "));
    let peso = Number(prompt("Digite o seu peso: "));
    let altura = Number(prompt("Digite a sua altura: "));
    let profissao = prompt("Digite a sua profissão: ");

    // PRINTANDO INFORMAÇÕES NA TELA

    console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}m de altura e pesa ${peso}kg.`);

    // CONDIÇÃO PARA VERIFICAR SE O USUÁRIO É MAIOR DE IDADE

    if (idade >= 18) {
        console.log("Você pode se tornar um cadete da 42 São Paulo!");
    } else if (idade < 18) {
        console.log("Ainda não está na hora de ser um cadete da 42 São Paulo!");
    }

    // CALCULANDO IDADE EM DIFERENTES OCASIÕES

    let idadeEmMeses = idade * 12.166;
    let idadeEmSemanas = idade * 52.142;
    let idadeEmDias = idade * 365;

    // CALCULANDO O IMC E A CLASSIFICAÇÃO DE PESO DO USUÁRIO

    let imc = peso / (altura * altura);
    let faixaDePeso;

    if (imc < 18.5) {
        faixaDePeso = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        faixaDePeso = "Peso normal"
    } else if (imc >= 25 && imc <= 30) {
        faixaDePeso = "Acima do peso"
    } else {
        faixaDePeso = "Obesidade"
    }

    // MOSTRANDO NA TELA A IDADE E O IMC

    console.log(`Considerando ano com 365 dias, mês com 30 dias e semana com 7 dias: \nA sua idade em:`);
    console.log(`Meses: ${idadeEmMeses} \nSemanas: ${idadeEmSemanas} \nDias: ${idadeEmDias}`);
    console.log(`Com um IMC de ${imc} kg/m2, a sua classificação atual é: ${faixaDePeso}.`);

    // CALCULANDO EM QUE ANO O USUÁRIO NASCEU, LEVANDO EM CONSIDERAÇÃO O ANO DE 2024

    let anoDeNascimento;
    anoDeNascimento = 2024 - idade;

    for (let contador = 0; contador <= idade; contador++) {
        console.log(`${anoDeNascimento} - ${contador} anos de idade!`);
        anoDeNascimento++;
    }

    const opcao = prompt("Deseja inserir novos dados? \nDigite (1) para SIM e (2) para NÃO:");
    if (opcao === "1") {
        continuar = true
    } else if (opcao === "2") {
        continuar = false
    } else {
        console.log("Você escolheu uma opção inválida. O programa foi finalizado!");
        continuar = false
    }
} while (continuar)
