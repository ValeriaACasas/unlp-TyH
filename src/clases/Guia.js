class Guia extends Persona {
    constructor(id, nombre, email) {
      super(id, nombre, email);
      this.calendario = new Map(); // clave: fecha, valor: actividad
    }
  
    estaDisponible(fecha) {
      return !this.calendario.has(fecha);
    }
  
    asignarActividad(fecha, actividad) {
      this.calendario.set(fecha, actividad);
    }
  }
  