// Imports 

// Clase Nuevo Token
import { NuevoToken } from "./ObjetoToken";

// Clase Nuevo Error
import { NuevoError } from "./ObjetoError";

// Crer PDF
import { jsPDF } from 'jspdf';

// Generar Tablas PDF
import autoTable from 'jspdf-autotable';

// Variables

// Array De Tokens
export let ArrayTokens: Array<NuevoToken> = new Array();

// Array De Errores
export let ArrayErrores: Array<NuevoError> = new Array();


// Definicion De Estructura 
type Diccionario = {
	
	[key: number]: string
	
}

// Diccionario De Palabras Reservadas
export const DiccionarioJava: Diccionario = {   
									1: "public", 
									2: "static", 
									3: "class",
									4: "interface",
									5: "void", 
									6: "for",
									7: "do",
									8: "while",
									9: "if", 
									10: "else",
									11: "break",
									12: "continue",
									13: "return",
									14: "main", 
									15: "args",
									16: "int",
									17: "Boolean",
									18: "boolean",
									19: "double",
									20: "String",
									21: "string",
									22: "char",
									23: "true",
									24: "false",
									25: "System",
									26: "out",
									27: "println",
									28: "print"	
							    };

// Metodos / Funciones

// Vaciar Array Tokens
export function VaciarArrayTokens() {
	
	// Declaracion 
	var SizeArray = ArrayTokens.length;
	
	// Recorrer Array	
	for(var Contador = 0; Contador <= SizeArray; Contador++) {
		
		// Pop Array
		ArrayTokens.pop();			
		
	}
	
}

// Vaciar Array Errores
export function VaciarArrayErrores() {
	
	// Declaracion
	var SizeErrores = ArrayErrores.length;
	
	// Recorrer Array
	for(var Contador = 0; Contador <= SizeErrores; Contador++) {
		
		// Pop Array
		ArrayErrores.pop();			
		
	}
	
}

// Funcion Generar PDF Tokens
export function ListaDeTokens() {
	
	// Filas Tabla
	var Filas = [{}];
	
	// Obtener Todos Los Tokens
	for (var Contador = 0; Contador < ArrayTokens.length; Contador++) {
		
		// Agregar Token A Array
		Filas.push( 
		
			[ 
				ArrayTokens[Contador].Identificador.toString(), 
				ArrayTokens[Contador].Linea.toString(), 
				ArrayTokens[Contador].Columna.toString(),
				ArrayTokens[Contador].Tipo,
				ArrayTokens[Contador].Lexema	
			]
			
		);
		
	}
	
	// Documento PDF 
	const DocumentoPDF = new jsPDF();
	
	// Generar Tabla
	autoTable(DocumentoPDF, {
		
		theme: 'striped',
		headStyles: { 
			
			font: 'times',
			fontStyle: 'bold',
			fillColor: [127, 74, 241],
			fontSize: 13			
			
			},
		head: [['No.', 'Fila', 'Columna', 'Tipo', 'Descripcion']], 
		body: Filas
		
	})
	
	// Guardar PDF
	DocumentoPDF.save('src/Reportes/TablaDeTokensPY.pdf');	
}

// Funcion Generar PDF Errores
export function ListaDeErrores() {
	
	// Declaraciones
	
	// Filas Tabla
	var Filas = [{}];	
	var DescripcionError = "";
    var ErroresLista: String = "";
	var Error = false;
	
	// Obtener Todos Los Tokens
	for (var Contador = 0; Contador < ArrayErrores.length; Contador++) {
		
		// Agregar Token A Array
		Filas.push( 
		
				[	 
					ArrayErrores[Contador].Identificador.toString(),
					ArrayErrores[Contador].Tipo,				
					ArrayErrores[Contador].Linea.toString(), 
					ArrayErrores[Contador].Columna.toString(),
					ArrayErrores[Contador].Descripcion
				]
				
			);
			
			ErroresLista += "No: " + ArrayErrores[Contador].Identificador.toString() +
							" Tipo: " + ArrayErrores[Contador].Tipo +				
							" Fila: " + ArrayErrores[Contador].Linea.toString() + 
							" Columna: " + ArrayErrores[Contador].Columna.toString() +
							" Descripcion: " + ArrayErrores[Contador].Descripcion + "\n";
							
	}

	// Hay Errores
	if(ArrayErrores.length > 0) {
		
		Error = true;
		
	} else {
		
		Error = false;
		
	}
	
	// Documento PDF 
	const DocumentoPDF = new jsPDF();
	
	// Generar Tabla
	autoTable(DocumentoPDF, {
		
		theme: 'striped',
		headStyles: { 
			
			font: 'times',
			fontStyle: 'bold',
			fillColor: [220, 20, 60],
			fontSize: 13			
			
			},
		head: [['No.', 'Tipo Error', 'Fila', 'Columna', 'Descripcion']], 
		body: Filas
		
	})
	
	// Guardar PDF
	DocumentoPDF.save('src/Reportes/TablaDeErroresPY.pdf');

	return [ErroresLista, Error];
	
}
