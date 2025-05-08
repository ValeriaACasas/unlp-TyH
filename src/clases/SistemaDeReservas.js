const Cliente = require('./Cliente');
const Guia = require('./Guia');



class SistemaDeReservas {
  constructor() {
    this.clientes = [];
    this.guias = [];
    this.experiencias = [];
    this.reservas = [];
  }

  crearCliente(dni, nombre, email) {
    const cliente = new Cliente(dni, nombre, email);
    this.clientes.push(cliente);
    return cliente;
  }

  crearGuia(dni, nombre, email) {
    const guia = new Guia(dni, nombre, email);
    this.guias.push(guia);
    return guia;
  }




}

module.exports = SistemaDeReservas;
