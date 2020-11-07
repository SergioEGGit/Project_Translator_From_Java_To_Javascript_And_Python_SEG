// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Clase Principal
export class Parametros extends Instruccion {

	// Constructor
    constructor(Linea: number, Columna: number, private Tipos: String, private Identificador: String) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Tipos = this.Tipos;
		let Identificador = this.Identificador;
		
		// Traduccion
		let Traduccion = Identificador;		
		
		return Traduccion;
		
    }
	
}