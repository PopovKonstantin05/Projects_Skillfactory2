const mainButton = document.getElementById("main__button");
const mainButton2 = document.getElementById("main__button2");
const picturesArea = document.querySelector(".main__pictures");
const loaderArea = document.querySelector(".loader__area");

async function getImages() {
    loaderArea.style.display = "flex";
    picturesArea.innerHTML = "";
    try{
        let urlImages = await fetch("https://dog.ceo/api/breeds/image/random/25");
        if(!urlImages.ok){
            throw new Error("Картинки не были получены с сервера!!!");
        }
        let res = await urlImages.json();
        if(picturesArea.innerHTML != "") {
            return;
        }
        picturesArea.style.border = "2px solid #5c5b5b";
        picturesArea.style.borderRadius = "15px";
        for(let i = 0; i < res.message.length; i++) {
            const img = `<img class="main__picture" src="${res.message[i]}" alt="Рандомная картинка с собакой"></img>`;
            picturesArea.innerHTML += img;
        }
    } catch(e) {
        console.error(error.message);
    } finally {
        loaderArea.style.display = "none";
    }
}

mainButton.addEventListener("click", () => {
    picturesArea.style.display = "grid";
    getImages();
});
mainButton2.addEventListener("click", () => {
    picturesArea.style.display = "none";
});