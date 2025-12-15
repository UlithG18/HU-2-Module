const message = "Welcome to my portfolio page"
alert(message)

const about = document.getElementById("about-text");
const button = document.getElementById("text-btn");

button.addEventListener("click", () => {
    about.textContent = "You did it, the text has been changed . . ."
})