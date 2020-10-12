// Imports
import { Instruccion } from "./Instruccion";

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
		let Expresion//si es null no hay metodo traducir hay que validarlo 
		console.log(this.Expresion)
		if(this.Expresion != null) {// F jaja
			Expresion = this.Expresion.Traducir();
			return Identificador + " = " + Expresion;
		}
	
		return Identificador;
    }
}
