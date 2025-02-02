const wsURL = "wss://echo.websocket.org/";

const input = document.querySelector('.header__input');
const btnSend = document.querySelector('.header__button-send');
const btnLocation = document.querySelector('.header__button-location');
const output = document.querySelector('.main');

let ws = new WebSocket(wsURL);
ws.onopen = () => {
    console.log("Connected");
};
ws.onerror = () => {
    console.log("Error");
};

function writeMessageSend(mes){
    let message = document.createElement("p");
    message.classList.add("main__send");
    message.innerHTML = mes;
    output.appendChild(message);
}

function writeMessageServer(mes){
    let message = document.createElement("p");
    message.classList.add("main__server");
    message.innerHTML = mes;
    output.appendChild(message);
}

btnSend.addEventListener("click", () => {
    const message = input.value;
    if(!(message === "")){
        writeMessageSend(message); //сообщение отправителя
    }

    ws.onmessage = function(mes) {
        if(!(message === "")){
            writeMessageServer(mes.data);
        }
    };
    ws.send(message); //сообщение от сервера
    input.value = "";
});

const errorLocation = () => {
    alert("Невозможно получить ваше местоположение!");
}

const successLocation = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    let message = document.createElement("a");
    message.classList.add("main__link");
    message.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    message.textContent = 'Ваша геолокация';
    message.target = "_blank";
    output.appendChild(message);
}

btnLocation.addEventListener("click", () => {
    if (!navigator.geolocation) {
        alert("Браузеру не удалось установить ваше местоположение!");
    } else {
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
    }
});