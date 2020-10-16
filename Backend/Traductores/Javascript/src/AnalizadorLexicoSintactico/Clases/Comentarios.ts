// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Clase Principal
export class Comentarios extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor 
    constructor(Linea: number, Columna: number,private Comentario: string) {
    
		// Super
		super(Linea, Columna)
		
    } 

	// Método Traducir	
	public Traducir() {
		
		// Traducción
		let Traduccion = AgregarIdentacion() + this.Comentario + "\n\n";
		
		return Traduccion;		
		 
    }
}