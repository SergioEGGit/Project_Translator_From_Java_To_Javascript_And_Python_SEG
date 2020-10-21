// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from "./Variables_Metodos"; 

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
		let Traduccion = AgregarIdentacion() + "while(" + Condicion + ") " +
						 "{ \n\n" +
						 BloqueWhile + "\n" +
						 AgregarIdentacion() + "} \n\n";
		
		
		return Traduccion;		
		 
    }
}