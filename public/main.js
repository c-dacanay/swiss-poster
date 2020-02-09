
const colors = ['#9a9786', '#00a793', '#202121', '#d400d8', '#202121', '#f1ce00'];
x = document.getElementsByClassName("box");

window.onload = function () {
    switchColors();
}

window.onclick = function () {
    switchColors();
}

function switchColors() {
    for (i = 0; i < x.length; i++) {
        let random = Math.floor(Math.random() * 7);
        console.log(random)
        x[i].style.backgroundColor = colors[random];
    }
}
