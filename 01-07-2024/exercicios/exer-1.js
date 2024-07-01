// Exibi os números de 0 a 5 na tela utilizando while

console.log('Utilizando while')

let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}



/////////////////////////////////////////////////////////////////////////


console.log('Utilizando função')

let numero = 0;

function exibirNumero() {
  while (numero <= 5) {
    console.log(`Número: ${numero}`);
    numero++;
  }
}

exibirNumero();
