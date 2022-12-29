{
    const Welcome = () => {
        console.log("cześć");
    }

    const toggleBackground = () => {
        const themeName = document.querySelector(".js-themeName");
        const body = document.body

        body.classList.toggle("body--darkBackground")
        themeName.innerText = body.classList.contains("body--darkBackground") ? "Wyłącz" : "Włącz";
    }

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        
        buttonElement.addEventListener("click", toggleBackground);

        Welcome();
    }

    init();
}