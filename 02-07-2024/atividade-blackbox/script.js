let diaEscolhido = prompt("Qual é seu dia favorito da semana?");

switch (diaEscolhido) {
  case 'segunda':
    alert("Você escolheu Segunda-feira");
    break;
  case 'terca':
    alert("Você escolheu Terça-feira");
    break;
  case 'quarta':
    alert("Você escolheu Quarta-feira");
    break;
  case 'quinta':
    alert("Você escolheu Quinta-feira");
    break;
  case 'sexta':
    alert("Você escolheu Sexta-feira");
    break;
  case 'sabado':
    alert("Você escolheu Sábado");
    break;
  case 'domingo':
    alert("Você escolheu Domingo");
    break;
  default:
    alert("Opção inválida. Por favor, escolha um dia da semana.");
    break;
}