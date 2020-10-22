// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class Asignacion extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: string, private Expresion: Instruccion | null) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Identificador = this.Identificador;
		let Expresion;
		let Traduccion = "";
		
		// Verificar Si Hay Una Expresion
		if(this.Expresion != null) {
			
			Expresion = this.Expresion.Traducir();
			
			// Con Expresion		
			Traduccion = AgregarIdentacion() + Identificador + " = " + Expresion + "; \n\n";
			
			return Traduccion;
		
		}
		
		// Sin Expresion
		Traduccion = AgregarIdentacion() + Identificador + "; \n\n";
	
		return Traduccion;
    }
}