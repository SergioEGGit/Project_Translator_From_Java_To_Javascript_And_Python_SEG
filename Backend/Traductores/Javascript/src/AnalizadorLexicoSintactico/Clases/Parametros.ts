// Imports
import { Instruccion } from "./Instruccion";

// Clase Principal
export class Parametros extends Instruccion {

    // Declaraciones
	public AST = null;
	
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
		
		let Traduccion = Identificador;		
		
		return Traduccion;
    }
}