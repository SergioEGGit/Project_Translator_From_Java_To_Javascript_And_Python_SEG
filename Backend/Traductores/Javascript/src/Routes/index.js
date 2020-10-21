// Creación De Rutas

// Variables Y Constantes

// Módulo Express
const ExpressAuxiliar = require('express');

// Analizador Jison
const Analizador = require('../AnalizadorLexicoSintactico/AnalizadorJison/AnalizadorGramatica.js');

// Arreglo De Tokens Y Errores, Lista De Tokens Y Lista De Errores
const { ArrayTokens, ArrayErrores, ListaDeTokens, ListaDeErrores } = require('../AnalizadorLexicoSintactico/build/Variables_Metodos.js');

// Vaciar Tokens Y Errores
const { VaciarTokens, VaciarErrores } = require('../AnalizadorLexicoSintactico/build/Variables_Metodos.js');

// Inicializar Router
const RouterAuxiliar = ExpressAuxiliar.Router();

// Pagina Principal
RouterAuxiliar.get('/', (req, res) => {
	
	// Enviar Response	
	res.send("Bienvenido Al Servidor De Javascript! Puerto: 7776");
	
});

// Solicitar Análisis
RouterAuxiliar.post('/Analisis', (req, res) => {
	
	//Declaraciones
	
	// Traduccion Completa
	let TraduccionTotal = "";
	
	// Analizador
	let AnalizadorLexicoSintactico;
	
	// Texto Del Cliente
	let CadenaTexto = "";
	
	// Hay Error
	let BanderaError = false;
	
	// Lista De Errores
	let ErroresLista = "";
	
	// Metodos Principales
	
	// Limpiar La Lista De Tokens
	VaciarTokens();
	
	// Limpiar La Lista De Errores
	VaciarErrores();	
	
	// Obtener Cadena De Texto
	CadenaTexto = req.body.Cadena.toString();
		
	// Obtener Traduccion 
	try {
			
		// Solicitar Analisis
		AnalizadorLexicoSintactico = Analizador.parse(CadenaTexto);
		
		// Obtener Tokens
		ListaDeTokens();
		
		// Obtener Errores
		[ErroresLista, BanderaError] = ListaDeErrores();		
		
		// Mostrar Errores
		console.log(ErroresLista);
		
		// Obtener AST	
		
		// Obtener Traduccion	
		for(const Traduccion of AnalizadorLexicoSintactico) {
			
			// Agregar Traduccion Individual
			TraduccionTotal += Traduccion.Traducir() + "\n";				
			
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
    res.download('src/Reportes/TablaDeTokensJS.pdf');

});

// Solicitar Reporte De Errores
RouterAuxiliar.get('/Errores', (req, res) => { 

	// Descargar Archivo
	res.download("src/Reportes/TablaDeErroresJS.pdf");	

});

// Solicitar Reporte De AST
RouterAuxiliar.get('/AST', (req, res) => {

	// Descargar Archivo
	res.download("src/Reportes/ArbolAnalisisSintacticoJS.pdf");

});

// Exportar Modulo
module.exports = RouterAuxiliar;