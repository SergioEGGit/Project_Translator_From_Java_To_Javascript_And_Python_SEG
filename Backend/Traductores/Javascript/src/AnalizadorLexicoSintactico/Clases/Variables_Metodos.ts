// Imports
import { Errores } from "./Errores";

// Array Identacion
export let Identacion: Array<any> = new Array();
export let ArrayErrores: Array<Errores> = new Array();
export let ArrayTokens: Array<Tokens> = new Array();

// Funcion Que Cuenta Los Espacios
export function AgregarIdentacion(): String {

	// Declaraciones
	let Espacios: string = "";
	
	// Agregar Espacios
	for(let Contador: number = 0; Contador < Identacion.length; Contador++) {
		
		Espacios += "    ";
		
	}
	
	return Espacios;
}