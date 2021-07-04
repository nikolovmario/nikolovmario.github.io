function goBack() {
    window.history.back();
}

function onLoad() {
    let container = document.getElementById("websites");
    for (let i = 1; i <= 4; i++) {
        let img = document.createElement("img");
        img.src = `${i}.jpg`;
        container.appendChild(img);
    }
}

window.addEventListener('load', onLoad);

function closeCV() {
    let container = document.getElementById("cv-container");
    container.style.display = "none";
    let count = 0;
    let interval = setInterval(() => {
        if (count > 250) {
            clearInterval(interval);
        } else count += 1;

        window.scrollBy(0, 5);
    }, 1);
}