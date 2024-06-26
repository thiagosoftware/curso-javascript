let txt = "Estão chegando as provas.";

//retorna a variavel definida
console.log(txt)

//retorna o tamanho do texto.
console.log(txt.length);

//retorna a primeira posição.
console.log(txt.indexOf("as"));

//retorna a última posição.
console.log(txt.lastIndexOf("as"));

//retorna a parte do texto selecionado, no caso da letra 0 a 5.
console.log(txt.slice(0, 5))

//troca parte da sua variavel por outra.
console.log(txt.replace("as provas", "os exames"))  

//retorna o texto em maiúscula
console.log(txt.toUpperCase());

//retorna o texto em minusculas.
console.log(txt.toLowerCase());