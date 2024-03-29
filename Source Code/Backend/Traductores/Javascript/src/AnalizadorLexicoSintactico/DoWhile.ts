// Imports

// Clase Abstracta
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Clase Principal
export class DoWhile extends Instruccion {

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
		let Traduccion = AgregarIdentacion() + "do { \n\n" +
						 BloqueDoWhile + "\n" + 
						 AgregarIdentacion() + "} " +
						 "while(" + Condicion + "); \n\n";		
	
		return Traduccion;		
		 
    }
	
}