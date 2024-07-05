let range = document.getElementById('range');
let divValue = document.getElementById('rangeValue');


range.addEventListener('input', function() {
    let value = range.value;
    divValue.textContent = value;
})