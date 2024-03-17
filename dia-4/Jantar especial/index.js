// Realizando a entrada de dados através de perguntas para o usuário

const fomeDoUsuario = prompt("Você está com fome? (sim/nao)");
const dinheiroDoUsuario = prompt("Você tem dinheiro suficiente para jantar no seu restaurante preferido? (sim/nao)");
const restaurante = prompt("O seu restaurante preferido está aberto? (sim/nao)");

// Resultado das perguntas

if (fomeDoUsuario === "nao" || dinheiroDoUsuario === "nao") {
    console.log("Hoje a janta será em casa");
} else if (dinheiroDoUsuario === "sim" && restaurante === "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!");
} else {
    console.log("Peça um delivery!");
}