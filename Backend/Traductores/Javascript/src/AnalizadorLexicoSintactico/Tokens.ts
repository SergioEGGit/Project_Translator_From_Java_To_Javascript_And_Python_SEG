// Imports

// Array De Tokens
import { ArrayTokens } from "./Variables_Metodos";

// Clase Principal
export class Tokens {

	// Constructor
    constructor(public Linea: number, public Columna: number, public Tipo: string, public Lexema: string) {
        
		// Rellenear Arreglo
		ArrayTokens.push(this);
		
    }
	
}