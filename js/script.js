{
    const Welcome = () => {
        console.log("cześć");
    }

    Welcome();

    const BackgroundToggle = () => {
        const themeName = document.querySelector(".js-themeName");
        const body = document.body

        body.classList.toggle("darkBackground")
        themeName.innerText = body.classList.contains("darkBackground") ? "Wyłącz" : "Włącz";
    }

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        
        buttonElement.addEventListener("click", () => BackgroundToggle());
    }

    init();
}