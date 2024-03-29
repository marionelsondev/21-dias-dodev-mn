// DECLARANDO VARIÁVEIS

let modelos = [];
let anos = [];
let valores = [];
let continuar = true
let elemento = 0;

// CADASTRANDO OS CARROS -> MODELO, ANO, VALOR

while (continuar) {
    let modelo = prompt(`Qual o modelo do ${elemento + 1}º carro?`);
    let ano = parseInt(prompt(`Qual o ano desse ${modelo}?`));
    let valor = parseFloat(prompt(`Qual o valor desse ${modelo} de ${ano}?`));
    modelos[elemento] = modelo;
    anos[elemento] = ano;
    valores[elemento] = valor;
    let maisCadastro = parseInt(prompt("Deseja cadastrar um novo modelo?\n(1) Sim\n(2) Não"));
    if (maisCadastro === 1) {
        continuar = true
        elemento++
    } else if (maisCadastro === 2) {
        continuar = false
    } else {
        console.log("Você escolheu uma opção inválida. Por favor, tente novamente!")
    }
}

// EXIBINDO OS CARROS CADASTRADOS

console.log("Carros cadastrados:")
for (i = 0; i < modelos.length; i++) {
    console.log(`${modelos[i]} - ${anos[i]}\nValor: ${valores[i]}`);
}

// ALGORITMO DE ORDENAÇÃO(BUBBLE SORT) PARA ORDENAR OS VALORES DOS CARROS EM ORDEM CRESCENTE

for (let contadorEscopoGlobal = 0; contadorEscopoGlobal < valores.length - 1; contadorEscopoGlobal++) {
    for (let contadorProcesso = 0; contadorProcesso < valores.length - contadorEscopoGlobal - 1; contadorProcesso++) {
        if (valores[contadorProcesso] > valores[contadorProcesso + 1]) {

            let maiorValorModelo = modelos[contadorProcesso]
            modelos[contadorProcesso] = modelos[contadorProcesso + 1]
            modelos[contadorProcesso + 1] = maiorValorModelo

            let maiorValorAno = anos[contadorProcesso]
            anos[contadorProcesso] = anos[contadorProcesso + 1]
            anos[contadorProcesso + 1] = maiorValorAno

            let maiorValor = valores[contadorProcesso]
            valores[contadorProcesso] = valores[contadorProcesso + 1]
            valores[contadorProcesso + 1] = maiorValor
        }
    }
}

// EXIBINDO OS CARROS CADASTRADOS ORDENADOS POR PREÇO EM ORDEM CRESCENTE

console.log("Carros ordenados por preço:")
for (i = 0; i < valores.length; i++) {
    console.log(`${modelos[i]} - ${anos[i]}\nValor: ${valores[i]}`);
}