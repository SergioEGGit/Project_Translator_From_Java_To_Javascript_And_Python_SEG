// Imports 

// Clase Nuevo Token
import { NuevoToken } from "./ObjetoToken";

// Clase Nuevo Error
import { NuevoError } from "./ObjetoError";

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