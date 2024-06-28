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
    // console.log(inputNotaValue);


    // Validação de formulário
    if (inputNotaValue === "") {
        alert("Preencha o campo nota!");
        return false;
    }

    // Lógica
    if(inputNotaValue >= 6) {
        alert("Você está aprovado");
    } else {
        alert("Você está reprovado");
    }

    // Chamando a função clearForm() para limpar o campo.
    clearForm()
});