/* Verifica se um animal específico está presente em uma lista de animais */

const animals = ["macaco", "tucano", "elefante", "pavão", "hipopótamo", "leão"];

let animalsName = "cachorro";
let animalsInclud = animals.includes(animalsName);

switch (animalsInclud) {
    case true:
        console.log(`${animalsName} está na array "animals"`);
        break;

    default:
        console.log(`${animalsName} não está na array "animals"`);
        break;
}
