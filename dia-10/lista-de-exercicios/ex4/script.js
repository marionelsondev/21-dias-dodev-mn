// DECLARANDO VARIÁVEL E ARRAY PARA ENTRADA DE DADOS

let numeroFibonnaci = parseInt(prompt("Digite o número que deseja executar a sequência fibonacci:"));
let fibonacci = [];

// ATRIBUINDO VALOR ÀS 2 PRIMEIRAS POSIÇÕES | PADRÃO DO FIBONACCI(O PRÓXIMO NÚMERO DA SEQUÊNCIA É A SOMA DOS 2 NÚMEROS ANTERIORES)

fibonacci[0] = numeroFibonnaci - 1
fibonacci[1] = numeroFibonnaci

// CRIANDO O LOOP

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

// EXIBINDO NA TELA

console.log(`Array original é: ${fibonacci}`);