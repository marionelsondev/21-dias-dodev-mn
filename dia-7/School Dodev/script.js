// DECLARANDO VARIÁVEIS

let mediaGeral = 0.0;
let quantHomens = 0;
let quantMulheresNotaAcima7 = 0;
let maiorNotaHomens = 0;
let contador = 1;

// ESTRUTURA DE LOOP PARA A COLETA DE NOTAS DOS ALUNOS

while (contador <= 5) {
    nota = Number(prompt("Digite a nota do " + contador + "º aluno:"));
    sexoAluno = prompt("Informe o sexo do aluno: \n (m/f)");

    if (sexoAluno === "m") {
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        quantHomens++
    }

    if (sexoAluno === "f" && nota >= 7) {
        quantMulheresNotaAcima7++
    }

    mediaGeral += nota
    contador++
}

// MOSTRANDO OS RESULTADOS NO CONSOLE

console.log("A média geral dos alunos foi: " + mediaGeral / 5);
console.log("O total de homens que enviaram suas notas foi: " + quantHomens);
console.log("O total de mulheres que tiveram a nota acima de 7 foi: " + quantMulheresNotaAcima7);
console.log("A maior nota entre os homens foi: " + maiorNotaHomens);