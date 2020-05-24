function finJuego() {
  clearInterval(cronometro);
  document.querySelector("#gameOver").classList.add("visible");
}

function tiempoFinal() {
  document.querySelector("#timeOver").classList.add("visible");
}
