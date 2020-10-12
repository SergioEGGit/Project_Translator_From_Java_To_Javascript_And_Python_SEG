// Imports
import { Instruccion } from "./Instruccion";

// Clase Principal
export class Clase extends Instruccion 

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: String, BloqueClase: Instruccion) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Value = this.Value.Traducir();
		let Traduccion = G.Identacion()+"console.log(" + Value + ");";
		
		return Traduccion;
    }
}