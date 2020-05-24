function iniciarCronometro() {
  var minutos = 0;
  var segundos = niveles[subirNivel].maxSegundos;
  var segundosActualizados;
  var minutosActualizados;

  function actualizarCronometro() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      tiempoFinal();
    }

    segundosActualizados = segundos;
    minutosActualizados = minutos;
    if (segundos < 10) {
      segundosActualizados = "0" + segundos;
    }
    if (minutos < 10) {
      minutosActualizados = "0" + minutos;
    }

    document.getElementById("segundos").innerHTML = segundosActualizados;
    document.getElementById("minutos").innerHTML = minutosActualizados;
  }

  document.querySelector("#segundos").innerHTML = segundos;
  cronometro = setInterval(actualizarCronometro, 1000);
}
