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
	
	var string = "/* \n " + 
		    "\n " +      
		     " Mas Malaon\n " + 
		"\n " + 	  
		"\n " + 	  
		"*/\n " + 	  	
	    "\n " + 
	    "public class hola {\n " + 
		"	:\n " + 
		"	// Soy Un Comentario\n " + 
		"	\n " + 
		"	public int metodo() {\n " + 
		"		\n " + 
		"		int a = 50, b;\n " + 
		"		double B = 50.50;\n " + 
		"		String hola = \"Como Estas\";\n " + 
		"		boolean a = false;\n " + 
		"		char = 'a';\n " + 
		"		\n " + 
		"		if(A <= B && A >= B && A < B && A > B || !hola) {\n " + 
		"			\n " + 
		"			if(A == B || A != B) {\n " + 
		"				\n " + 
		"				B ^ A  \n " + 
		"				int Operacion = ((5 + 44.6) - (5 * 40) / 9);\n " + 
		"			}\n " + 
		"			\n " + 
		"		}\n " + 
		"		\n " + 
		"					\n " + 	
		"		System.out.println(\"Hola\");\n " + 
		"		\n " + 
		"		\n " + 
		"	}\n " + 
		"	\n " + 
		"	\n " + 
		"	public static void main(String[] args) {\n " + 
		"		\n " + 
		"		\n " + 
		"	}\n " + 
		"	\n " + 
		"	public String Otrometodo(int a, int b) {\n " + 
		"\n " + 
		"\n " + 
		"	}\n " + 
		"	\n " + 
		"	\n " + 
		"}\n ";
	
	AnalizadorLexicoScanner(string);
	AnalizadorSintacticoParser();
	
	for(var i = 0; i < ArrayTokens.length; i++) {
		
		console.log(ArrayTokens[i]);
		
	}
	
	for (var i = 0; i < ArrayErrores.length; i++) {
		
		console.log(ArrayErrores[i]);
		
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