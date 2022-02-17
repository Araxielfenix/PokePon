window.onload = function() {
  document.getElementById("premio").style.display = "none";
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
    document.getElementById("premio").style.display = "block";
    let id = null;
    const elem = document.getElementById("premio");   
    let pos = 500;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 550) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px";  
      }
    }
}
//Onclick release button hide the pokemon div.
function hide() {
    document.getElementById("premio").style.display = "none";
}
//Funcion para refrescar la pagina al presionar el boton.
function refresh() {
    document.getElementById("premio").style.display = "none";
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