// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Clase Principal
export class Comentarios extends Instruccion {

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