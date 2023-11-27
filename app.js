import Clases from "./utils/clases.js";

let personita = new Clases.Estudiante('Pepe', '25', 'Helicoperto de Combate')

let alumni = new Clases.Estudiante('Javi', '30', 'H', '4', 'Fullstack')

let leadIstructor = new Clases.Profesor('Alejandra', '20', 'M', '2', 'DataSicence')

console.log(personita.obtDetalles)
console.log('------------')
console.log(alumni.registrar)
console.log('--------------')
console.log(leadIstructor.asignar)