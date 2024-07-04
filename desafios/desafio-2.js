/*
02 - 
  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."

  */
  const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];
  const ramdomPositivo = [];
  const ramdomNegativo = [];

  function numbersPositivo( ){
    for (let i = 0; i > randomNumbers.length; i++) {
      if (randomNumbers[i] >= 0) {
        ramdomPositivo.push(randomNumbers[i])
      } else {
        ramdomNegativo.push(ramdomNumber[i])
      }
    }

    console.log(ramdomNumber);


  }

  numbersPositivo()