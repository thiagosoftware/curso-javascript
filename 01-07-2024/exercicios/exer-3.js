/*
 - Crie uma const name, utilize um for loop para gerar um templante HTML.
 - Exiba no console o templante HTML que você gerou.
 - O resultado deve ser semlhante a:<li>João Grilo</li> <li>Chicó</li> <li>Rosinha</li>
*/

const names = ['João Grilo', 'Chicó', 'Rosinha', 'Thiago'];
let templantesNames = ``;

for (let i = 0; i < names.length; i++) {
    templantesNames += `<li>${names[i]}</li>`
}

console.log(templantesNames);