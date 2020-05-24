escribeNivel();

document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", resetear);
});
document
  .querySelector("#nivelIntenso")
  .addEventListener("click", iniciarIntenso);

document.querySelector("#nivelRela").addEventListener("click", iniciarRela);

document.querySelector("#boton-nivel").addEventListener("click", mostrarNivel);
document
  .querySelector("#cierraNiveles")
  .addEventListener("click", ocultaMenuNivel);

document.querySelectorAll(".nivel").forEach(function(elemento) {
  elemento.addEventListener("click", mostrarCambioNivel);
});
document
  .querySelector("#siguienteNivel")
  .addEventListener("click", cargarNuevonivel);
document.addEventListener("click", clickFueraDeMenu);
document.addEventListener("keydown", teclaEsc);

document.querySelector("#bienvenida").classList.add("visible");

//$(document).ready(function() {
//  $("#boton-nivel").on("click", function() {
//    $(".selecciona-nivel").toggle(".visible");
//  });
//});
