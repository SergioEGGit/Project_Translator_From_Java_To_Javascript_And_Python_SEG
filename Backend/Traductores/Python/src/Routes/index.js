// Creación De Rutas

// Variables Y Constantes

// Express 
const ExpressAuxiliar = require('express');

// Util
const Utility = require('util');

// Fs 
const ModuloFs = require ('fs');

// Child Process
const ComandoExec = Utility.promisify(require('child_process').exec);

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
		try {
			
			var CadenaDot = ArbolSintactico();
		
			GenerarDot(CadenaDot);	
			
		} catch(Ex) {
			
			// Nada
			
		}
		
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

// Funcion Generar Dot 
async function GenerarDot(Cadena) {
	
	// Comando 
	var Comando = "dot -Tpdf -o src/Reportes/ArbolSintacticoPY.pdf src/Reportes/ArbolSintacticoPY.txt"	
	
	// Escribir Archivo 
	ModuloFs.writeFile('src/Reportes/ArbolSintacticoPY.txt', Cadena, function(Error) { 
	
		if(Error) {
			
			return console.log("Error Al Generar El Archivo!");
			
		}
	
	});	
	
	// Ejecutar Comando
	const { Entrada, Salida } = await ComandoExec(Comando);
	
}

// Solicitar Reporte De AST
RouterAuxiliar.get('/AST', (req, res) => { 

	// Descargar Archivo
	res.download("src/Reportes/ArbolSintacticoPY.pdf");	

});

// Exportar Modulo
module.exports = RouterAuxiliar;