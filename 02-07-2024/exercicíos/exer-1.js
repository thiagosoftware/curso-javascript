let bebidaEscolhida = prompt(
  "Escolha uma bebida entre: Água, Refrigerante ou Suco."
);
let message = "";

switch (bebidaEscolhida) {
  case "agua":
    message =
      "Substancia química cuja moléculas são formadas por dois átamos de hidrogênio e um de oxigênio.";
    break;
  case "refrigerante":
    message =
      "Bebida não alcoólica, que pode ser gaseificada ou a base de água mineral ou açucar.";
    break;
  case "suco":
    message = "Bebida produzida do líquido extraído de frutas.";
    break;
  default:
    message = "Bebida desconhecida.";
    break;
}

function escrever(frase) {
  document.write(frase + '<br> <br>');
}

escrever(message)
escrever("Agradecemos a participação.");
