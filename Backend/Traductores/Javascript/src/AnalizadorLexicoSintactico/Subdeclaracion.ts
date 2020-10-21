// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class Subdeclaracion extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: String, private Expresion: Instruccion | null) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Identificador = this.Identificador;
		let Expresion;
		let Traduccion = "";
		
		if(this.Expresion != null) {
			
			Expresion = this.Expresion.Traducir();
			
			Traduccion = Identificador + " = " + Expresion;
			
			return Traduccion;
		
		}
	
		return Identificador;
    }
}
