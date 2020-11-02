// Creación De Rutas

// Variables Y Constantes

// Express 
const ExpressAuxiliar = require('express');

// Analizador Lexico 
const { AnalizadorLexicoScanner } = require('../AnalizadorLexicoSintactico/build/AnalizadorLexicoScanner.js');

// Analizador Sintactico
const { AnalizadorSintacticoParser } = require('../AnalizadorLexicoSintactico/build/AnalizadorSintacticoParser.js');

// Arbol Sintactico
const { ArbolSintactico } = require('../AnalizadorLexicoSintactico/build/ArbolSintactico.js');

// Arreglo De Tokens, Errores, Lista De Tokens Y Lista De Errores
const { ArrayTokens, ArrayErrores, ListaDeTokens, ListaDeErrores } = require('../AnalizadorLexicoSintactico/build/Variables.js');

// Inicializar Router
const RouterAuxiliar = ExpressAuxiliar.Router();

// Pagina Principal
RouterAuxiliar.get('/', (req, res) => {
	
	var Cadena = "int a = !nodo;  crear una array de nodos instrucciones clase ";

	AnalizadorLexicoScanner(Cadena);
	ArbolSintactico();
	
	// Enviar Response
	res.send("Bienvenido Al Servidor De Python! Puerto: 8887");	
	
});

// Solicitar Análisis
RouterAuxiliar.post('/Analisis', (req, res) => {
	
	//Declaraciones
	
	// Traduccion Completa
	let TraduccionTotal = "";
	
	// Texto Del Cliente
	let CadenaTexto = "";
	
	// Hay Error
	let BanderaError = false;
	
	// Lista De Errores
	let ErroresLista = "";
	
	// Obtener Cadena De Texto
	CadenaTexto = req.body.Cadena.toString();
		
	// Obtener Traduccion 
	try {
			
		// Solicitar Analisis
		AnalizadorLexicoScanner(CadenaTexto);
		TraduccionTotal = AnalizadorSintacticoParser();
		
		// Obtener Tokens
		ListaDeTokens();
		
		// Obtener Errores
		[ErroresLista, BanderaError] = ListaDeErrores();		
		
		// Mostrar Errores
		console.log(ErroresLista);
		
		// Obtener AST						
		
	} catch(Ex) {
		
		// Traduccion, Tokens, Errores Y Arbol
		TraduccionTotal = "Error Al Analizar, No Se Logro Recuperar Del Analisis";
		console.log(Ex);
		
	}	

	// Enviar Response
	res.send( { Traduccion: TraduccionTotal, Error: BanderaError, Errores: ErroresLista } );
		
});

// Solicitar Reporte De Tokens
RouterAuxiliar.get('/Tokens', (req, res) => { 

	// Descargar Archivo
    res.download('src/Reportes/TablaDeTokensPY.pdf');

});

// Solicitar Reporte De Errores
RouterAuxiliar.get('/Errores', (req, res) => { 

	// Descargar Archivo
	res.download("src/Reportes/TablaDeErroresPY.pdf");	

});

// Solicitar Reporte De AST
RouterAuxiliar.get('/AST', (req, res) => {

	// Descargar Archivo
	res.download("src/Reportes/ArbolAnalisisSintacticoPY.pdf");

});

// Exportar Modulo
module.exports = RouterAuxiliar;