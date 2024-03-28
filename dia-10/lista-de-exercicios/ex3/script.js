let startHackClub = [];
let startHackClubInvertido = [];
let quantInputElements = parseInt(prompt("Digite quantos números deseja inserir no array:"));

for (let i = 0; i < quantInputElements; i++) {
    let numero = parseInt(prompt(`Digite o elemento ${i + 1}º que deseja registrar:`));
    startHackClub[i] = numero
}
console.log(`Array original: ${startHackClub}`);

let contadorInverso = (quantInputElements - 1);
for (let i = 0; i < quantInputElements; i++) {
    startHackClubInvertido[i] = startHackClub[contadorInverso]
    contadorInverso--
}
console.log(`Array invertido: ${startHackClubInvertido}`);