// Creación De Rutas

// Variables Y Constantes

// Módulo Express
const ExpressAuxiliar = require('express');

// Analizador Jison
const Analizador = require('../AnalizadorLexicoSintactico/AnalizadorJison/AnalizadorGramatica.js');

// Util
const Utility = require('util');

// Fs 
const ModuloFs = require ('fs');

// Child Process
const ComandoExec = Utility.promisify(require('child_process').exec);

// Identificador Global
let IdentificadorGlobal = 1;

// String Dot 
let DotString = "";

// Arreglo De Tokens Y Errores, Lista De Tokens Y Lista De Errores
const { ArrayTokens, ArrayErrores, ListaDeTokens, ListaDeErrores } = require('../AnalizadorLexicoSintactico/build/Variables_Metodos.js');

// Vaciar Tokens, Errores Y Identacion
const { VaciarTokens, VaciarErrores, VaciarIdentacion } = require('../AnalizadorLexicoSintactico/build/Variables_Metodos.js');

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
	
	// Limpiar Identacion
	VaciarIdentacion();
	
	// Obtener Cadena De Texto
	CadenaTexto = req.body.Cadena.toString();
		
	if(CadenaTexto != "") { 
	
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
			
			// Catch Traduccion
			try {
				
				// Obtener Traduccion	
				for(const Traduccion of AnalizadorLexicoSintactico[1]) {
					
					// Agregar Traduccion Individual
					TraduccionTotal += Traduccion.Traducir() + "\n";				
					
				}
				
			} catch (Ex) {
				
				console.log(Ex);
				
			}		
			
			// Cath Arbol
			try {
				
				// Limpiar Variables 
				IdentificadorGlobal = 1;
				
				DotString = "digraph ArbolSintacticoJS { \n\n    node[color = navyblue] \n\n";
				
				RecorrerArbolSintactico(AnalizadorLexicoSintactico[0]);	
				
				DotString += "}";

				// Generar Grafica 
				GenerarDot(DotString);
				
			} catch(Ex) {
				
				console.log(Ex);		
				
			}
			
		} catch(Ex) {
			
			// Traduccion, Tokens, Errores Y Arbol
			TraduccionTotal = "Error Al Analizar, No Se Logro Recuperar Del Analisis";
			console.log(Ex);
			
		}
	
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
	//res.download("hola");


});

// Funcion Generar Dot 
async function GenerarDot(Cadena) {
	
	// Comando 
	var Comando = "dot -Tpdf -o src/Reportes/ArbolAnalisisSintacticoJS.pdf src/Reportes/ArbolAnalisisSintacticoJS.txt"	
	
	// Escribir Archivo 
	ModuloFs.writeFile('src/Reportes/ArbolAnalisisSintacticoJS.txt', Cadena, function(Error) { 
	
		if(Error) {
			
			return console.log("Error Al Generar El Archivo!");
			
		}
	
	});	
	
	// Ejecutar Comando
	const { Entrada, Salida } = await ComandoExec(Comando);
	
}

// Recorrer Arbol Sintactico
function RecorrerArbolSintactico(NodoArbol) {
	
	// Declaraciones
	var Cadena = "";
	
	// Verificar 
	if(NodoArbol.Identificador == 0) {
		
        // Asignar Contador
		NodoArbol.Identificador = IdentificadorGlobal;
        IdentificadorGlobal++;
		
    }
		
	var Nombre = NodoArbol.Valor;	
		
	var ValorLabel = Nombre.split("\"");

	// Verificar Si Es Cadena De Texto
	if(ValorLabel.length > 1) {
		
		ValorLabel = "\\\"" + ValorLabel[1] + "\\\"";
		
	} else {
		
		ValorLabel = NodoArbol.Valor;
		
	}	
		
	DotString += "    " + NodoArbol.Identificador + ' [label= "'+ ValorLabel +'"]; \n\n';
	
	// Verificar Si Hay Nodos Hijos 
	NodoArbol.ArrayNodos.forEach(Nodo => {
		
        DotString += "    " + NodoArbol.Identificador + ' -> ' + IdentificadorGlobal + "; \n\n";
        
		Cadena += RecorrerArbolSintactico(Nodo);
      
	});
    
    return Cadena;
	
}

// Exportar Modulo
module.exports = RouterAuxiliar;