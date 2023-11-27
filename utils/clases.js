class Persona {
  #nombre
  #edad 
  #genero
  constructor(nombre,edad,genero){
    this.#nombre=nombre
    this.#edad=edad
    this.#genero=genero
  }

  set setNombre(nombre) { this.#nombre=nombre }
  get getNombre() { return this.#nombre }

  set setEdad(edad) { this.#edad=edad }
  get getEdad() { return this.#edad }
  
  set setGenero(genero) { this.#genero=genero }
  get getGenero() { return this.#genero }

  get obtDetalles(){
    console.log(`Hola ${this.#nombre} eres ${this.#genero} y tienes ${this.#edad} años`)
  }

}

class Estudiante extends Persona {
  #curso
  #grupo
  constructor(nombre,edad,genero,curso,grupo){
    super(nombre,edad,genero)
    this.#curso=curso
    this.#grupo=grupo
  }

  set setCurso(curso) { this.#curso=curso }
  get getCurso() { return this.#curso }

  set setGrupo(grupo) { this.#grupo=grupo }
  get getGrupo() { return this.#grupo }

  get registrar(){
    this.obtDetalles
    console.log(`Estas haciendo ${this.#curso} perteneces a ${this.#grupo}`);
  }
}

class Profesor extends Persona {
  #asignatura
  #nivel
  constructor(nombre,edad,genero,nivel,asignatura){
    super(nombre,edad,genero)
    this.#asignatura=asignatura
    this.#nivel=nivel
  }

  set setAsignatura(asignatura) { this.#asignatura=asignatura }
  get getAsignatura() { return this.#asignatura }

  set setNivel(nivel) { this.#nivel=nivel }
  get getNivel() { return this.#nivel }

  get asignar(){
    this.obtDetalles
    console.log(`Estas impartiendo ${this.#nivel} de ${this.#asignatura}`);
  }
}

export default {Persona,Estudiante,Profesor}