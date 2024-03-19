// DECLARANDO AS VARIÁVEIS

let tipoContagem = prompt("Escolha o tipo de contagem: \n 1 (contagem crescente) \n 2 (contagem decrescente)");
let contagem = 0
let incrementoContagem = 0

// CONTADOR CRESCENTE, O USUÁRIO PODE ESCOLHER ENTRE UMA INCREMENTAÇÃO PADRAO E PERSONALIZADA

if (tipoContagem == 1) {
    let opcaoIncremento = parseInt(prompt("Você deseja prosseguir com o formato de contagem padrão ou personalizado? \n - No padrão a contagem é incrementada de 1 em 1 \n No personalizado você escolhe em quanto a contagem é incrementada \n 1 (padrão) \n 2 (personalizada)"));
    switch (opcaoIncremento) {
        case 1:
            contagem = parseInt(prompt("Digite até quanto deseja contar:"));
            for (let contador = 0; contador <= contagem; contador++) {
                console.log("A contagem está em: " + contador);
            }
            break;
        case 2:
            incrementoContagem = parseInt(prompt("Digite em quanto deseja que a contagem seja incrementada:"));
            contagem = parseInt(prompt("Digite até quanto deseja contar: "));
            for (let contador = 0; contador <= contagem; contador+=incrementoContagem) {
                console.log("A contagem está em: " + contador);
            }
            break;
}
}

// CONTADOR DECRESCENTE, O USUÁRIO PODE ESCOLHER ENTRE UMA INCREMENTAÇÃO PADRAO E PERSONALIZADA

else if (tipoContagem == 2) {
    let opcaoIncremento = parseInt(prompt("Você deseja prosseguir com o formato de contagem padrão ou personalizado? \n - No padrão a contagem é incrementada de 1 em 1 \n No personalizado você escolhe em quanto a contagem é incrementada \n 1 (padrão) \n 2 (personalizada)"));

    contagem = parseInt(prompt("Digite o número inicial desejado para o seu contador:"));
    switch(opcaoIncremento) {
        case 1:
            for (let contador = contagem; contador >= 0; contador--) {
                console.log("A contagem está em : " + contador);
            }
            break;
        case 2:
            incrementoContagem = parseInt(prompt("Digite em quanto deseja que a contagem seja incrementada de forma descrescente:"));
            for (let contador = contagem; contador >= 0; contador-=incrementoContagem) {
                console.log("A contagem está em: " + contador);
            }
            break;
    }
}
