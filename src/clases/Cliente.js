const Persona = require('./Persona');

class Cliente extends Persona {
  constructor(dni, nombre, email) {
    super(dni, nombre, email);
    this.reservas = [];
  }

  agregarReserva(reserva) {
    this.reservas.push(reserva);
  }
}

module.exports = Cliente;
