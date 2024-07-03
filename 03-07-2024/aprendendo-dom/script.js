// Obtém o elemento do DOM com ID 'idNome'
let nome = document.getElementById("idNome");
let cidade = document.getElementById("idCity");

function mudar(event) {
  // Previne o comportamento padrão do evento, com o envio do formulário.

  if (nome.value.trim() == "") {
    alert("Preencha o campo nome");
  } else if (cidade.value.trim() == "") {
    alert("Preencha o campo cidade");
  } else {
    event.preventDefault();
    // Seleciona o elemnento que contém o ID titulo e altera seu texto através do .innerHTML
    document.getElementById("titulo").innerHTML = nome.value;
    // Seleciona o elemnento que contém o ID subtitulo e altera seu texto através do .innerHTML
    document.getElementById("subtitulo").innerHTML = cidade.value;
  }

  //Deixa os inputs limpos
  nome.value = "";
  cidade.value = "";

}
