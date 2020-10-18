// Creación De Rutas

// Variables Y Constantes
const ExpressAuxiliar = require('express');
const { AnalizadorLexicoScanner } = require('../AnalizadorLexicoSintactico/build/AnalizadorLexicoScanner.js');
const { ArrayTokens } = require('../AnalizadorLexicoSintactico/build/Variables.js');

// Inicializar Router
const RouterAuxiliar = ExpressAuxiliar.Router();

// Pagina Principal
RouterAuxiliar.get('/', (req, res) => {
	
	AnalizadorLexicoScanner("public class hola {  }");
	
	for(var i = 0; i < ArrayTokens.length; i++) {
		
		console.log(ArrayTokens[i]);
		
	}
	
	// Enviar Response
	res.send("Bienvenido Al Servidor De Python! Puerto: 8887");	
	
});

// Solicitar Análisis
RouterAuxiliar.post('/Analisis', (req, res) => {
	
	//console.log(req.body.Cadena.toString());
	
	
	
	
	// Response
	res.send("Conectado Al Servidor En Puerto: 8887");
	
});

// Exportar Modulo
module.exports = RouterAuxiliar;