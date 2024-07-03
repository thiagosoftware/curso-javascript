// Obtém os botões do DOM
let btnMudarCor = document.getElementById('btnMudarCor');
let btnVoltarCor = document.getElementById('btnVoltarCor');

// Adiciona um evento de clique ao botão 'Mudar cor de fundo'
btnMudarCor.addEventListener('click', function() {
    document.body.style.color = '#FFFFFF';
    document.body.style.background = '#008B45';
});

// Adiciona um evento de clique ao botão 'btnVoltarCor'
btnVoltarCor.addEventListener('click', function() {
    document.body.style.color = '#000000';
    document.body.style.background = '';
})