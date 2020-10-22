// Imports

// Clase Abstracta
import { Instruccion } from "./Instruccion"; 

// Clase Principal
export class Parentesis extends Instruccion{

    // Declaraciones
	public AST = null;
	
	// Constructor 
    constructor(Linea: number, Columna: number, private Expresion: Instruccion) {
    
		// Super
		super(Linea, Columna)
		
    } 

    // Método Traducir	
	public Traducir() {
		
		// Declaraciones
		let Expresion = this.Expresion.Traducir();
		
		// Traduccion
		let Traduccion = "(" + Expresion + ")";			
		
		return Traduccion; 
		
    }
}