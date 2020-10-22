// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class Declaracion extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Tipo: String, private Variables: Instruccion[]) { 
        
		// Super
		super(Linea, Columna)
		
    }	

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Traduccion: string = "";
		
		// Verificar Cada Valor
		for(let Key in this.Variables) { 
		
			// Traduccion De Varias Variables
			if(Number(Key) + 1 == this.Variables.length) { 
			
				Traduccion += this.Variables[Number(Key)].Traducir();
		
			} else {
				
				Traduccion += this.Variables[Number(Key)].Traducir() + ", ";
			
			}
		}
		
		// Traduccion Una Sola Variables
		Traduccion = AgregarIdentacion() + "var " + Traduccion + "; \n\n";
	
		return Traduccion;
    }
}