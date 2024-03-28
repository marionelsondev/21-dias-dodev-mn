let startHackClub = [];
let startHackClubInvertido = [];

// POPULANDO O ARRAY

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o elemento ${i + 1} que deseja registrar:`));
    startHackClub[i] = numero
}
console.log(`Array original: ${startHackClub}`)

// INVERTENDO O ARRAY

let contador = 4;
for (let i = 0; i < 5; i++) {
    startHackClubInvertido[i] = startHackClub[contador]
    contador--
}
console.log(`Array invertido: ${startHackClubInvertido}`);