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

// Agregar like

function like(event) {
    event.target.classList.toggle('like');
}

var icono = document.querySelector('.fa-heart');
icono.addEventListener("click", like);
// icono.onclick =  like;


// Agregar Targeta
function agregarCard() {
    // cotenedor de cards
    var cardContainer = document.getElementById('card-container');
    
    var card = document.createElement('div');
    card.classList.add('card')

    var imagen = document.createElement('img');
    imagen.classList.add('card-img');
    imagen.setAttribute('src', './img/cat.png');
    imagen.setAttribute('alt', 'palceholder');
    imagen.addEventListener("click", showModal);
    card.appendChild(imagen);


    var icono = document.createElement('i');
    icono.classList.add('fa-solid', 'fa-heart');
    icono.onclick =  like;

    var actions = document.createElement('div');
    actions.classList.add('card-actions');

    actions.appendChild(icono);
    card.appendChild(actions);

    cardContainer.appendChild(card);
}

// Agregar favoritos
function verFavoritos() {
    console.log("verFavoritos");

    // 1. Conseguir con el document.querySelectorAll todos los iconos que tienen la clase fa-heart
    // 2. Iterar el resultado, y verificar si el icono tiene la clase 'like'
    // 3. Si no tiene la clase like, tengo que ocultar al padre del padre

    var iconos = document.querySelectorAll('.fa-heart');
    console.log("mostrar iconos: ", iconos);
    
    for (let index = 0; index < iconos.length; index++) {
        var icono = iconos[index];
        var tieneClassLike = icono.classList.contains('like');
        
        if (tieneClassLike == false) {
            var card = icono.parentNode.parentNode;
            card.style.display = 'none';
        }
    }
}

function verTodos() {

    var iconos = document.querySelectorAll('.fa-heart');

    for (let index = 0; index < iconos.length; index++) {
        const icono = iconos[index];
        var card = icono.parentNode.parentNode;
        card.style.display = 'block';
    }

}