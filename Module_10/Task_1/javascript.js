const button = document.querySelector(".main__button");
const button_content1 = document.querySelector(".button__content1");

button_content1.style.display = "block";
button.addEventListener("click", () => {
    if(button_content1.style.display === "block"){
        button_content1.style.display = "none";
        button.innerHTML = `<div class="button__content2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="45" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768z"/>
                                </svg>
                            </div>`;
    } else {
        button_content1.style.display = "block";
        button.innerHTML = `<div class="button__content1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="45" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768z"/>
                                </svg>
                            </div>`;
    }
});