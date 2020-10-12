// Imports
import { Instruccion } from "./Instruccion";

// Clase Principal
export class Primitivo extends Instruccion {

    // Declaraciones
	public AST = null;
	private Value: any;
	
	// Constructor
    constructor(Linea: number, Columna: number, Value: any) {
		
		// Super Llamar Constructor Clase Abstracta
        super(Linea, Columna)
		this.Value = Value
		
	}
	
	// Metodo Traducir
    public Traducir() {

		// Retonar Valor
		return this.Value;

    }
    
}