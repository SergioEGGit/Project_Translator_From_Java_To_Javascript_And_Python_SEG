// Imports
import { Instruccion } from "./Instruccion";
import { ArrayTokens } from "./Variables_Metodos";

// Clase Principal
export class Tokens extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, Tipo: String, Lexema: String) {
        
		// Super
		super(Linea, Columna);
		ArrayTokens.push(this);
		
    }
	
	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Traduccion = "\n";
		
		return Traduccion;
    }
	
}