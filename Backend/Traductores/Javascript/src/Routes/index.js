// Creación De Rutas

// Variables Y Constantes
const ExpressAuxiliar = require('express');
const Parser = require('../AnalizadorLexicoSintactico/build/Parser/AnalizadorGramatica.js');
// Inicializar Router
const RouterAuxiliar = ExpressAuxiliar.Router();

// Pagina Principal
RouterAuxiliar.get('/', (req, res) => {
	
	// Enviar Response
	const AST=Parser.parse("System.out.println();");
	for (const element of AST){
		console.log(element)
		element.Traducir();
	}
	res.send("Bienvenido Al Servidor De Javascript! Puerto: 7776")
});

// Solicitar Análisis
RouterAuxiliar.post('/Analisis', (req, res) => {
	
	//console.log(req.body.Cadena.toString());
	
	// Response
	res.send("Conectado Al Servidor En Puerto: 7776");
});

// Exportar Modulo
module.exports = RouterAuxiliar;
// ya maje XD almenos el print