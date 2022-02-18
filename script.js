let contador;
let Nombre;
let Sprite;

window.onload = function() {
    document.body.style.zoom="99%"
    hide();
    for (let i = 1; i <= 17; i++) {
        // Get the element
        var elem = document.querySelector('#Ball');
        var clone = elem.cloneNode(true);
        clone.id = 'elem2'; 
        clone.classList.add('text-large');
        // Inject it into the DOM
        elem.after(clone); 
        contador = i;
    }
    getName(); 
};


//Al momento de pasar el mouse por encima del boton, oscurecer el color del boton.
function oscurecer() {
    document.getElementById("container4").style.backgroundColor = "#b7b7b7";
    document.getElementById("container4").style.cursor = "pointer";
}
//Al momento de quitar el mouse del boton, mostrar el color original del boton.
function mostrar() {
    document.getElementById("container4").style.backgroundColor = "#2174e0";
}
//Funcion que se ejecuta al pulsar el boton.
function myMove() {
    document.getElementById("Pokemon").src = "";
    if(contador > 0){
        removeImage("elem2");
        contador--;
    }
    else{
        document.getElementById("Ball").style.display = "none";
    }
    document.getElementById("premio").style.display = "block";
    let id = null;
    const elem = document.getElementById("premio");   
    let pos = 580;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 620) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px";  
      }
    }
    getName();
    setTimeout(function(){
    document.getElementById("Pokemon").src = Sprite;
    document.getElementById("NombrePkmn").innerHTML = Nombre;
    }, 1700);
    setTimeout(hide, 1700);
    Animation = setInterval(function(){document.getElementById("pokemon").style.animation = "pokemon-animation 1s";}, 1500);
}
//Funcion para refrescar la pagina al presionar el boton.
function refresh() {
    location.reload();
}
//Al momento de pasar el mouse por encima del boton, oscurecer el color del boton.
function oscurecerF5() {
    document.getElementById("F5").style.backgroundColor = "#b7b7b7";
    document.getElementById("F5").style.cursor = "pointer";
}
//Al momento de quitar el mouse del boton, mostrar el color original del boton.
function mostrarF5() {
    document.getElementById("F5").style.backgroundColor = "#2174e0";
}
function removeImage(id) {
    var elementToBeRemoved = document.getElementById(id);
    elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
}
//Onclick release button hide the pokemon div.
function hide() {
    document.getElementById("premio").style.display = "none";
}
//Funcion que obtiene el nombre del pokemon y lo guarda en la variable Nombre.
function getName() {
    document.getElementById("NombrePkmn").innerHTML = "";
    //Realiza un random entre 1 y 649.
    let random = Math.floor(Math.random() * 649) + 1;
    Nombre = "https://pokeapi.co/api/v2/pokemon/" + random;
    //fetch de la url para obtener el nombre del pokemon.
    fetch(Nombre)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        Nombre = myJson.name;
    })
    Sprite = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/" + random + ".svg";
}