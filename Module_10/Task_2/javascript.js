const button = document.querySelector(".main__button");

button.addEventListener("click", () => {
    alert(`Ширина экрана - ${window.screen.width} пикселей, высота экрана - ${window.screen.height} пикселей`);
});