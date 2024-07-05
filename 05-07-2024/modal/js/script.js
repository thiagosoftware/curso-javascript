const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

// // Exemplo de includes
// const classListArray = ["teste", "oi"];
// console.log(classListArray.includes("teste"))

button.addEventListener("click", function () {
  popup.classList.add("d-block");
});

popup.addEventListener("click", function (event) {
  const classListaClick = event.target.classList[0];
  const classNameArray = ["popup-close", "popup-link", "popup-wrapper"];

if (classNameArray.includes(classListaClick)) {
    popup.classList.remove('d-block')
}

});
