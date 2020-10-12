// Imports
import { Instruccion } from "./Instruccion" 

// Clase Principal
export class While extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor 
    constructor(Linea: number, Columna: number, private Condicion: Instruccion, private BloqueWhile: Instruccion) {
    
		// Super
		super(Linea, Columna)
		
    } 

	// Método Traducir	
	public Traducir() {
		
		// Declaraciones
		let Condicion = this.Condicion.Traducir();
		let BloqueWhile = this.BloqueWhile.Traducir();
		
		// Traducción
		let Traduccion = "while(" + Condicion + ") " +
						 "{ \n\n" +
						 BloqueWhile + "\n" +
						 "}\n\n";
		
		
		return Traduccion;		
		 
    }
}