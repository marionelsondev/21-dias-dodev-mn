let modelos = [];
let anos = [];
let valores = [];
let continuar = true
let elemento = 0;

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

for (i = 0; i < modelos.length; i++) {
    console.log(`${modelos[i]} - ${anos[i]}\nValor: ${valores[i]}`);
}