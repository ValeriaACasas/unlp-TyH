class Reserva {
  constructor(cliente, experiencia, fecha, cantidadPersonas) {
    if (new Date(fecha) < new Date()) {
      throw new Error("No se puede crear una reserva para una fecha pasada.");
    }

    this.cliente = cliente;
    this.experiencia = experiencia;
    this.fecha = fecha;
    this.cantidadPersonas = cantidadPersonas;
    this.estado = 'generada';
    this.fechaCreacion = new Date();

  }
}

module.exports = Reserva;
