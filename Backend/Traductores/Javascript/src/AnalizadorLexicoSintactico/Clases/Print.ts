// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from './Variables_Metodos'

// Clase Principal
export class Print extends Instruccion{

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Value: Instruccion) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Value = this.Value.Traducir();
		
		let Traduccion = AgregarIdentacion() + "console.log(" + Value + "); \n\n";
		
		return Traduccion;
    }
}