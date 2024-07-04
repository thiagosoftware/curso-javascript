// Obtém os elementos do DOM

// Obtém os valores para a soma
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

// Botões
const btnSomar = document.getElementById("btnSomar");
const btnSubtrair = document.getElementById('btnSubtrair');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir')

// Span de resultado
let resultado = document.getElementById("resultado");

btnSomar.addEventListener("click", function () {
  let soma = Number(valor1.value) + Number(valor2.value);

  // Exibe o resultado na tela.
  resultado.textContent = soma;

  setTimeout(function() {
    resultado.textContent = 0
    valor1.value = "";
    valor2.value = "";
  }, 2000)
});

btnSubtrair.addEventListener('click', function() {
    let subtrair =Number(valor1.value) - Number(valor2.value);

    // Exibe o resultado na tela
    resultado.textContent = subtrair;

    setTimeout(function() {
        resultado.textContent = 0;
        valor1.value = "";
        valor2.value = "";
    }, 2000)
})

btnMultiplicar.addEventListener('click', function() {
    let multiplicar = Number(valor1.value) * Number(valor2.value);
    resultado.textContent = multiplicar;

    setTimeout(function() {
        resultado.textContent = 0;
        valor1.value = "";
        valor2.value = "";
        
    }, 2000)
})

btnDividir.addEventListener('click', function() {
    let dividir = Number(valor1.value) / Number(valor2.value)

    resultado.textContent = dividir;

    setTimeout(function () {
        resultado.textContent = 0; 
        valor1.value = "";
        valor2.value = "";
    }, 2000)
})