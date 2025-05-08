
const Persona = require('./Persona');

class Guia extends Persona{
  constructor(dni, nombre, email) {
    super(dni, nombre, email)
    this.calendarioOcupado = new Map(); // fechas en las que ya tiene una actividad asignada
  }

  estaDisponible(fecha) {
    return !this.calendarioOcupado.has(fecha);
  }

 
  mostrarCalendario() {
    if (this.calendarioOcupado.size === 0) {
      console.log(`  ${this.nombre} no tiene actividades asignadas a fechas.`);
    } else {
      console.log(`  Fechas ocupadas por ${this.nombre}:`);
      this.calendarioOcupado.forEach((experiencia, fecha) => {
        console.log(`    - Fecha: ${fecha}, Actividad: ${experiencia.nombre}`);
      });
    }
  }
  
}

module.exports = Guia;
