function finalizar() {
  if (subirNivel < niveles.length - 1) {
    document.querySelector(".feedback").classList.add("visible");
  } else {
    document.querySelector("#juegoSuperado").classList.add("visible");
  }
}
