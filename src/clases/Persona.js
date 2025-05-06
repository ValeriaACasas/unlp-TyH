class Persona {
  constructor(id, nombre, email) {
    if (new.target === Persona) throw new Error("Clase abstracta");
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }
}
