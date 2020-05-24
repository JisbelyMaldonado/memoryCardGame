function actualizarContadorjugada() {
  var movimientoTxt;
  actualizarMovimiento++;
  movimientoTxt = actualizarMovimiento;

  if (
    actualizarMovimiento > niveles[subirNivel].maxMovimiento &&
    !modalidadJuegoRela
  ) {
    finJuego();
    return;
  }

  if (movimientoTxt < 10) {
    movimientoTxt = "0" + actualizarMovimiento;
  }
  document.querySelector("#utilizadas").innerText = movimientoTxt;
}

function limiteSuperado() {
  var limiteMovimiento = niveles[subirNivel].maxMovimiento;
  if (limiteMovimiento < 10) {
    limiteMovimiento = "0" + limiteMovimiento;
  }
  document.querySelector("#limite").innerText = limiteMovimiento;
}
