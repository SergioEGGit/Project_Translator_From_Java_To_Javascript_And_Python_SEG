// Creación De Rutas

// Variables Y Constantes
const ExpressAuxiliar = require('express');
const Parser = require('../AnalizadorLexicoSintactico/build/Parser/AnalizadorGramatica.js');

// Inicializar Router
const RouterAuxiliar = ExpressAuxiliar.Router();

// Pagina Principal
RouterAuxiliar.get('/', (req, res) => {
	
	// Enviar Response
	/*  
		for (5 > 5; 5 <= 5 + 5; 5++) {
		
          System.out.println(5);
		  System.out.print(5);
      
		}
	
		while (true) {
			
			System.out.println(-3);
			
		}		
	
		do {
            System.out.println (6);
		} while (5 < 10);
		
		
		if ( 5 > 5 ){
			System.out.print(5);
		} else if (a < 5){
			System.out.print(5);
		}else{
			System.out.print(5);
		}
	*/
	
	const AST = Parser.parse(`
	
		for (int i = 0; 5 <= 5 + 5; 5++) {
		
          System.out.println(5);
		  System.out.print(5);
      
		}	
		
		String Variable = 5, Hola=1,Y;
		String Hola, quehace, quetal; 

	
	`);
	let Traduccion_Total=""
	for(const element of AST){
	
		Traduccion_Total += element.Traducir() + "\n";
		
	}
	console.log(Traduccion_Total);
	res.send("Bienvenido Al Servidor De Javascript! Puerto: 7776");
	
});

// Solicitar Análisis
RouterAuxiliar.post('/Analisis', (req, res) => {
	
	//console.log(req.body.Cadena.toString());
	
	// Response
	res.send("Conectado Al Servidor En Puerto: 7776");
});

// Exportar Modulo
module.exports = RouterAuxiliar;