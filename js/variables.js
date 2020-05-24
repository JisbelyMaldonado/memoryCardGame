var modalidadJuegoRela = false;
var maxMovimiento;
var maxSegundos;
var actualizarMovimiento = 0;
var detenerJuego = 20;
var cronometro;
var grupoCartas = [
  ["🌘", "🌑", "🍂", "🍃"],
  ["🌒", "🌓", "🍁", "🌾"],
  ["🌔", "🌚", "🌝", "🌛", "🌺", "🌻"]
];
//
var subirNivel = 0;
var niveles = [
  {
    lasCartas: grupoCartas[0],
    maxMovimiento: 10,
    maxSegundos: 20
  },
  {
    lasCartas: grupoCartas[0].concat(grupoCartas[1]),
    maxMovimiento: 14,
    maxSegundos: 40
  },
  {
    lasCartas: grupoCartas[0].concat(grupoCartas[1], grupoCartas[2]),
    maxMovimiento: 28,
    maxSegundos: 60
  }
];
