function descubrir() {
  var descubierta;
  var tarjetasPendientesD;
  var totalDescubierta = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );
  if (totalDescubierta.length > 1) {
    return;
  }
  document
    .querySelector("#sonido-carta")
    .cloneNode()
    .play();
  this.classList.add("descubierta");

  descubierta = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubierta.length < 2) {
    return;
  }

  compara(descubierta);
  actualizarContadorjugada();
  tarjetasPendientesD = document.querySelectorAll(".cartas:not(.acertada)");
  if (tarjetasPendientesD.length === 0) {
    finalizar();
  }
}

function compara(tarjetasAcomparar) {
  if (
    tarjetasAcomparar[0].dataset.valor === tarjetasAcomparar[1].dataset.valor
  ) {
    acierto(tarjetasAcomparar);
  } else {
    noAcertada(tarjetasAcomparar);
  }
}
