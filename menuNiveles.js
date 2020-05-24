function escribeNivel() {
  var escogeNivel = document.querySelector(".seleccionaNivel ul");
  niveles.forEach(function(elemento, indice) {
    var controlNivel = document.createElement("li");
    controlNivel.innerHTML =
      "<button class='nivel' data-nivel=" +
      indice +
      ">Nivel " +
      (indice + 1) +
      "</button>";
    escogeNivel.appendChild(controlNivel);
  });
}

function mostrarCambioNivel() {
  var nivel = parseInt(this.dataset.nivel); //convierte dato string en int
  subirNivel = nivel;
  nextNivel();
  iniciar();
}
function mostrarMenuNiveles(evento) {
  evento.StopPropagation();
  document.querySelector(".seleccionaNivel").classList.toggle("visible");
}

function ocultaMenuNivel() {
  document.querySelector(".seleccionaNivel").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closet(".seleccionaNivel")) {
    return;
  }
  document.querySelector(".seleccionaNivel").classList.remove("visible");
}

function teclaEsc(evento) {
  console.log(evento.key);
  if (evento.key === "escape") {
    ocultaMenuNivel();
  }
}
