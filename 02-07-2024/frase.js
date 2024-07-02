/**
 * Vamos criar um programa que o usuário executa uma 
 * função e dentro dessa função existe uma frase.
*/

function pularLinha() {
    document.write('<br>');
}

function exibirFrase(frase) {
    document.write(frase);
}

exibirFrase('JavaScript com lógica.');
pularLinha();
pularLinha();
exibirFrase('Aprendendo funções em JavaScript.');