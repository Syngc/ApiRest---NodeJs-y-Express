const express = require('express')
const bodyParser = require('body-parser');
const myApp = express();

myApp.use(bodyParser.json());
myApp.use(bodyParser.urlencoded({ extended: true }));

//Persona
myApp.get('/persona', function (req, res) {
  res.status(200).send({personas: [personas]});
});

myApp.get('/persona/:id', function (req, res) {
  var found = personas.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'La persona no existe'});
  }
  res.status(200).send({personas: [personas[found]]});
});

myApp.post('/persona', (req, res) => {
  bod = req.body;
  per = new persona();
  per.id = bod.id;
  per.nombre =  bod.nombre;
  per.edad = bod.edad;
  personas.push(per);
  res.status(200).send({message: 'La persona ha sido agregada'});
});

myApp.put('/Persona/:id', (req, res) =>{
  var found = personas.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'La persona no existe'});
  }
  personas[found].nombre = valor(req.body.nombre, personas[found].nombre);
  personas[found].edad = valor(req.body.edad, personas[found].edad);
  res.status(200).send({message: 'Los datos han sido actualizados'})
});


myApp.delete('/Persona/:id', (req, res) =>{
  var found = personas.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'La persona no existe'});
  }
  personas.splice(found, 1);
  res.status(200).send({message: 'La persona ha sido eliminada'})
});

//Estudiante
myApp.get('/estudiante', function (req, res) {
  res.status(200).send({Estudiantes: [estudiantes]});
});

myApp.get('/estudiante/:id', function (req, res) {
  var found = estudiantes.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'El estudiante no existe'});
  }
  res.status(200).send({Estudiante: [estudiantes[found]]});
});

myApp.post('/estudiante', (req, res) => {
  bod = req.body;
  per = new estudiante();
  per.id = bod.id;
  per.nombre =  bod.nombre;
  per.edad = bod.edad;
  per.carrera = bod.carrera;
  per.semestre = bod.semestre;
  estudiantes.push(per);
  res.status(200).send({message: 'El estudiante ha sido agregado'});
});

myApp.put('/estudiante/:id', (req, res) =>{
  var found = estudiantes.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'El estudiante no existe'});
  }
  estudiantes[found].nombre = valor(req.body.nombre, estudiantes[found].nombre);
  estudiantes[found].edad = valor(req.body.edad, estudiantes[found].edad);
  estudiantes[found].semestre = valor(req.body.semestre, estudiantes[found].semestre);
  estudiantes[found].carrera = valor(req.body.carrera, estudiantes[found].carrera);
  res.status(200).send({message: 'Los datos han sido actualizados'})
});

myApp.delete('/estudiante/:id', (req, res) =>{
  var found = estudiantes.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'El estudiante no existe'});
  }
  estudiantes.splice(found, 1);
  res.status(200).send({message: 'El estudiante ha sido eliminado'})
});

//Profesor
myApp.get('/profesor', function (req, res) {
  res.status(200).send({Profesores: [profesores]});
});

myApp.get('/profesor/:id', function (req, res) {
  var found = profesores.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'El profesor no existe'});
  }
  res.status(200).send({Profesor: [profesores[found]]});
});

myApp.post('/profesor', (req, res) => {
  bod = req.body;
  per = new profesor();
  per.id = bod.id;
  per.nombre =  bod.nombre;
  per.edad = bod.edad;
  per.contrato = bod.contrato;
  per.materia = bod.materia;
  profesores.push(per);
  res.status(200).send({message: 'El profesor ha sido agregado'});
});

myApp.put('/profesor/:id', (req, res) =>{
  var found = profesores.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'El profesor no existe'});
  }
  profesores[found].nombre = valor(req.body.nombre, profesores[found].nombre);
  profesores[found].edad = valor(req.body.edad, profesores[found].edad);
  profesores[found].contrato = valor(req.body.contrato, profesores[found].contrato);
  profesores[found].materia = valor(req.body.materia, profesores[found].materia);
  res.status(200).send({message: 'Los datos han sido actualizados'})
});

myApp.delete('/profesor/:id', (req, res) =>{
  var found = profesores.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'El profesor no existe'});
  }
  profesores.splice(found, 1);
  res.status(200).send({message: 'El profesor ha sido eliminado'})
});

myApp.listen(3001, () => console.log('Escuchando por el puerto 3001'));

//Objetos

personas = [
  {id:'9753' , nombre:'Mia', edad:'43'},
  {id:'8642' , nombre:'Moises',  edad:'42'},
  {id:'7413' , nombre:'Sandra', edad:'87'}
];
estudiantes = [
  {id:'1234' , nombre:'Luis', edad:'21', carrera:'Psicologia', semestre:'2'},
  {id:'5678' , nombre:'Ana',  edad:'24', carrera:'Derecho', semestre:'7'},
  {id:'9012' , nombre:'Miguel', edad:'27', carrera:'Ingenieria', semestre:'1'}
];
profesores = [
  {id:'9876' , nombre:'Javier', edad:'19',  materia:'Algebra', contrato:'Catedra' },
  {id:'7654' , nombre:'Ismael',  edad:'29',  materia:'Calculo', contrato:'Planta'},
  {id:'4321' , nombre:'Luna', edad:'40', materia:'Fisica', contrato:'Catedra' }
];

function persona(id, nombre, edad){
  this.id = id;
  this.nombre = nombre;
  this.edad = edad;
}

function estudiante(id, nombre, edad, carrera, semestre){
  this.carrera = carrera;
  this.semestre = semestre;
}
estudiante.prototype = new persona;

function profesor(id, nombre, edad, materia, contrato){
  this.materia = materia;
  this.contrato = contrato;
}

function valor(x, y){
  return Boolean(x) ? x : y;
}

profesor.prototype = new persona;
