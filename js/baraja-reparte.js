function barajaTarjetas(lasTarjetas) {
  var totalCartas = lasTarjetas.concat(lasTarjetas);
  var resultado = totalCartas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}
function reparteTarjetas(lasTarjetas) {
  var cartasBarajadas = barajaTarjetas(lasTarjetas);
  /*Se crea la funcion*/
  var mesa = document.querySelector(
    "#mesa"
  ); /*Se crea var. y se  accede al id mesa del doc. html*/
  mesa.innerHTML =
    ""; /* se indica que el elemento mesa debe estar vacion en el doc html*/

  cartasBarajadas.forEach(function(elemento) {
    /* se crea el loop*/
    var tarjeta = document.createElement(
      "div"
    ); /* se crea el elemento div virtual en la var tarjeta*/
    tarjeta.innerHTML /* se accede a tarjeta y se aplica estilos de css*/ =
      "<div class='cartas' data-valor=" +
      elemento +
      ">" +
      "<div class='cartastable'>" +
      elemento +
      "</div>" +
      "</div>";
    mesa.appendChild(
      tarjeta
    ); /* se indica que la var tarjeta es un hijo en el arbol de la var mesa*/
  });
}
