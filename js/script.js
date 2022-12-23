console.log("cześć");

let buttonElement = document.querySelector(".js-button");
let body = document.body
let themeName = document.querySelector(".js-themeName")

buttonElement.addEventListener("click", () => {
    body.classList.toggle("darkBackground")

    themeName.innerText = body.classList.contains("darkBackground") ? "Wyłącz" : "Włącz";
});