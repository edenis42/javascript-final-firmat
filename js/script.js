// Modal
// Abrir Modal
function showModal(event) {
    var modalLink = document.getElementById("modal-link");
    var modalImg = document.getElementById("modal-img");
    modalImg.setAttribute("src", './img/cat.png');
    modalLink.setAttribute("href", './img/cat.png');

    modal.style.display = "block";
}

var modal = document.getElementById('myModal');
var cardImgList = document.getElementsByClassName("card-img");

for (let index = 0; index < cardImgList.length; index++) {
    const cardImg = cardImgList[index];
    cardImg.addEventListener("click", showModal);
}

// Cerrar Modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}