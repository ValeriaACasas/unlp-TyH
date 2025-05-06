class ExperienciaTuristica {
  constructor(nombre, capacidadMaxima, precioBase, descuentoPorcentaje, descuentoCantidadPersonas) {
    if (new.target === ExperienciaTuristica) throw new Error("Clase abstracta");
    this.nombre = nombre;
    this.capacidadMaxima = capacidadMaxima;
    this.precioBase = precioBase;
    this.descuentoPorcentaje = descuentoPorcentaje;
    this.descuentoCantidadPersonas = descuentoCantidadPersonas;
    this.fechasDisponibles = new Map();
  }

  requiereGuia() {
    throw new Error("Método abstracto");
  }
}

module.exports = ExperienciaTuristica;
