// DECLARANDO VARIÁVEIS PARA CONTER OS VALORES DOS SERVIÇOS

let precoLitroGasolina = 5.0
let precoLitroAlcool = 3.0
let precoDevido = 0.0

// O USUÁRIO ESCOLHE O TIPO DE SERVIÇO

let tipoServico = parseInt(prompt("Digite o número correspondente ao tipo de serviço que deseja:" + "\n 1 (Abastecer) \n 2 (Outros serviços)"));

// O USÁRIO ESCOLHEU "ABASTECER", AGORA ELE DEVE ESCOLHER COM QUAL OPÇÃO ABASTECER

if (tipoServico === 1) {
    let litroAbastecido = 0.0
    let opcaoAbastecimento = parseInt(prompt("Digite o número correspondente à opção com a qual deseja abastecer o seu carro:" + "\n 1 (Gasolina) \n 2 (Álcool)"));
    switch (opcaoAbastecimento) {
        case 1:
            precoDevido = Number(prompt("(O preço da gasolina por litro é de R$: 5.00) \n Digite o valor que deseja abastecer:"));
            litroAbastecido = precoDevido / precoLitroGasolina
            console.log("Você abasteceu o seu veículo com " + litroAbastecido + " litros de gasolina!");
            break;
        case 2:
            precoDevido = Number(prompt("(O preço do álcool por litro é de R$: 3.00) \n Digite o valor que deseja abastecer:"));
            litroAbastecido = precoDevido / precoLitroAlcool
            console.log("Você abasteceu o seu veículo com " + litroAbastecido + " litros de álcool!");
            break;
        default:
            console.log("Desculpe, não temos essa opção para abastecimento. Por favor, escolha uma opção válida.");
            break;
    }
}

// O USUÁRIO ESCOLHEU "OUTROS SERVIÇOS", AGORA ELE DEVE ESCOLHER O SERVIÇO QUE DESEJA USUFRUIR

else if (tipoServico === 2) {
    let opcaoServico = parseInt(prompt("Digite o número correspondente à opção do serviço que deseja: \n 1 (Calibrar pneus)"));
    switch (opcaoServico) {
        case 1:
            console.log("Pneus calibrados com sucesso!");
            break;
        default:
            console.log("Desculpe, não possuímos o serviço escolhido. Por favor, escolha um serviço válido.")
            break;
    }
}

// O USUÁRIO ESCOLHEU UMA OPÇÃO INVÁLIDA

else {
    console.log("Você escolheu uma opção inválida. Por favor, tente novamente.")
}