/*
- Crie uma array chamada cities com algumas cidades.
- Crie uma array chamada upperCaseCities e declare ela vaiza.
- Utilizando for, pegue as cidades da lista cities e declare elas em maiúsculas na lista upperCaseCities
*/

const cities = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Floripa'];
let upperCaseCities = [];

for (let i = 0; i < cities.length; i++) {
    upperCaseCities.push(cities[i].toUpperCase());
}


console.table(cities);
console.table(upperCaseCities);