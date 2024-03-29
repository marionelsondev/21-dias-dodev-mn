// DECLARANDO VARIÁVEIS

let elemento = 0;
let alunos = [];
let notas = [];
let inserirMais = true;

// LOOP PARA ENTRADA DE DADOS DOS ALUNOS

while (inserirMais) {
    let nome = prompt(`Digite o nome do ${elemento + 1}º aluno(a):`);
    let nota = parseFloat(prompt(`Digite a nota do aluno(a) ${nome}:`));
    alunos[elemento] = nome
    notas[elemento] = nota
    let continuar = parseInt(prompt("Deseja inserir informações sobre outro aluno(a)?\n(1) Sim\n(2) Não"));
    if (continuar === 1) {
        inserirMais = true
        elemento++
    } else if (continuar === 2) {
        inserirMais = false
    } else {
        console.log("Você selecionou uma opção inválida. Por favor, tente novamente!")
        inserirMais = false
    }
}

// LOOP PARA A EXIBIÇÃO E SOMA DAS NOTAS DOS ALUNOS

let somaNotas = 0;
console.log("Notas dos alunos:")
for (let i = 0; i < alunos.length; i++) {
    console.log(`${alunos[i]} - ${notas[i]}`);
    somaNotas += notas[i];
}

// EXIBINDO NA TELA A SOMA DAS NOTAS DOS ALUNOS E A MÉDIA GERAL DA TURMA

let media = somaNotas / alunos.length
console.log(`A soma das notas foi: ${somaNotas}\nA média geral da turma foi: ${media}`);