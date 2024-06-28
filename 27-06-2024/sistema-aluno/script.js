const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// Criando uma função para limpar o compo.
function clearForm() {
    inputNota.value = "";
}


// Criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputNotaValue = inputNota.value;

    // Validação de formulário
    if (inputNotaValue === "") {
        alert(`Preencha o campo obrigátorio.`)  ;
        return false;
    }

    // Lógica
    if(inputNotaValue >= 6) {
       alert(`A sua nota é ${inputNotaValue}, você está aprovado!`)
    } else {
        alert(`A sua nota é ${inputNotaValue}, você está reprovado!`)
    }

    // Chamando a função clearForm() para limpar o campo.
    clearForm();
});