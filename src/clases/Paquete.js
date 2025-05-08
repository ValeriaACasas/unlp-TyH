const ExperienciaTuristica = require('./ExperienciaTuristica');

class Paquete extends ExperienciaTuristica {
  constructor(nombre, actividades, precioBase, descuentoPorcentaje, descuentoCantidadPersonas) {
    const capacidadMinima = Math.min(...actividades.map(a => a.capacidadMaxima)); //necesito el minimo de todas las actividades para setear el maximo cupo del paquete
    super(nombre, capacidadMinima, precioBase, descuentoPorcentaje, descuentoCantidadPersonas);
    this.actividades = actividades;
  }

  requiereGuia() {
    //si alguna actividad requiere guia, el paquete lo requiere
    return this.actividades.some(a => a.requiereGuia());
  }


  agregarFecha(fecha) {
    super.agregarFecha(fecha);
    this.actividades.forEach(a => a.agregarFecha(fecha));
  }

  quitarFecha(fecha) {
    super.quitarFecha(fecha);
    this.actividades.forEach(a => a.quitarFecha(fecha));
  }
}

module.exports = Paquete;
