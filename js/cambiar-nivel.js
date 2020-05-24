function incrementarNivel() {
  subirNivel++;
}

function nextNivel() {
  var nivelText;
  var nivelText = subirNivel + 1;
  if (nivelText < 10) {
    nivelText = "0" + nivelText;
  }
  document.querySelector("#nivel").innerText = nivelText;
}

function cargarNuevonivel() {
  incrementarNivel();
  nextNivel();
  clearInterval(cronometro);
  iniciar();
}
