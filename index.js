const express = require("express");
var path = require('path');
const app = express();
//const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const ejs = require('ejs');
//const methodOverride = require("method-override");
//const exp = require("constants");
app.set('view engine', 'ejs');
var assert = require('assert');
var fs = require('fs');
require('dotenv/config');
app.use(bodyParser.urlencoded({ extender: true }));


app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));


//mongoose.connect("mongodb+srv://Demian:57008345@cluster0.5lvxl.mongodb.net/ProyectoWeb?retryWrites=true&w=majority", { useNewUrlParser: true })
/*
//Schema para usuario
const UsuarioSchema = {
	nombre: String,
	correo: String,
	contrasena: String
}
const usuario = mongoose.model('Usuarios', UsuarioSchema);

//Altas usuario
app.post("/usuarios", function (req, res) {
	console.log("Alta exitosa");
	let newUsuario = new usuario({
		nombre: req.body.Nombre,
		correo: req.body.Email,
		contrasena: req.body.contrasenia
	});
	res.render('index', { alta: 'true' })
	newUsuario.save();
})


//Linea a cambiar para ver su pagina
app.get("/", function (req, res) {
	res.render('index', { success: '' })
	
})
/*Para cargar pagina de ayuda persepctiva del usuario
app.get('/ayudaUser', (req, res) => {
	res.render('ayudaUser', { alta: '' })
	
})
//Metodo para mostar el nombre de la sesion e ir a ayuda
app.get('/ayudaUsuario/:id', (req, res) => {
	const { id } = req.params;
	console.log('Correo recibido: ' + id)
	usuario.findOne({correo: id}, function (err, usuarios) {
	console.log("valor del corre: " + id)
	console.log("UsarioEncontrado: " + usuarios); 
	res.render('ayudaUser', { usuarios: usuarios, idUser: id }  )
})
})
//Metodo para mostar el nombre de la sesion e ir a ayuda
app.get('/estatusServicio/:id', (req, res) => {
	const { id } = req.params;
	console.log('Correo recibido: ' + id)
	usuario.findOne({correo: id}, function (err, usuarios) {
	console.log("valor del corre: " + id)
	console.log("UsarioEncontrado: " + usuarios); 
	res.render('eservicio', { usuarios: usuarios, idUser: id }  )
})
})

//Metodo para mostar el nombre de la sesion e ir subir curso
app.get('/subirCurso/:id', (req, res) => {
	const { id } = req.params;
	console.log('Correo recibido: ' + id)
	usuario.findOne({correo: id}, function (err, usuarios) {
	console.log("valor del corre: " + id)
	console.log("UsarioEncontrado: " + usuarios); 
	res.render('uploadCurso', { usuarios: usuarios, idUser: id, alta:'' }  )
})
})
app.get('/CursoSubido/:id', (req, res) => {
	const { id } = req.params;
	console.log('Correo recibido: ' + id)
	usuario.findOne({correo: id}, function (err, usuarios) {
	console.log("valor del corre: " + id)
	console.log("UsarioEncontrado: " + usuarios); 
	res.render('uploadCurso', { usuarios: usuarios, idUser: id, alta: 'true' }  )
})
})

//Para cargar pagina de registro de usuarios
app.get('/registrate', (req, res) => {
	res.render('registro', { alta: '' })
	
})
//Para cargar pagina de registro de usuarios con alta verdadera
app.get('/registrarUsuario', (req, res) => {
	res.render('registro', { alta: 'true' })
	
})
app.get('/iniciarSesion', (req, res) => {
	res.render('inicioSesion', { success: 'true'} )
	
})
//Autorizar usuario (Verificar si tiene cuenta)
app.post('/autorizaUsuario', (req, res) => {

	let newUsuario = new usuario({
		correo: req.body.Email,
		contrasena: req.body.contrasenia
	});
	usuario.exists({ correo: req.body.Email }, function (err, doc) {
		const mail = req.body.Email;
		if (err) {
			console.log(err)
		} else {
			console.log("Estatus correo :", doc) // false
		}
		if (doc == true) {
			usuario.exists({ contrasena: newUsuario.contrasena }, function (err, doc) {
				console.log("Contraseña req.body :"+ req.body.Contrasenia);
				console.log("Contraseña newusuario :"+ newUsuario.contrasena);
				if (err) {
					console.log(err)
				} else {
					console.log("Esatus contraseña :", doc) // false
				}
				if (doc == true) {
					res.redirect('/consultaUno/'+req.body.Email);

				} else {
					console.log('No coincide la contraseña');
					res.render('inicioSesion', { success: 'false'})
				}
			});

		} else {
			console.log('No coincide el correo');
			res.render('inicioSesion', { success: 'false'})
		}
	});
	
})
//Metodo para verificar si existe el correo
app.get('/consultaUno/:id', (req, res) => {
	const { id } = req.params;
	console.log('Correo recibido: ' + id)
	usuario.findOne({correo: id}, function (err, usuarios) {
	console.log("valor del corre: " + id)
	console.log("UsarioEncontrado: " + usuarios); 
	res.render('UsuarioIndex', { usuarios: usuarios, idUser: id }  )
})
})

//Metodo para mandar a perfil usuario
app.get('/consultaPerfil/:id', (req, res) => {
	const { id } = req.params;
	console.log('Correo recibido: ' + id)
	usuario.findOne({correo: id}, function (err, usuarios) {
	console.log("valor del corre: " + id)
	console.log("UsarioEncontrado: " + usuarios); 
	res.render('miPerfil', { usuarios: usuarios, idUser: id }  )
})
})*/

app.listen(3000, function () {
	console.log("Servidor corriendo en el puerto 3000");
})
//Sección de rutas para los archivos .ejs (Vistas)
app.get("/", function (req, res) {
	res.render('index',  {registro: ''})	
})
app.get("/instructivo", function (req, res) {
	res.render('instructivo')
})

app.get("/metodologia", function (req, res) {
	res.render('metodologia')
})
app.get("/matriz", function (req, res) {
	res.render('matriz')
})
app.get("/criterios", function (req, res) {
	res.render('criterios')
})
app.get("/estadisticas", function (req, res) {
	res.render('estadisticas')
})
app.get("/mapaResidual", function (req, res) {
	res.render('mapaResidual' )
})
app.get("/mapaRiesgo", function (req, res) {
	res.render('mapaRiesgo')
})
app.get("/pareto", function (req, res) {
	res.render('pareto')
})
app.get("/registro", function (req, res) {
	res.render('index', {registro: 'riesgoAlta'})
})
app.get("/registroControl", function (req, res) {
	res.render('index', {registro: 'controlAlta'})
})
