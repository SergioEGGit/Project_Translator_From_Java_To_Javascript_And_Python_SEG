// Imports
import { Instruccion } from "./Instruccion" 

// Clase Principal
export class DoWhile extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor 
    constructor(Linea: number, Columna: number, private BloqueDoWhile: Instruccion, private Condicion: Instruccion) {
    
		// Super
		super(Linea, Columna)
		
    } 

	// Método Traducir	
	public Traducir() {
		
		// Declaraciones
		let BloqueDoWhile = this.BloqueDoWhile.Traducir();
		let Condicion = this.Condicion.Traducir();
		
		// Traducción
		let Traduccion = "do { \n\n" +
						 BloqueDoWhile + "\n" + 
						 "} " +
						 "while(" + Condicion + "); \n";		
	
		return Traduccion;		
		 
    }
}