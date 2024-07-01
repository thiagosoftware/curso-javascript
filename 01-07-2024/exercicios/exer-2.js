// Realizar através de while a tabuada do 4

let numeroFixo = 4;
let numero = 0;

function tabuadaDo4() {
  while (numero <= 10) {
    let resultado = parseInt(numeroFixo * numero);
    console.log(`${numero} * ${numeroFixo} = ${resultado}`);
    numero++;
  }
}

tabuadaDo4();