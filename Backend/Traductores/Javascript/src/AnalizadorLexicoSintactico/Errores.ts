// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Array Errores
import { ArrayErrores } from "./Variables_Metodos";

// Clase Principal
export class Errores extends Instruccion {

  	// Constructor
    constructor(public Linea: number, public Columna: number, public Tipo: String, public Lexema: String) {
        
		// Super
		super(Linea, Columna);
		
		// Agregar Error Al Arreglo
		ArrayErrores.push(this);
		
    }
	
	// Metodo Traducir
    public Traducir() {
		
		// Traduccion Vacia
		let Traduccion = "\n";
		
		return Traduccion;
    }	
	
}