function escribeNivel() {
  var escogeNivel = document.querySelector(".selecciona-nivel ul");
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

function mostrarNivel(evento) {
  evento.stopPropagation(evento);
  document.querySelector(".selecciona-nivel").classList.toggle("visible");
}
function ocultaMenuNivel() {
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest(".selecciona-nivel")) {
    return;
  }
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function teclaEsc(evento) {
  if (evento.key === "Escape") {
    ocultaMenuNivel();
  }
}
