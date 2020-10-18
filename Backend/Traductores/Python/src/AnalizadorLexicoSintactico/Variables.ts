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

// Diccionario De Palabras Reservadas
export let DiccionarioJava = {1: "public", 2: "class", 3: "interface"};

// Metodos / Funciones

// Vaciar Array Tokens
export function VaciarArrayTokens() {
	
	// Recorrer Array
	for(var Contador = 0; Contador <= ArrayTokens.length + 1; Contador++) {
		
		// Pop Array
		ArrayTokens.pop();			
		
	}
	
}

// Vaciar Array Errores
export function VaciarArrayErrores() {
	
	// Recorrer Array
	for(var Contador = 0; Contador <= ArrayErrores.length + 1; Contador++) {
		
		// Pop Array
		ArrayErrores.pop();			
		
	}
	
}