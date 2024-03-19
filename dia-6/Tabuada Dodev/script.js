// DECLARANDO VARIÁVEIS

let numTabuada = 0

// PERGUNTANDO PARA O USUÁRIO QUAL o NÚMERO DA TABUADA QUE ELE DESEJA VISUALIZAR

numTabuada = parseInt(prompt("Digite o número da tabuada que deseja visualizar: "));

// PRIMEIRO "FOR" UTILIZADO PARA DEFINIR QUE SERÁ PRINTADO NA TELA A TABUADA QUE O USUÁRIO ESCOLHEU + 2 NÚMEROS SUCESSORES

for (let quantTabuada = numTabuada; quantTabuada <= numTabuada + 2; quantTabuada++) {
    console.log("A tabuada do " + quantTabuada + " é: \n");

// SEGUNDO "FOR" PARA REALIZAR O CÁLCULO E EXIBIR A TABUADA DO NÚMERO CORRESPONDENTE

    for (let contador = 1; contador <= 10; contador++) {
        console.log(quantTabuada+ " X " + contador + " = " + quantTabuada * contador);
    }
    console.log("-----------------")
}