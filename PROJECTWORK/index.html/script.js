
document.getElementById("colorButton").onclick = function() {
    const headers = document.querySelectorAll("h2");
    headers.forEach(header => {
        header.style.color = getRandomColor();
    });
};


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
