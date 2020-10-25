// Creación De Rutas

// Variables Y Constantes

// Express 
const ExpressAuxiliar = require('express');

// Analizador Lexico 
const { AnalizadorLexicoScanner } = require('../AnalizadorLexicoSintactico/build/AnalizadorLexicoScanner.js');

// Analizador Sintactico
const { AnalizadorSintacticoParser } = require('../AnalizadorLexicoSintactico/build/AnalizadorSintacticoParser.js');

// Arreglo De Tokens Y Errores
const { ArrayTokens, ArrayErrores } = require('../AnalizadorLexicoSintactico/build/Variables.js');

// Inicializar Router
const RouterAuxiliar = ExpressAuxiliar.Router();

// Pagina Principal
RouterAuxiliar.get('/', (req, res) => {
	
	var string = "/* Hola */ \n /* hola */";   
	
	AnalizadorLexicoScanner(string);
	
	for(var i = 0; i < ArrayTokens.length; i++) {
		
		console.log(ArrayTokens[i]);
		
	}
	
	AnalizadorSintacticoParser();
	
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