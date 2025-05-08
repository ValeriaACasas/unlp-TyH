const ExperienciaTuristica = require('./ExperienciaTuristica');

class Actividad extends ExperienciaTuristica {
  constructor(nombre, capacidadMaxima, precioBase, descuentoPorcentaje, descuentoCantidadPersonas, esGuiada) {
    super(nombre, capacidadMaxima, precioBase, descuentoPorcentaje, descuentoCantidadPersonas);
    this.esGuiada = esGuiada;
  }

  requiereGuia() {
    return this.esGuiada;
  }
}

module.exports = Actividad;
