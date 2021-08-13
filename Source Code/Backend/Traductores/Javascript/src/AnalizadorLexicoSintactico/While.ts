// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Clase Principal
export class While extends Instruccion {

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