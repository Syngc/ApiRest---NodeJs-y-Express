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
  per = req.body;
  personas.push(per);
  res.status(200).send({message: 'La persona ha sido agregada'});
});

myApp.put('/Persona/:id', (req, res) =>{
  var found = personas.findIndex( x => x.id == req.params.id);
  if(found == -1){
    res.status(404).send({message:'La persona no existe'});
  }
  personas[found].name = req.body.name;
  personas[found].edad = req.body.edad;
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


/*
//Estudiante
myApp.get('/Estudiante', (req,res) => res.send('Persona'))
myApp.post('/', (req, res) => res.send(''))
myApp.put()
myApp.delete()

//Profesor
myApp.get('/Profesor', (req,res) => res.send('Persona'))
myApp.post('/', (req, res) => res.send(''))
myApp.put()
myApp.delete()
*/
myApp.listen(3001, () => console.log('Escuchando por el puerto 3001'));

//Objetos
//var persona = {  $id: '12345',  $nombre: 'Mateo Cano', $edad: ' 21 ',};
personas = [];

function persona(id, nombre, edad){
  this.id = id;
  this.nombre = nombre;
  this.edad = edad;
}

var Estudiante = Object.create(persona);
var Profesor = Object.create(persona);
