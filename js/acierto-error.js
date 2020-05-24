/*var grupoCartas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
var grupoCartas2 = ["🌘", "🌑", "🌒", "🌓", "🌔", "🌚", "🌝", "🌛"];
var grupoCartas3 = ["🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🌾", "🌺"];
var totalCartas = grupoCartas.concat(grupoCartas2, grupoCartas3);
/* concatenar arrays*/
/*var nuevototalTarjetas = totalCartas.push("hola", 33);

var arrayAnidado = [
  ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"],
  ["🌘", "🌑", "🌒", "🌓", "🌔", "🌚", "🌝", "🌛"],
  ["🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🌾", "🌺"]
];
console.log(arrayAnidado[1][3]);*/

function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
  document
    .querySelector("#sonido-acierto")
    .cloneNode()
    .play();
}

function noAcertada(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
  });
  document
    .querySelector("#sonido-error")
    .cloneNode()
    .play();

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
