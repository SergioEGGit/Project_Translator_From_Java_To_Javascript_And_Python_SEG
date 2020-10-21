// Imports
import { Instruccion } from "./Instruccion";
import { ArrayErrores } from "./Variables_Metodos";

// Clase Principal
export class Errores extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(public Linea: number, public Columna: number, public Tipo: String, public Lexema: String) {
        
		// Super
		super(Linea, Columna);
		ArrayErrores.push(this);
		
    }
	
	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Traduccion = "\n";
		
		return Traduccion;
    }
	
}