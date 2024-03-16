// Declaração de variáveis

let nomeDoUsuario = 0;
let idadeDoUsuario = 0;
let alturaDoUsuario = 0;
let pesoDoUsuario = 0;

// Entrada de dados do usuário

nomeDoUsuario = prompt("Digite seu nome: ");
idadeDoUsuario = parseInt(prompt("Digite sua idade: "));
alturaDoUsuario = Number(prompt("Digite sua altura: "));
pesoDoUsuario = Number(prompt("Digite seu peso: "));

// Cálculos para obter o ano de nascimento(levando em conta o ano atual como 2023) e o IMC do usuário

let nascimentoDoUsuario = 0;
nascimentoDoUsuario = 2023 - idadeDoUsuario;

let imcDoUsuario = 0;
imcDoUsuario = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);

// Mostrando os resultados no console

console.log(
  "Olá " +
    nomeDoUsuario +
    ", você tem " +
    idadeDoUsuario +
    " anos, nasceu em " +
    nascimentoDoUsuario +
    ", tem " +
    alturaDoUsuario +
    " de altura, pesa " +
    pesoDoUsuario +
    "kg seu IMC é " +
    imcDoUsuario +
    " Kg/m²"
);
