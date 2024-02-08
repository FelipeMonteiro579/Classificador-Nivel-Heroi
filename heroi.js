
const prompt = require("prompt-sync")({ sigint: true });

let nome;
let xp;
let nivel;

console.log("=======================================");
console.log("    Classificador de nível de herói    ");
console.log("=======================================");

nome = prompt("--> Informe seu nome de herói: ");
xp = prompt("--> Informe seu xp: ");

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else{
    nivel = "Radiante";
}

console.log(" ");
console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
console.log(" ");

//npm install prompt-sync