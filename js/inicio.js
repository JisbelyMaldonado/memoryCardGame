function iniciar() {
  actualizarMovimiento = 0;
  //document.querySelector("#bienvenida").classList.remove("visible");
  reparteTarjetas(niveles[subirNivel].lasCartas);

  document.querySelector("#utilizadas").innerText = "00";
  limiteSuperado();
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  //document.querySelector(".siguienteNivel").classList.remove("visible");
  document.querySelector("#juegoSuperado").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector(".feedback").classList.remove("visible");

  document.querySelectorAll(".cartas").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });
  if (!modalidadJuegoRela) {
    iniciarCronometro();
    //ocultaMenuNivel();
  } else {
    document.querySelector("#conCronometro").classList.add("cronometro-oculto");
    //mostrarMenuNiveles();
  }
}

function resetear() {
  subirNivel = 0;
  nextNivel();
  iniciar();
}

function iniciarIntenso() {
  modalidadJuegoRela = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".boton-nivel").classList.add("control-oculto");
}
function iniciarRela() {
  modalidadJuegoRela = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
}
